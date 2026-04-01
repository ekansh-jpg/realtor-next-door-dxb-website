import { motion } from "framer-motion";
import eventBg from "@/assets/event-crowd.jpg";
import { Heart, Building2, Headphones, Globe } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Honest Guidance",
    description: "No pushy sales tactics. Just transparent advice rooted in genuine care for your investment goals.",
  },
  {
    icon: Building2,
    title: "Top Developer Access",
    description: "Partnerships with Emaar, DAMAC, Sobha, Nakheel & more — exclusive deals at the best prices.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description: "From first inquiry to post-handover, I'm with you at every step of your property journey.",
  },
  {
    icon: Globe,
    title: "International Buyers",
    description: "Seamless process for NRI and overseas buyers. I handle the complexities so you don't have to.",
  },
];

const SocialSection = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${eventBg})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }} />

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 text-center font-sans text-xs uppercase tracking-[0.3em] text-white/50"
          >
            Why Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
          >
            Why Clients Choose Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-14 max-w-3xl text-center font-sans italic leading-relaxed text-white/70"
          >
            It's not just about finding a property — it's about finding the right partner who has your best interests at heart.
          </motion.p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center p-6 text-center rounded-xl border border-white/10 transition-all duration-300 hover:border-white/25"
                style={{ backgroundColor: 'rgba(17, 17, 17, 0.9)' }}
              >
                <reason.icon className="mb-4 h-10 w-10 text-white/70" />
                <h3 className="font-serif text-lg font-bold text-white">{reason.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
