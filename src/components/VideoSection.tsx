import { motion } from "framer-motion";
import portraitAwards from "@/assets/portrait-awards.jpg";

const videos = [
  { id: "hm_Vchf3NPM", title: "My Dubai Property Investment Strategy & Full Portfolio Revealed" },
  { id: "GZMO6p52h-s", title: "Dubai Villa Market 2025 | Will 142,000 New Units Destroy Prices?" },
  { id: "dpUhTZJaZbY", title: "I'm Buying DAMAC Islands 2 (And You Should Too)" },
  { id: "vfOvQ70sqj0", title: "I Compared Siniya Island & Downtown UAQ—Here's What I Found" },
  { id: "I5Vt26lz5gk", title: "From Dubai Islands to Palm Jebel Ali: Complete Real Estate Breakdown!" },
];

const VideoSection = () => {
  return (
    <section style={{ backgroundColor: '#0A0A0A' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left: Large portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <img
              src={portraitAwards}
              alt="Mohammed Zohaib with awards"
              className="h-full max-h-[700px] w-full rounded-xl object-cover"
              loading="lazy"
              width={640}
              height={960}
            />
          </motion.div>

          {/* Right: Heading + Videos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
              Watch Zohaib
            </h2>
            <p className="mt-3 font-sans text-white/70">
              Watch Dubai's Most Actionable Real Estate Content
            </p>
            <a
              href="https://www.youtube.com/@MohammedZohaib86"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-md px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#FF0000' }}
            >
              Subscribe
            </a>

            {/* Video grid */}
            <div className="mt-8 grid gap-4 grid-cols-3">
              {videos.slice(0, 3).map((video) => (
                <div key={video.id} className="overflow-hidden rounded-lg">
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
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-4 grid-cols-2">
              {videos.slice(3, 5).map((video) => (
                <div key={video.id} className="overflow-hidden rounded-lg">
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
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
