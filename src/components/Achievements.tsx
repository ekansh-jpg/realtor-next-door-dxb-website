import { motion } from "framer-motion";
import nightSkyline from "@/assets/dubai-night-skyline.jpg";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import award3 from "@/assets/award-3.jpg";

const achievements = [
  { title: "Emaar Broker", subtitle: "Awards 2023", image: award1 },
  { title: "Annual Broker", subtitle: "Awards 2023", image: award2 },
  { title: "Annual Broker", subtitle: "Awards 2024", image: award3 },
];

const Achievements = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${nightSkyline})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }} />

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
          >
            My Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-14 max-w-3xl text-center font-sans italic leading-relaxed text-white/70"
          >
            I'm honored to be consistently ranked as the top broker by Emaar Properties, solidifying my position
            as <span className="font-semibold text-white not-italic">Dubai's number-one realtor</span>. Alongside Emaar,
            I've also excelled with Damac, Sobha, and other Market Leaders, earning the first-ever NABNI Namous
            Award for top-performing channel partner. This recognition fuels my drive to lead in real estate.
          </motion.p>

          {/* Achievement cards with real photos */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={800}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-white">{item.title}</h3>
                  <p className="mt-1 font-sans text-sm text-white/70">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
