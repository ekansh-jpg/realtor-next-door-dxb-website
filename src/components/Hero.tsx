import { motion } from "framer-motion";
import heroBg from "@/assets/ekansh-hero.jpg";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.5)' }} />

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl font-bold uppercase tracking-wider text-white md:text-7xl lg:text-8xl"
        >
          Ekansh Kinger
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 font-serif text-lg italic tracking-wide text-white/80 md:text-xl"
        >
          Meet Your Realtor Next Door
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
