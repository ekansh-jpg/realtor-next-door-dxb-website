import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { z } from "zod";

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
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    const { name, email, phone, budget, timeline } = parsed.data;
    try {
      await fetch("https://formsubmit.co/ajax/investmentmanagment9000@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Lead from Website — ${name}`,
          _template: "table",
          _captcha: "false",
          Name: name,
          Email: email,
          Phone: phone,
          Budget: budget,
          Timeline: timeline,
          Source: "Let's Connect Popup",
        }),
      });
    } catch (err) {
      console.error("Email send failed", err);
    }
    setSubmitted(true);
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
              Share your details — I'll personally reach out on WhatsApp with Dubai's best opportunities.
            </p>

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

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition mt-2"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="h-4 w-4" />
                Send via WhatsApp
              </motion.button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white/70 pt-1 transition"
              >
                Maybe later
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LetsConnectModal;
