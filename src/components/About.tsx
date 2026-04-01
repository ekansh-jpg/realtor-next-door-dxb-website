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
            <h2 className="font-serif text-4xl font-bold uppercase tracking-wider md:text-5xl" style={{ color: '#0A0A0A' }}>
              Who Am I
            </h2>
            <p className="font-sans text-base leading-relaxed md:text-lg" style={{ color: '#333' }}>
              CEO & Co-founder of 3X Capital, Entrepreneur,
              Investor, Youtuber, Podcast host, TEDx speaker.
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
                src="https://www.youtube.com/embed/hm_Vchf3NPM"
                title="Mohammed Zohaib Introduction"
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
