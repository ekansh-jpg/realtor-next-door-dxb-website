import { motion } from "framer-motion";
import bgAchievements from "@/assets/bg-achievements.jpg";
import { Award, ShieldCheck, Briefcase, Users } from "lucide-react";

const achievements = [
  {
    title: "Top Broker",
    subtitle: "Developer Awards",
    description: "Recognized as top-performing broker by leading Dubai developers for outstanding sales.",
    icon: Award,
  },
  {
    title: "RERA Certified",
    subtitle: "Official Recognition",
    description: "Fully certified and authorized real estate broker in Dubai.",
    icon: ShieldCheck,
  },
  {
    title: "Dual Industry",
    subtitle: "E-learning & Real Estate",
    description: "Unique expertise spanning two competitive industries — e-learning and Dubai real estate.",
    icon: Briefcase,
  },
  {
    title: "500+ Network",
    subtitle: "Strong Connections",
    description: "A powerful professional network of 500+ industry leaders, mentors, and clients.",
    icon: Users,
  },
];

const Achievements = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgAchievements})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.8)' }} />

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 text-center font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
          >
            My Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center font-sans italic leading-relaxed text-white/70"
          >
            Recognition That Speaks Volumes — Honored by top developers and trusted by hundreds of clients,
            these milestones fuel my drive to lead in real estate.
          </motion.p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-xl p-8 text-center transition-all duration-300 border-t-2"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.9)',
                  borderTopColor: '#C9A96E',
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="mx-auto mb-4 h-12 w-12" style={{ color: '#C9A96E' }} />
                </motion.div>
                <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-white">{item.title}</h3>
                <p className="mt-1 font-sans text-sm font-semibold" style={{ color: '#C9A96E' }}>{item.subtitle}</p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
