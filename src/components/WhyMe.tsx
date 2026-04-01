import { motion } from "framer-motion";
import { Heart, Building2, HandshakeIcon, Globe } from "lucide-react";
import dubaiSkyline from "@/assets/dubai-night-skyline.jpg";

const reasons = [
  {
    num: "01",
    title: "Honest Guidance",
    description: "No pushy sales tactics. Just transparent advice rooted in genuine care for your investment goals.",
    icon: Heart,
  },
  {
    num: "02",
    title: "Top Developer Access",
    description: "Partnerships with Emaar, DAMAC, Sobha, Nakheel & more — exclusive deals at the best prices.",
    icon: Building2,
  },
  {
    num: "03",
    title: "End-to-End Support",
    description: "From first inquiry to post-handover, I'm with you at every step of your property journey.",
    icon: HandshakeIcon,
  },
  {
    num: "04",
    title: "International Buyers",
    description: "Seamless process for NRI and overseas buyers. I handle the complexities so you don't have to.",
    icon: Globe,
  },
];

const WhyMe = () => {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-center font-sans text-sm uppercase tracking-[0.2em]"
          style={{ color: '#C9A96E' }}
        >
          Why Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
        >
          Why Clients Choose Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-16 max-w-2xl text-center font-sans italic leading-relaxed text-white/60"
        >
          It's not just about finding a property — it's about finding the right partner who has your best interests at heart.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group rounded-xl border border-white/10 p-8 text-center transition-all duration-300 hover:border-white/20"
              style={{ backgroundColor: '#111111' }}
            >
              <span className="mb-4 inline-block font-serif text-3xl font-bold" style={{ color: '#C9A96E' }}>
                {item.num}
              </span>
              <item.icon className="mx-auto mb-4 h-8 w-8 text-white/40 transition-colors group-hover:text-white/70" />
              <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-white">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/50">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
