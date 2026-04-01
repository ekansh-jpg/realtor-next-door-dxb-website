import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="border-t border-border bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl font-bold text-foreground md:text-5xl"
        >
          Book a Meeting
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-lg font-sans leading-relaxed text-muted-foreground"
        >
          After almost two decades in real estate, I'm dedicated to sharing insights with investors.
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
            href="#"
            className="inline-block rounded-lg bg-primary px-10 py-4 font-sans text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Schedule a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
