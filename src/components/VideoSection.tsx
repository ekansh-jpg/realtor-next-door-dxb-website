import { motion } from "framer-motion";
import portraitAwards from "@/assets/portrait-awards.jpg";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Dubai Real Estate Tips" },
  { id: "dQw4w9WgXcQ", title: "Investment Strategy Dubai" },
  { id: "dQw4w9WgXcQ", title: "Property Tours" },
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
              alt="Ekansh Kinger"
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
              Watch Ekansh
            </h2>
            <p className="mt-3 font-sans text-white/70">
              Dubai's Most Actionable Real Estate Content
            </p>
            <p className="mt-2 font-sans text-sm text-white/50">
              Get insider tips, market analysis, and property tours on my Instagram.
            </p>
            <a
              href="https://www.instagram.com/realtor_nextdoordxb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-md px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#E1306C' }}
            >
              Follow on Instagram
            </a>

            {/* Video grid */}
            <div className="mt-8 grid gap-4 grid-cols-3">
              {videos.map((video, i) => (
                <div key={i} className="overflow-hidden rounded-lg">
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
