import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "@/components/leads/LeadForm";
import type { LeadRequest } from "@/lib/leads";

const SEEN_KEY = "ek_popup_shown";
const AUTO: LeadRequest = { formName: "popup", title: "Let's Connect", subtitle: "Share your details — I'll personally reach out with Dubai's best opportunities." };

const LetsConnectModal = () => {
  const [req, setReq] = useState<LeadRequest | null>(null);
  const openRef = useRef(false);
  openRef.current = !!req;

  // Manual opens (buttons) — always allowed
  useEffect(() => {
    const h = (e: Event) => setReq((e as CustomEvent<LeadRequest>).detail);
    window.addEventListener("ek:open-lead", h);
    return () => window.removeEventListener("ek:open-lead", h);
  }, []);

  // Auto popup: once per session, after 30s, 50% scroll, or desktop exit intent
  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    let fired = false;
    const fire = () => {
      if (fired || openRef.current || sessionStorage.getItem(SEEN_KEY)) return;
      fired = true;
      sessionStorage.setItem(SEEN_KEY, "1");
      setReq(AUTO);
      cleanup();
    };
    const t = window.setTimeout(fire, 30000);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.5) fire();
    };
    const desktop = window.matchMedia("(min-width: 768px) and (pointer: fine)").matches;
    const onLeave = (e: MouseEvent) => { if (desktop && e.clientY <= 0 && !e.relatedTarget) fire(); };
    // Ignore scroll/exit signals during the first few seconds so it never shows on first load
    const arm = window.setTimeout(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("mouseout", onLeave);
    }, 5000);
    function cleanup() {
      clearTimeout(t); clearTimeout(arm);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onLeave);
    }
    return cleanup;
  }, []);

  useEffect(() => {
    if (!req) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setReq(null);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [req]);

  const close = () => setReq(null);

  return (
    <AnimatePresence>
      {req && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          style={{ backgroundColor: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)" }} onClick={close}>
          <motion.div initial={{ y: 40, opacity: 0, scale: 0.95 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }} onClick={(e) => e.stopPropagation()}
            role="dialog" aria-modal="true" aria-label={req.title ?? "Enquiry"}
            className={`relative w-full ${req.variant === "short" ? "max-w-md" : "max-w-lg"} rounded-2xl border p-6 md:p-8 my-8 max-h-[92vh] overflow-y-auto`}
            style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.35)", boxShadow: "0 20px 60px -10px rgba(201,169,110,0.25)" }}>
            <button onClick={close} className="absolute top-3 right-3 p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase mb-2" style={{ color: "#C9A96E" }}>{req.property ? req.property : "Exclusive"}</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-white pr-8">{req.title ?? "Let's Connect"}</h3>
            <div className="h-[2px] w-12 my-3" style={{ backgroundColor: "#C9A96E" }} />
            {req.subtitle && <p className="font-sans text-sm text-white/70 mb-5">{req.subtitle}</p>}
            <LeadForm key={req.formName + (req.property ?? "")} formName={req.formName} property={req.property} variant={req.variant ?? "full"} onDone={close} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LetsConnectModal;
