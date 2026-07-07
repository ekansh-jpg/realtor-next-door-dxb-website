import { motion } from "framer-motion";
import { Heart, Building2, HandshakeIcon, Globe } from "lucide-react";
import bgWhyme from "@/assets/bg-whyme.webp";

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
    <section
      className="relative bg-cover bg-center md:bg-fixed py-14 md:py-28"
      style={{ backgroundImage: `url(${bgWhyme})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.82)' }} />
      <div className="relative z-10 container mx-auto px-5 md:px-6">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-2 text-center font-sans text-xs md:text-sm uppercase"
          style={{ color: '#C9A96E' }}
        >
          Why Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 md:mb-6 text-center font-serif text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl md:text-4xl"
        >
          Why Clients Choose Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mb-10 md:mb-16 max-w-2xl text-center font-sans text-sm italic leading-relaxed text-white/60 px-2"
        >
          It's not just about finding a property — it's about finding the right partner who has your best interests at heart.
        </motion.p>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
              className="group rounded-xl border border-white/10 p-5 md:p-8 text-center transition-all duration-300 hover:border-white/25 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(17, 17, 17, 0.85)' }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                className="mb-3 md:mb-4 inline-block font-serif text-2xl md:text-3xl font-bold"
                style={{ color: '#C9A96E' }}
              >
                {item.num}
              </motion.span>
              <item.icon className="mx-auto mb-3 md:mb-4 h-6 w-6 md:h-8 md:w-8 text-white/40 transition-colors group-hover:text-white/70" />
              <h3 className="font-serif text-sm md:text-lg font-bold uppercase tracking-wider text-white">{item.title}</h3>
              <p className="mt-2 md:mt-3 font-sans text-xs md:text-sm leading-relaxed text-white/50 hidden sm:block">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
