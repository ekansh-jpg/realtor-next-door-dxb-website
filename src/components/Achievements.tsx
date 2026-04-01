import { motion } from "framer-motion";

const achievements = [
  {
    title: "Emaar Broker",
    subtitle: "Awards 2023",
  },
  {
    title: "Annual Broker",
    subtitle: "Awards 2023",
  },
  {
    title: "Annual Broker",
    subtitle: "Awards 2024",
  },
];

const Achievements = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center font-serif text-3xl font-bold text-foreground md:text-4xl"
        >
          My Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-2xl text-center font-sans leading-relaxed text-muted-foreground"
        >
          Consistently ranked as the top broker by Emaar Properties, solidifying a position
          as <span className="font-semibold text-primary">Dubai's number-one realtor</span>.
          Recognized by Damac, Sobha, and other market leaders.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
