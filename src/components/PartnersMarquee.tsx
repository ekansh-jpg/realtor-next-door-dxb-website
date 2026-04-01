import { motion } from "framer-motion";

const logos = [
  { src: "https://mohammedzohaib.com/wp-content/uploads/2024/08/EMAAR_WORD_MARK_EN-removebg-preview-1-e1695141770709.png", alt: "Emaar" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2024/08/logo_eaf_011b3f-300x140-1.png", alt: "EAF" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/Damac_logo.svg.png", alt: "Damac" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/BEYOND-LOGO.png", alt: "Beyond" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/Binghatti-logo-dark.webp", alt: "Binghatti" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/sobha.webp", alt: "Sobha" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/Meraas.png", alt: "Meraas" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2024/08/Nakheel-new-300x211-1.png", alt: "Nakheel" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2024/08/10.png", alt: "Partner" },
];

const PartnersMarquee = () => {
  return (
    <section style={{ backgroundColor: '#0A0A0A' }} className="py-10 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-5 md:px-6 mb-6 md:mb-8"
      >
        <p className="text-center font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40">
          Trusted Developer Partners
        </p>
      </motion.div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10" style={{ background: "linear-gradient(to right, #0A0A0A, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10" style={{ background: "linear-gradient(to left, #0A0A0A, transparent)" }} />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-4 md:mx-8 flex-shrink-0 flex items-center justify-center" style={{ minWidth: 100 }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain opacity-60 brightness-0 invert md:h-16 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
