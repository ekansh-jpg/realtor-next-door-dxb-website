import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Properties Sold" },
  { value: 1, suffix: "B+", prefix: "$", label: "worth of properties" },
];

const Counter = ({ target, suffix, prefix }: { target: number; suffix: string; prefix?: string }) => {
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

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-5xl font-bold text-primary md:text-6xl">
        {prefix}{count}{suffix}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {stat.label}
              </p>
              <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
