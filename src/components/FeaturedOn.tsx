import { motion } from "framer-motion";
import bgFeatured from "@/assets/bg-featured.jpg";

const FeaturedOn = () => {
  return (
    <section
      className="relative bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${bgFeatured})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.8)' }} />

      <div className="relative z-10 py-10 md:py-16">
        <div className="container mx-auto px-5 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 md:gap-6 md:flex-row md:justify-center md:gap-10"
          >
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-xl md:text-2xl lg:text-3xl font-bold italic text-white/80"
            >
              Featured on
            </motion.h3>
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              src="https://mohammedzohaib.com/wp-content/uploads/2025/10/Mask-group-e1761787950828.png"
              alt="Featured media logos - Business Insider, Benzinga, AsiaOne, RCN, FOX"
              className="max-w-[280px] opacity-90 sm:max-w-sm md:max-w-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
