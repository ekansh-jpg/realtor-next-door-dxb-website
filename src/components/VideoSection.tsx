import { motion } from "framer-motion";
import ekanshAward from "@/assets/ekansh-award.jpg.asset.json";

const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DTpkoa9jbWK/",
    thumbnail: "https://scontent.cdninstagram.com/v/t51.75761-15/495927069_18491373676073903_5787117100108122568_n.jpg",
    title: "Dubai Real Estate Insights",
  },
  {
    url: "https://www.instagram.com/p/DTDcMatkp1n/",
    thumbnail: "https://scontent.cdninstagram.com/v/t51.75761-15/494000000_18490000000000000_0000000000000000000_n.jpg",
    title: "Property Investment Tips",
  },
];

const VideoSection = () => {
  return (
    <section style={{ backgroundColor: '#0A0A0A' }} className="py-14 md:py-28">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {/* Left: Ekansh portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden md:block"
          >
            <img
              src={ekanshAward.url}
              alt="Ekansh Kinger with award"
              className="h-full max-h-[700px] w-full rounded-xl object-cover shadow-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Heading + Instagram embeds */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xs md:text-sm uppercase mb-3" style={{ color: '#C9A96E' }}
            >
              Social
            </motion.p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white">
              Watch Ekansh
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[2px] mt-3 md:mt-4 mb-3 md:mb-4"
              style={{ backgroundColor: "#C9A96E" }}
            />
            <p className="font-sans text-sm italic text-white/70">
              Follow for Dubai's Most Actionable Real Estate Content
            </p>
            <motion.a
              href="https://www.instagram.com/realtor_nextdoordxb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-5 inline-flex items-center gap-2 rounded-full px-5 md:px-6 py-2 md:py-2.5 font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              }}
            >
              Follow on Instagram
            </motion.a>

            {/* Instagram embeds */}
            <div className="mt-6 md:mt-8 grid gap-3 md:gap-4 grid-cols-2">
              {instagramPosts.map((post, i) => (
                <motion.a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="group overflow-hidden rounded-xl block border border-white/10 hover:border-white/25 transition-all"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <iframe
                      src={`${post.url}embed`}
                      className="h-full w-full border-0"
                      loading="lazy"
                      allowTransparency
                      scrolling="no"
                      title={post.title}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
