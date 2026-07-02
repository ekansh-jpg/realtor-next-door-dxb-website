import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroDesktop from "@/assets/hero-desktop.png.asset.json";
import heroMobile from "@/assets/hero-mobile.png.asset.json";

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Responsive background image */}
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet={heroDesktop.url} />
        <img
          src={heroMobile.url}
          alt="Ekansh Kinger with Dubai skyline"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Premium gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 40%, rgba(10,10,10,0.75) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.5) 100%)",
        }}
      />

      {/* Subtle gold glow */}
      <motion.div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, rgba(201,169,110,0.18), transparent 65%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-[10px] md:text-xs uppercase mb-4 md:mb-6 text-white/80"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            Dubai Real Estate
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-4xl font-bold uppercase tracking-wider text-white sm:text-5xl md:text-7xl lg:text-8xl"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.7)" }}
          >
            Ekansh Kinger
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-[2px] mx-auto mt-4 md:mt-6 mb-3 md:mb-4"
            style={{ backgroundColor: "#C9A96E", boxShadow: "0 0 12px rgba(201,169,110,0.6)" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-serif text-base md:text-xl italic tracking-wide text-white/90"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
          >
            Meet Your Realtor Next Door
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
