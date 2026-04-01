import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background">
      {/* Content - centered, clean, no background image overlay */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl font-bold uppercase tracking-wider text-white md:text-7xl lg:text-8xl"
        >
          Mohammed Zohaib
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 font-serif text-lg italic tracking-wide text-white/80 md:text-xl"
        >
          #1 Real Estate Consultant in Dubai
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
