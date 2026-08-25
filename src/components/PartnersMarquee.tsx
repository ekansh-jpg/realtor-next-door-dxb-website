import { motion } from "framer-motion";

const partners = [
  "EMAAR",
  "DAMAC",
  "SOBHA",
  "NAKHEEL",
  "MERAAS",
  "BINGHATTI",
  "ELLINGTON",
  "OMNIYAT",
  "AZIZI",
  "DUBAI PROPERTIES",
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
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="mx-3 md:mx-5 flex-shrink-0 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 md:px-8 md:py-4 transition-colors duration-300 hover:border-[#C9A96E]/50"
            >
              <span className="font-serif text-sm md:text-xl font-bold uppercase tracking-[0.15em] text-white/70">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
