import { motion } from "framer-motion";
import skylineBg from "@/assets/dubai-skyline-day.jpg";
import ekanshAbout from "@/assets/ekansh-about.jpg";

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
            <h2 className="font-serif text-4xl font-bold uppercase tracking-wider md:text-5xl" style={{ color: '#0A0A0A' }}>
              Who Am I
            </h2>
            <p className="font-sans text-base leading-relaxed md:text-lg" style={{ color: '#333' }}>
              I'm Ekansh Kinger — a successful realtor and investment manager at NobleHorizon in Dubai.
              My journey spans from e-learning to mastering Dubai's dynamic real estate market, driven
              by determination and smart planning.
            </p>
            <p className="font-sans text-base leading-relaxed md:text-lg" style={{ color: '#333' }}>
              I believe in transparent guidance over pushy sales. With deep expertise in business planning,
              negotiation, and strong partnerships with Dubai's top developers like Emaar, DAMAC, Sobha,
              and Nakheel — I ensure you get the best deals in the market.
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
              <video
                src="/videos/ekansh-intro.mp4"
                controls
                playsInline
                preload="metadata"
                poster={ekanshAbout}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
