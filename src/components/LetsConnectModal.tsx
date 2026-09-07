import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { z } from "zod";

const MAIL_TO = "investmentmanagment9000@gmail.com";
const WHATSAPP_NUMBER = "971544590555";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(6, "Enter a valid phone").max(25),
  budget: z.string().min(1, "Select your budget"),
  timeline: z.string().min(1, "Select your timeline"),
});

const budgets = [
  "Under AED 1M",
  "AED 1M – 3M",
  "AED 3M – 5M",
  "AED 5M – 10M",
  "AED 10M – 25M",
  "AED 25M+",
];

const timelines = [
  "Ready to buy now",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "Just exploring",
];

const STORAGE_KEY = "ek_lets_connect_seen";

const LetsConnectModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 4500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSendError(false);
    setErrorMsg(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    const { name, email, phone, budget, timeline } = parsed.data;
    setSending(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${MAIL_TO}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Enquiry — ${name} (${budget})`,
          _template: "box",
          _captcha: "false",
          _replyto: email,
          "Full Name": name,
          "Email Address": email,
          "Phone Number": phone,
          "Budget Range": budget,
          "Purchase Timeline": timeline,
          "Source": "Website · Let's Connect Popup",
          "Submitted At": new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai", dateStyle: "full", timeStyle: "short" }),
        }),
      });
      let data: any = {};
      try { data = await res.json(); } catch {}
      if (!res.ok || data?.success === "false" || data?.success === false) {
        const msg = data?.message ? String(data.message) : "";
        if (msg.toLowerCase().includes("activation") || msg.toLowerCase().includes("activate")) {
          setErrorMsg("ACTIVATION_NEEDED");
        } else {
          setErrorMsg(msg || "Non-OK response");
        }
        throw new Error(msg || "Non-OK response");
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Email send failed", err);
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const whatsappFallbackHref = () => {
    const text = `Hi Ekansh, I'm ${form.name || "interested buyer"} and I'd like to discuss Dubai property options.%0A%0AEmail: ${form.email || "—"}%0APhone: ${form.phone || "—"}%0ABudget: ${form.budget || "—"}%0ATimeline: ${form.timeline || "—"}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const mailtoFallbackHref = () => {
    const subject = encodeURIComponent(`New Enquiry — ${form.name || "Website Lead"}`);
    const body = encodeURIComponent(
      `Full Name: ${form.name || "—"}\nEmail: ${form.email || "—"}\nPhone: ${form.phone || "—"}\nBudget: ${form.budget || "—"}\nTimeline: ${form.timeline || "—"}\nSource: Website · Let's Connect Popup`
    );
    return `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-[#C9A96E]/60 focus:outline-none transition";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          style={{ backgroundColor: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border p-6 md:p-8 my-8 max-h-[92vh] overflow-y-auto"
            style={{
              backgroundColor: "#111111",
              borderColor: "rgba(201,169,110,0.35)",
              boxShadow: "0 20px 60px -10px rgba(201,169,110,0.25)",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <p
              className="font-sans text-[11px] tracking-[0.3em] uppercase mb-2"
              style={{ color: "#C9A96E" }}
            >
              Exclusive
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">
              Let's Connect
            </h3>
            <div className="h-[2px] w-12 my-3" style={{ backgroundColor: "#C9A96E" }} />
            <p className="font-sans text-sm text-white/70 mb-5">
              Share your details — I'll personally reach out with Dubai's best opportunities.
            </p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-4">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.15)" }}>
                  <CheckCircle2 className="h-8 w-8" style={{ color: "#C9A96E" }} />
                </div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#C9A96E" }}>Received</p>
                <h4 className="font-serif text-2xl font-bold uppercase tracking-wider text-white mb-2">
                  Thank You{form.name ? `, ${form.name.split(" ")[0]}` : ""}
                </h4>
                <div className="h-[2px] w-10 mx-auto my-3" style={{ backgroundColor: "#C9A96E" }} />
                <p className="font-sans text-sm text-white/70 mb-1">Your enquiry is in my inbox.</p>
                <p className="font-sans text-xs text-white/50 mb-6">
                  I'll personally reply to <span className="text-white/80">{form.email}</span> within a few hours.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full px-6 py-2.5 font-sans text-[11px] uppercase tracking-widest text-black transition"
                  style={{ backgroundColor: "#C9A96E" }}
                >
                  Close
                </button>
              </motion.div>
            ) : (

            <form onSubmit={submit} className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-white/50 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={80}
                  className={inputCls}
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-white/50 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={120}
                  className={inputCls}
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-white/50 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+971 XXX XXX XXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={25}
                  className={inputCls}
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-white/50 mb-1.5">
                  Budget *
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className={inputCls}
                  required
                >
                  <option value="" disabled>Select your budget</option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-[#111]">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-white/50 mb-1.5">
                  Timeline *
                </label>
                <select
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  className={inputCls}
                  required
                >
                  <option value="" disabled>Select your timeline</option>
                  {timelines.map((t) => (
                    <option key={t} value={t} className="bg-[#111]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {error && <p className="text-xs text-red-400">{error}</p>}
              {sendError && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border p-3"
                  style={{ backgroundColor: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.35)" }}>
                  <div className="flex items-start gap-2.5 mb-2">
                    <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-red-400" />
                    <div>
                      <p className="font-sans text-xs font-semibold text-white">
                        {errorMsg === "ACTIVATION_NEEDED" ? "Form needs activation" : "Couldn't send right now"}
                      </p>
                      <p className="font-sans text-[11px] text-white/60 mt-0.5">
                        {errorMsg === "ACTIVATION_NEEDED" ? (
                          <>FormSubmit sent an activation link to <span className="text-white/80">{MAIL_TO}</span>. Please check inbox & spam and click "Activate Form". Then try again.</>
                        ) : (
                          <>Please try again, or reach me on{" "}
                            <a href="tel:+971544590555" className="underline" style={{ color: "#C9A96E" }}>+971 54 459 0555</a>.</>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={whatsappFallbackHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-full py-2.5 font-sans text-[11px] uppercase tracking-widest text-black transition"
                      style={{ backgroundColor: "#C9A96E" }}
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Send via WhatsApp
                    </a>
                    <a
                      href={mailtoFallbackHref()}
                      className="flex items-center justify-center gap-2 w-full rounded-full py-2 font-sans text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition border border-white/10 hover:border-white/25"
                    >
                      <Send className="h-3.5 w-3.5" /> Send via Mail App
                    </a>
                  </div>
                </motion.div>
              )}

              <motion.button
                whileHover={!sending ? { scale: 1.02 } : undefined}
                whileTap={!sending ? { scale: 0.98 } : undefined}
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-black transition mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#C9A96E" }}
              >
                {sending ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending…</>)
                  : sendError ? (<><Send className="h-4 w-4" />Try Again</>)
                  : (<><Send className="h-4 w-4" />Send Enquiry</>)}
              </motion.button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white/70 pt-1 transition"
              >
                Maybe later
              </button>
            </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LetsConnectModal;
