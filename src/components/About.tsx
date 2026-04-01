import { motion } from "framer-motion";
import portrait from "@/assets/hero-portrait.jpg";

const About = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-center font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Who am I
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center font-sans text-base text-muted-foreground md:text-lg max-w-2xl mx-auto"
        >
          CEO & Co-founder of 3X Capital, Entrepreneur, Investor, Youtuber, Podcast host, TEDx speaker.
        </motion.h2>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={portrait}
              alt="Mohammed Zohaib portrait"
              className="w-full rounded-xl object-cover"
              width={800}
              height={1000}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
