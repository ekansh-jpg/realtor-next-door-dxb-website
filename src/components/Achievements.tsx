import { motion } from "framer-motion";

const achievements = [
  { title: "Emaar Broker", subtitle: "Awards 2023" },
  { title: "Annual broker", subtitle: "Awards 2023" },
  { title: "Annual broker", subtitle: "Awards 2024" },
];

const Achievements = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center font-serif text-3xl font-bold text-foreground md:text-4xl"
        >
          My achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-14 max-w-2xl text-center font-sans leading-relaxed text-muted-foreground"
        >
          I'm honored to be consistently ranked as the top broker by Emaar Properties, solidifying my position
          as <span className="font-semibold text-foreground">Dubai's number-one realtor</span>. Alongside Emaar,
          I've also excelled with Damac, Sobha, and other Market Leaders, earning the first-ever NABNI Namous
          Award for top-performing channel partner. This recognition fuels my drive to lead in real estate.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/50 hover:scale-[1.03]"
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
