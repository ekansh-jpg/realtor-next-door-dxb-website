import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

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
          Get a Free Consultation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-lg font-sans italic leading-relaxed"
          style={{ color: '#555' }}
        >
          Whether you're buying your first home, investing for the future, or upgrading your lifestyle — I'm here to make it happen. No pressure, just honest guidance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="https://wa.me/971544590555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Me
          </a>
          <a
            href="tel:+971544590555"
            className="inline-block rounded-full px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: '#0A0A0A' }}
          >
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
