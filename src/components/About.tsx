import { motion } from "framer-motion";
import ekanshAbout from "@/assets/ekansh-about.jpg";

const About = () => {
  return (
    <section className="relative py-20 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-sm uppercase" style={{ color: '#C9A96E' }}
            >
              About Me
            </motion.p>
            <h2 className="font-serif text-4xl font-bold uppercase tracking-wider md:text-5xl" style={{ color: '#0A0A0A' }}>
              Who Am I
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[2px]"
              style={{ backgroundColor: "#C9A96E" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base leading-relaxed md:text-lg" style={{ color: '#333' }}
            >
              I'm Ekansh Kinger — a successful realtor and investment manager at NobleHorizon in Dubai.
              My journey spans from e-learning to mastering Dubai's dynamic real estate market, driven
              by determination and smart planning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-sans text-base leading-relaxed md:text-lg" style={{ color: '#333' }}
            >
              I believe in transparent guidance over pushy sales. With deep expertise in business planning,
              negotiation, and strong partnerships with Dubai's top developers like Emaar, DAMAC, Sobha,
              and Nakheel — I ensure you get the best deals in the market.
            </motion.p>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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
