import { motion } from "framer-motion";

const videos = [
  { id: "hm_Vchf3NPM", title: "My Dubai Property Investment Strategy & Full Portfolio Revealed" },
  { id: "GZMO6p52h-s", title: "Dubai Villa Market 2025 | Will 142,000 New Units Destroy Prices?" },
  { id: "dpUhTZJaZbY", title: "I'm Buying DAMAC Islands 2 (And You Should Too)" },
  { id: "vfOvQ70sqj0", title: "I Compared Siniya Island & Downtown UAQ—Here's What I Found" },
  { id: "I5Vt26lz5gk", title: "From Dubai Islands to Palm Jebel Ali: Complete Real Estate Breakdown!" },
];

const VideoSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-center font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Watch Zohaib
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-center font-sans text-muted-foreground"
        >
          Watch{" "}
          <span className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Dubai's Most Actionable Real Estate Content
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-14 text-center"
        >
          <a
            href="https://www.youtube.com/@MohammedZohaib86"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-primary px-6 py-2.5 font-sans text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Subscribe
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {videos.slice(0, 3).map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30"
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

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="hidden md:block" />
          {videos.slice(3, 5).map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.15 }}
              className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30"
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
