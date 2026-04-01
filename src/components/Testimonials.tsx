import { motion } from "framer-motion";
import { Star, Award, Users, StarIcon } from "lucide-react";
import bgTestimonials from "@/assets/bg-testimonials.jpg";

const testimonials = [
  {
    quote: "Ekansh made the entire process so smooth. His knowledge of the market and honest advice helped us get our dream apartment.",
    name: "Rahul & Priya M.",
    role: "First-time Buyers",
  },
  {
    quote: "As an NRI investor, I was worried about the process. Ekansh handled everything professionally and got me a great deal.",
    name: "Vikram S.",
    role: "NRI Investor",
  },
  {
    quote: "No pressure, just genuine guidance. That's rare in real estate. Highly recommend Ekansh for anyone looking in Dubai.",
    name: "Ahmed K.",
    role: "End User",
  },
];

const highlights = [
  { icon: Award, label: "Top Broker", sub: "Developer Awards" },
  { icon: Users, label: "500+", sub: "Professional Network" },
  { icon: StarIcon, label: "5.0 ★", sub: "Client Rating" },
];

const Testimonials = () => {
  return (
    <section
      className="relative bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${bgTestimonials})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.85)' }} />

      <div className="relative z-10 py-14 md:py-28">
        <div className="container mx-auto px-5 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 md:mb-14 text-center font-serif text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl md:text-4xl"
          >
            What Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="rounded-xl border-l-2 p-6 md:p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.9)',
                  borderLeftColor: '#C9A96E',
                }}
              >
                <div className="mb-3 md:mb-4 flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-current" style={{ color: '#C9A96E' }} />
                  ))}
                </div>
                <p className="font-sans text-xs md:text-sm italic leading-relaxed text-white/70">
                  "{t.quote}"
                </p>
                <div className="mt-4 md:mt-6 border-t border-white/10 pt-3 md:pt-4">
                  <p className="font-serif text-sm md:text-base font-bold text-white">{t.name}</p>
                  <p className="font-sans text-[10px] md:text-xs text-white/50">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:mt-16 grid grid-cols-3 gap-3 md:gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-1 md:gap-2 rounded-lg py-4 md:py-6 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(17, 17, 17, 0.7)' }}
              >
                <h.icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: '#C9A96E' }} />
                <p className="font-serif text-base font-bold text-white md:text-2xl">{h.label}</p>
                <p className="font-sans text-[9px] md:text-xs text-white/50">{h.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
