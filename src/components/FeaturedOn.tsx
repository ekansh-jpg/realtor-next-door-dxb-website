import { motion } from "framer-motion";
import nightSkyline from "@/assets/dubai-night-skyline.jpg";

const FeaturedOn = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${nightSkyline})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.8)' }} />

      <div className="relative z-10 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10"
          >
            <h3 className="font-serif text-2xl font-bold italic text-white/80 md:text-3xl">
              Featured on
            </h3>
            <img
              src="https://mohammedzohaib.com/wp-content/uploads/2025/10/Mask-group-e1761787950828.png"
              alt="Featured media logos - Business Insider, Benzinga, AsiaOne, RCN, FOX"
              className="max-w-sm opacity-90 md:max-w-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
