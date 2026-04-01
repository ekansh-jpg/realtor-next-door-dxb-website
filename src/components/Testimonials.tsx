import { motion } from "framer-motion";
import { Star, Award, Users, StarIcon } from "lucide-react";
import nightSkyline from "@/assets/dubai-night-skyline.jpg";

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
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${nightSkyline})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.85)' }} />

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
          >
            What Clients Say
          </motion.h2>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-xl border-l-2 p-8"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.9)',
                  borderLeftColor: '#C9A96E',
                }}
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" style={{ color: '#C9A96E' }} />
                  ))}
                </div>
                <p className="font-sans text-sm italic leading-relaxed text-white/70">
                  "{t.quote}"
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-serif text-base font-bold text-white">{t.name}</p>
                  <p className="font-sans text-xs text-white/50">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom highlights */}
          <div className="mt-16 grid grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center gap-2 rounded-lg py-6"
                style={{ backgroundColor: 'rgba(17, 17, 17, 0.7)' }}
              >
                <h.icon className="h-6 w-6" style={{ color: '#C9A96E' }} />
                <p className="font-serif text-xl font-bold text-white md:text-2xl">{h.label}</p>
                <p className="font-sans text-xs text-white/50">{h.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
