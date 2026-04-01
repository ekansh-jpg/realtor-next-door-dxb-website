import { motion } from "framer-motion";
import portrait from "@/assets/hero-portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Who Am I label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-4 text-center font-sans text-sm uppercase tracking-[0.3em] text-primary"
        >
          Who am I
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-6 text-center font-serif text-lg text-muted-foreground md:text-xl"
        >
          CEO & Co-founder of 3X Capital, Entrepreneur, Investor, Youtuber, Podcast host, TEDx speaker.
        </motion.h2>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={portrait}
              alt="Mohammed Zohaib portrait"
              className="w-full rounded-xl object-cover shadow-2xl shadow-primary/10"
              width={800}
              height={1000}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Real estate entrepreneur
            </h3>
            <p className="font-sans leading-relaxed text-muted-foreground">
              As the Co-Founder and CEO of 3X Capital, Mohammed Zohaib is leading
              a new era in real estate — where technology, media, entertainment,
              and education introduce a progressive approach to Dubai's real estate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
