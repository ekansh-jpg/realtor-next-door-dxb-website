import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md shadow-2xl transition-colors hover:border-[#C9A96E]/60"
          style={{ backgroundColor: "rgba(17,17,17,0.9)" }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" style={{ color: "#C9A96E" }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
