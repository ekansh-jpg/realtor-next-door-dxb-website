import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(60),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20),
  interest: z.string().trim().max(200).optional(),
});

const STORAGE_KEY = "ek_lets_connect_seen";

const LetsConnectModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "" });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    const { name, phone, interest } = parsed.data;
    const msg = `Hi Ekansh, I'd like to connect.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}${interest ? `%0AInterest: ${encodeURIComponent(interest)}` : ""}`;
    window.open(`https://wa.me/971544590555?text=${msg}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border p-6 md:p-8"
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

            <p className="font-sans text-[11px] tracking-[0.3em] uppercase mb-2" style={{ color: "#C9A96E" }}>
              Exclusive
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">
              Let's Connect
            </h3>
            <div className="h-[2px] w-12 my-3" style={{ backgroundColor: "#C9A96E" }} />
            <p className="font-sans text-sm text-white/70 mb-6">
              Share your details — I'll personally reach out on WhatsApp with Dubai's best opportunities.
            </p>

            <form onSubmit={submit} className="space-y-3">
              <input
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={60}
                className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-[#C9A96E]/60 focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone / WhatsApp number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-[#C9A96E]/60 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="I'm interested in… (optional)"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                maxLength={200}
                className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-[#C9A96E]/60 focus:outline-none transition"
              />

              {error && <p className="text-xs text-red-400">{error}</p>}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
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
