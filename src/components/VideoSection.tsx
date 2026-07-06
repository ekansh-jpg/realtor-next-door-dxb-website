import { motion } from "framer-motion";
import ekanshAward from "@/assets/ekansh-award.jpg.asset.json";
import whoAmIVideo from "@/assets/who-am-i.mp4.asset.json";

const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DTpkoa9jbWK/",
    title: "Dubai Real Estate Insights",
  },
  {
    url: "https://www.instagram.com/p/DTDcMatkp1n/",
    title: "Property Investment Tips",
  },
];

const VideoSection = () => {
  return (
    <section style={{ backgroundColor: '#0A0A0A' }} className="py-14 md:py-28">
      <div className="container mx-auto px-5 md:px-6">
        {/* Header (mobile-first, premium) */}
        <div className="mb-8 md:mb-12 text-center md:text-left md:hidden">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ color: '#C9A96E' }}
          >
            Social
          </motion.p>
          <h2 className="font-serif text-3xl font-bold uppercase tracking-wider text-white">
            Watch <span style={{ color: '#C9A96E' }}>Ekansh</span>
          </h2>
          <div className="h-[2px] w-14 mx-auto mt-4 mb-4" style={{ backgroundColor: '#C9A96E' }} />
          <p className="font-sans text-sm italic text-white/60 px-4">
            Dubai's most actionable real estate content
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2 items-center">
          {/* Left: "Who Am I" hero video (9:16 native aspect) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-auto w-full max-w-[360px] md:max-w-md bg-black"
          >
            <div className="aspect-[9/16] relative overflow-hidden bg-black">
              <video
                src={whoAmIVideo.url}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={ekanshAward.url}
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-[#C9A96E]/40 pointer-events-none">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#C9A96E]">Who Am I</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Heading (desktop) + Instagram embeds */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hidden md:block">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-sans text-sm tracking-[0.2em] uppercase mb-3"
                style={{ color: '#C9A96E' }}
              >
                Social
              </motion.p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white">
                Watch Ekansh
              </h2>
              <div className="h-[2px] w-16 mt-4 mb-4" style={{ backgroundColor: "#C9A96E" }} />
              <p className="font-sans text-sm italic text-white/70">
                Follow for Dubai's Most Actionable Real Estate Content
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <motion.a
                href="https://www.instagram.com/realtor_nextdoordxb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 md:mt-5 inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-white shadow-lg"
                style={{
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                }}
              >
                Follow on Instagram
              </motion.a>
            </div>

            {/* Video reels: "Who Am I" (9:16 native) + Instagram reel */}
            <div className="mt-6 md:mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-hidden rounded-2xl border border-white/10 hover:border-[#C9A96E]/40 transition-all bg-black/30 mx-auto w-full max-w-[360px]"
              >
                <div className="aspect-[9/16] relative overflow-hidden bg-black">
                  <video
                    src={whoAmIVideo.url}
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={ekanshAward.url}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-[#C9A96E]/40">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#C9A96E]">Who Am I</span>
                  </div>
                </div>
              </motion.div>

              {instagramPosts.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.15 }}
                  className="overflow-hidden rounded-2xl border border-white/10 hover:border-[#C9A96E]/40 transition-all bg-black/30 mx-auto w-full max-w-[360px]"
                >
                  <div className="aspect-[9/16] relative overflow-hidden">
                    <iframe
                      src={`${post.url}embed`}
                      className="h-full w-full border-0"
                      loading="lazy"
                      allowTransparency
                      scrolling="no"
                      title={post.title}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
