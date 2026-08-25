import { motion } from "framer-motion";
import emaar from "@/assets/emaar.webp";
import damac from "@/assets/damac.webp";
import nakheel from "@/assets/nakheel.webp";
import sobha from "@/assets/sobha.webp";
import meraas from "@/assets/meraas.webp";
import binghatti from "@/assets/binghatti.webp";

const logos = [
  { src: emaar, alt: "Emaar Properties" },
  { src: damac, alt: "DAMAC Properties" },
  { src: sobha, alt: "Sobha Realty" },
  { src: nakheel, alt: "Nakheel" },
  { src: meraas, alt: "Meraas" },
  { src: binghatti, alt: "Binghatti Developers" },
];

const PartnersMarquee = () => {
  return (
    <section style={{ backgroundColor: "#0A0A0A" }} className="py-10 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-5 md:px-6 mb-6 md:mb-8"
      >
        <p className="text-center font-sans text-[10px] md:text-xs uppercase tracking-[0.3em]" style={{ color: "#C9A96E" }}>
          Trusted Developer Partners
        </p>
        <div className="mx-auto mt-3 h-[1px] w-12" style={{ backgroundColor: "#C9A96E" }} />
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #0A0A0A, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #0A0A0A, transparent)" }} />
        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-6 md:mx-12 flex h-14 w-[120px] flex-shrink-0 items-center justify-center md:h-20 md:w-[180px]">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
