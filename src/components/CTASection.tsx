import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl font-bold uppercase tracking-[0.15em] md:text-4xl"
          style={{ color: '#0A0A0A' }}
        >
          Book a Meeting
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-lg font-sans italic leading-relaxed"
          style={{ color: '#555' }}
        >
          With years of real estate expertise, I'm dedicated to helping investors find the best deals in Dubai.
          <br />
          Let's work together to turn your investment goals into reality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="tel:+971544590555"
            className="inline-block rounded-full px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: '#0A0A0A' }}
          >
            Call Now — +971 54 459 0555
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
