import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Play, X, ExternalLink } from "lucide-react";

interface InstagramReelProps {
  url: string;
  title: string;
}

const InstagramReel = ({ url, title }: InstagramReelProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "blocked">("loading");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<"loading" | "loaded" | "blocked">("loading");
  const timeoutRef = useRef<number | null>(null);
  const modalTimeoutRef = useRef<number | null>(null);
  const embedSrc = `${url}embed/captioned/`;

  useEffect(() => {
    // If the iframe doesn't fire onLoad within 5s, treat it as blocked
    timeoutRef.current = window.setTimeout(() => {
      setStatus((s) => (s === "loading" ? "blocked" : s));
    }, 5000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    setModalStatus("loading");
    modalTimeoutRef.current = window.setTimeout(() => {
      setModalStatus((s) => (s === "loading" ? "blocked" : s));
    }, 5000);
    return () => {
      if (modalTimeoutRef.current) window.clearTimeout(modalTimeoutRef.current);
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen]);

  const Fallback = ({ onOpen }: { onOpen: () => void }) => (
    <button
      onClick={onOpen}
      aria-label={`Open reel: ${title}`}
      className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-white"
      style={{
        background:
          "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/40 transition-transform group-hover:scale-110">
          <Play className="h-7 w-7 fill-white text-white" />
        </div>
        <Instagram className="h-6 w-6" strokeWidth={1.5} />
        <p className="font-serif text-sm">{title}</p>
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/90">
          Tap to watch
        </p>
      </div>
    </button>
  );

  return (
    <>
      <div className="aspect-[9/12] relative overflow-hidden bg-black">
        {status !== "blocked" && (
          <iframe
            src={embedSrc}
            className="h-full w-full border-0"
            loading="lazy"
            scrolling="no"
            allow="encrypted-media; autoplay; clipboard-write; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("blocked")}
          />
        )}
        {status === "blocked" && <Fallback onOpen={() => setModalOpen(true)} />}
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-3 text-center font-sans text-xs uppercase tracking-wider text-white/80 hover:text-[#C9A96E] transition-colors border-t border-white/10"
      >
        View on Instagram →
      </a>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl"
            >
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[9/12] relative bg-black">
                {modalStatus !== "blocked" ? (
                  <iframe
                    src={embedSrc}
                    className="h-full w-full border-0"
                    scrolling="no"
                    allow="encrypted-media; autoplay; clipboard-write; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={title}
                    onLoad={() => setModalStatus("loaded")}
                    onError={() => setModalStatus("blocked")}
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white p-6 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #f09433 0%, #dc2743 50%, #bc1888 100%)",
                    }}
                  >
                    <Instagram className="h-10 w-10" strokeWidth={1.5} />
                    <p className="font-serif text-base">{title}</p>
                    <p className="font-sans text-xs text-white/90 max-w-[240px]">
                      This reel can't be embedded on your device. Open it on Instagram to watch.
                    </p>
                  </div>
                )}
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                }}
              >
                Open on Instagram
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InstagramReel;
