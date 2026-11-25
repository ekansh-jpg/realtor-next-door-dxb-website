import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { BUDGETS, INTERESTS, TIMELINES, WHATSAPP_NUMBER, leadSchema, submitLead } from "@/lib/leads";

type Props = {
  formName: string;
  variant?: "full" | "short";
  property?: string;
  withMessage?: boolean;
  submitLabel?: string;
  onDone?: () => void;
};

const inputCls =
  "w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-[#C9A96E]/60 focus:outline-none transition disabled:opacity-60";
const labelCls = "block text-[10px] md:text-[11px] uppercase tracking-widest text-white/50 mb-1.5";

const empty = { name: "", phone: "", email: "", budget: "", interest: "", timeline: "", country: "", message: "" };

const LeadForm = ({ formName, variant = "full", property, withMessage, submitLabel = "Send Enquiry", onDone }: Props) => {
  const [form, setForm] = useState(empty);
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (hp) { setDone(true); return; } // bot filled the hidden field — pretend success, save nothing
    const parsed = leadSchema.safeParse({ ...form, consent });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check the form"); return; }
    setSending(true);
    try {
      await submitLead(parsed.data, formName, property);
      setDone(true);
    } catch (err) {
      console.error("Lead submit failed", err);
      setError("Something went wrong sending your details. Please try again or message me on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  const waText = encodeURIComponent(
    `Hi Ekansh, I'm ${form.name || "interested in Dubai property"}. I just sent an enquiry on your website${property ? ` about ${property}` : ""}.`,
  );
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  if (done) {
    return (
      <div className="text-center py-4">
        <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.15)" }}>
          <CheckCircle2 className="h-8 w-8" style={{ color: "#C9A96E" }} />
        </div>
        <h4 className="font-serif text-2xl font-bold uppercase tracking-wider text-white mb-2">
          Thank You{form.name ? `, ${form.name.trim().split(" ")[0]}` : ""}
        </h4>
        <div className="h-[2px] w-10 mx-auto my-3" style={{ backgroundColor: "#C9A96E" }} />
        <p className="font-sans text-sm text-white/70 mb-6">Your details have been received. I'll be in touch personally.</p>
        <a href={waHref} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest transition hover:opacity-90"
          style={{ backgroundColor: "#C9A96E", color: "#0A0A0A" }}>
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp now
        </a>
        {onDone && (
          <button onClick={onDone} className="block mx-auto mt-4 font-sans text-[11px] uppercase tracking-widest text-white/50 hover:text-white">Close</button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-3" name={formName}>
      {/* honeypot — hidden from humans */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Company website<input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} name="company_website" /></label>
      </div>
      <div className={variant === "full" ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "space-y-3"}>
        <div><label className={labelCls}>Full Name *</label>
          <input className={inputCls} value={form.name} onChange={set("name")} maxLength={100} placeholder="Your full name" autoComplete="name" disabled={sending} /></div>
        <div><label className={labelCls}>WhatsApp Number *</label>
          <input className={inputCls} type="tel" value={form.phone} onChange={set("phone")} maxLength={30} placeholder="+971 50 123 4567" autoComplete="tel" disabled={sending} /></div>
        <div className={variant === "full" ? "sm:col-span-2" : ""}><label className={labelCls}>Email *</label>
          <input className={inputCls} type="email" value={form.email} onChange={set("email")} maxLength={255} placeholder="you@email.com" autoComplete="email" disabled={sending} /></div>
        {variant === "full" && (
          <>
            <div><label className={labelCls}>Budget</label>
              <select className={inputCls} value={form.budget} onChange={set("budget")} disabled={sending}>
                <option value="">Select budget</option>{BUDGETS.map((b) => <option key={b}>{b}</option>)}</select></div>
            <div><label className={labelCls}>Interest</label>
              <select className={inputCls} value={form.interest} onChange={set("interest")} disabled={sending}>
                <option value="">Select interest</option>{INTERESTS.map((b) => <option key={b}>{b}</option>)}</select></div>
            <div><label className={labelCls}>Timeline</label>
              <select className={inputCls} value={form.timeline} onChange={set("timeline")} disabled={sending}>
                <option value="">Select timeline</option>{TIMELINES.map((b) => <option key={b}>{b}</option>)}</select></div>
            <div><label className={labelCls}>Country of Residence</label>
              <input className={inputCls} value={form.country} onChange={set("country")} maxLength={80} placeholder="e.g. India, UK, UAE" autoComplete="country-name" disabled={sending} /></div>
          </>
        )}
        {withMessage && (
          <div className={variant === "full" ? "sm:col-span-2" : ""}><label className={labelCls}>Message</label>
            <textarea className={inputCls} rows={3} value={form.message} onChange={set("message")} maxLength={2000} placeholder="Tell me what you're looking for" disabled={sending} /></div>
        )}
      </div>
      <label className="flex items-start gap-2.5 cursor-pointer pt-1">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#C9A96E]" disabled={sending} />
        <span className="font-sans text-[11px] leading-relaxed text-white/60">
          I agree to be contacted by Ekansh Kinger (D&amp;B Properties) about properties. See{" "}
          <Link to="/privacy" className="underline" style={{ color: "#C9A96E" }} target="_blank">Privacy Policy</Link>.
        </span>
      </label>
      {error && <p role="alert" className="font-sans text-xs text-red-400">{error}</p>}
      <button type="submit" disabled={sending}
        className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-widest transition hover:opacity-90 disabled:opacity-70"
        style={{ backgroundColor: "#C9A96E", color: "#0A0A0A" }}>
        {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> {submitLabel}</>}
      </button>
    </form>
  );
};

export default LeadForm;
