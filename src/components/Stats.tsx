import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import dubaiSkyline from "@/assets/dubai-night-skyline.jpg";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Properties Sold", format: false },
  { value: 500, suffix: "M+", prefix: "AED ", label: "Worth of Properties" },
];

const Counter = ({ target, suffix, prefix, format }: { target: number; suffix: string; prefix?: string; format?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  const displayCount = format ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
        {prefix}{displayCount}{suffix}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${dubaiSkyline})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }} />

      <div className="relative z-10 py-14 md:py-28">
        <div className="container mx-auto px-5 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center font-serif text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl md:text-4xl"
          >
            Real Estate Entrepreneur
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-12 md:mb-20 max-w-3xl text-center font-sans text-sm md:text-base leading-relaxed text-white/70 px-2"
          >
            Ekansh Kinger's journey from e-learning to becoming a leading realtor and investment manager
            in Dubai is a testament to persistence and vision. Mastering two competitive industries, he
            brings strategic business planning, sharp negotiation skills, and a client-first approach
            to every property deal — from off-plan investments to ready villas.
          </motion.p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} format={stat.format} />
                <p className="mt-3 md:mt-4 font-serif text-base md:text-lg text-white/80">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
