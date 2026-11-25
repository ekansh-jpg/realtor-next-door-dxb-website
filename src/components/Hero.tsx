import { openLeadForm } from "@/lib/leads";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import uploadedHomeImage from "@/assets/uploaded-home-ekansh-bw.webp";

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Mobile: black & white background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
        style={{ opacity: 0.75, filter: "grayscale(1)" }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-mobile-poster.jpg"
      >
        <source src="/videos/hero-mobile-bw.mp4" type="video/mp4" />
      </video>

      {/* Desktop / tablet: background image — desaturated to B&W with slight transparency */}
      <picture className="absolute inset-0 hidden bg-black md:block">
        <img
          src={uploadedHomeImage}
          alt="Ekansh Kinger, Dubai Real Estate Investment Advisor"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity: 0.85 }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>


      {/* Premium dark gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.45) 40%, rgba(10,10,10,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(10,10,10,0.6) 100%)",
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
            <span className="sr-only"> — Dubai Real Estate Investment Advisor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-3 font-sans text-xs sm:text-sm md:text-base tracking-wide text-white/85"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
          >
            Real Estate Investment Advisor · RERA BRN 84711
          </motion.p>
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-3 mx-auto max-w-xl font-sans text-sm md:text-base text-white/85"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
          >
            Research-driven property advice for investors buying in Dubai — off-plan, ready and commercial.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={() => openLeadForm({ formName: "hero_consultation", title: "Book a Free Consultation", subtitle: "Tell me your goals and I'll call you back personally." })}
              className="w-full sm:w-auto rounded-full px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-widest transition hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#0A0A0A", boxShadow: "0 8px 30px -8px rgba(201,169,110,0.6)" }}
            >
              Book a Free Consultation
            </button>
            <a
              href={`https://wa.me/971544590555?text=${encodeURIComponent("Hi Ekansh, I'm interested in Dubai property. I found you on your website (Home).")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-widest text-white border backdrop-blur-sm transition hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.6)" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Me
            </a>
          </motion.div>
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
