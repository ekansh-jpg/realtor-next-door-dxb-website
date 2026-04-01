import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center" style={{ backgroundColor: '#787878' }}>
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-white/60"
        >
          Certified RERA Broker • Dubai
        </motion.p>
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
          Your Trusted Realtor Next Door in Dubai
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-3 font-sans text-sm text-white/60 max-w-md mx-auto"
        >
          Investment Manager at NobleHorizon — helping you find the best real estate deals in Dubai without confusion or pressure.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
