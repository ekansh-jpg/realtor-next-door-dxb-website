import { motion } from "framer-motion";
import dubaiSkyline from "@/assets/dubai-night-skyline.webp";

// Only verifiable facts belong here — no sales counts or totals unless they can be evidenced.
const facts = [
  { value: "Since 2022", label: "in UAE Real Estate" },
  { value: "RERA BRN 84711", label: "Licensed in Dubai" },
  { value: "English & Hindi", label: "Languages" },
];

const Stats = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${dubaiSkyline})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }} />

      <div className="relative z-10 py-14 md:py-28">
        <div className="container mx-auto px-5 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center font-serif text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl md:text-4xl"
          >
            Real Estate Entrepreneur
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-12 md:mb-20 max-w-3xl text-center font-sans text-sm md:text-base leading-relaxed text-white/70 px-2"
          >
            Ekansh Kinger moved from e-learning into Dubai real estate in 2022. He brings business
            planning, negotiation and a client-first approach to every property search — from off-plan
            investments to ready villas.
          </motion.p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
            {facts.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <p className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">{stat.value}</p>
                <p className="mt-3 md:mt-4 font-serif text-base md:text-lg text-white/80">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
