import { motion } from "framer-motion";
import bgCta from "@/assets/bg-cta.jpg";

const CTASection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgCta})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }} />

      <div className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl font-bold uppercase tracking-[0.15em] text-white md:text-4xl"
          >
            Book a Meeting
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-lg font-sans italic leading-relaxed text-white/70"
          >
            With years of real estate expertise, I'm dedicated to helping investors find the best deals in Dubai.
            <br />
            Let's work together to turn your investment goals into reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5, type: "spring", stiffness: 200 }}
            className="mt-10"
          >
            <motion.a
              href="tel:+971544590555"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block rounded-full px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300"
              style={{ backgroundColor: '#C9A96E' }}
            >
              Call Now — +971 54 459 0555
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
