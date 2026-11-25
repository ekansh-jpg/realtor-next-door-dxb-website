import { motion } from "framer-motion";
import bgAchievements from "@/assets/bg-achievements.webp";
import { Award, ShieldCheck, Briefcase, Users } from "lucide-react";

const achievements = [
  {
    title: "DAMAC Award",
    subtitle: "Developer Recognition",
    description: "Recognised with an award from DAMAC Properties, one of Dubai's leading developers.",
    icon: Award,
  },
  {
    title: "RERA Licensed",
    subtitle: "BRN 84711",
    description: "A licensed real estate broker in Dubai, so you can verify who you're dealing with.",
    icon: ShieldCheck,
  },

  {
    title: "Dual Industry",
    subtitle: "E-learning & Real Estate",
    description: "Unique expertise spanning two competitive industries — e-learning and Dubai real estate.",
    icon: Briefcase,
  },
  {
    title: "International Buyers",
    subtitle: "Remote-Friendly",
    description: "Video viewings and step-by-step support for investors buying from India and abroad.",
    icon: Users,
  },
];

const Achievements = () => {
  return (
    <section
      className="relative bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${bgAchievements})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.8)' }} />

      <div className="relative z-10 py-14 md:py-28">
        <div className="container mx-auto px-5 md:px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-4 md:mb-6 text-center font-serif text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl md:text-4xl"
          >
            Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mb-10 md:mb-14 max-w-3xl text-center font-sans text-sm italic leading-relaxed text-white/70 px-2"
          >
            What you can check, and what you can expect when you work with me.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-xl p-5 md:p-8 text-center transition-all duration-300 border-t-2"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.9)',
                  borderTopColor: '#C9A96E',
                }}
              >
                <item.icon className="mx-auto mb-3 md:mb-4 h-8 w-8 md:h-12 md:w-12" style={{ color: '#C9A96E' }} />
                <h3 className="font-serif text-base md:text-xl font-bold uppercase tracking-wider text-white">{item.title}</h3>
                <p className="mt-1 font-sans text-[10px] md:text-sm font-semibold" style={{ color: '#C9A96E' }}>{item.subtitle}</p>
                <p className="mt-2 md:mt-3 font-sans text-xs md:text-sm leading-relaxed text-white/60 hidden sm:block">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
