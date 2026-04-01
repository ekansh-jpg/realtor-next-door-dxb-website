import { motion } from "framer-motion";

const FeaturedOn = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center font-serif text-3xl font-bold text-foreground md:text-4xl"
        >
          Featured on
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="https://mohammedzohaib.com/wp-content/uploads/2025/10/Mask-group-e1761787950828.png"
            alt="Featured media logos"
            className="max-w-full md:max-w-3xl opacity-80"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedOn;
