import { motion } from "framer-motion";
import skylineBg from "@/assets/dubai-skyline-day.jpg";

const About = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${skylineBg})` }}
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: '#555' }}>About Me</p>
            <h2 className="font-serif text-4xl font-bold uppercase tracking-wider md:text-5xl" style={{ color: '#0A0A0A' }}>
              Meet Your Realtor Next Door
            </h2>
            <p className="font-sans text-base leading-relaxed md:text-lg" style={{ color: '#333' }}>
              I'm Ekansh Kinger — a successful realtor and investment manager at NobleHorizon in Dubai. I believe in transparent guidance over pushy sales. With deep expertise in business planning, negotiation, and strong partnerships with Dubai's top developers — I ensure you get the best deals in the market.
            </p>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Ekansh Kinger Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
