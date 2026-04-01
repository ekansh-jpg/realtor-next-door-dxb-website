import { motion } from "framer-motion";

const videos = [
  {
    id: "hm_Vchf3NPM",
    title: "My Dubai Property Investment Strategy & Full Portfolio Revealed",
  },
  {
    id: "GZMO6p52h-s",
    title: "Dubai Villa Market 2025 | Will 142,000 New Units Destroy Prices?",
  },
  {
    id: "dpUhTZJaZbY",
    title: "I'm Buying DAMAC Islands 2 (And You Should Too)",
  },
];

const VideoSection = () => {
  return (
    <section className="bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-center font-sans text-sm uppercase tracking-[0.3em] text-primary"
        >
          Watch Zohaib
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl"
        >
          Dubai's Most Actionable Real Estate Content
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <a
            href="https://www.youtube.com/@MohammedZohaib86"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:opacity-90"
          >
            Subscribe
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="font-sans text-sm font-medium text-foreground line-clamp-2">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
