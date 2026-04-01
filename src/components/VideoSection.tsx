import { motion } from "framer-motion";
import ekanshPortrait from "@/assets/ekansh-portrait.jpg";

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
    <section style={{ backgroundColor: '#0A0A0A' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left: Ekansh portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <img
              src={ekanshPortrait}
              alt="Ekansh Kinger"
              className="h-full max-h-[700px] w-full rounded-xl object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Heading + Instagram embeds */}
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
              Follow for Dubai's Most Actionable Real Estate Content
            </p>
            <a
              href="https://www.instagram.com/realtor_nextdoordxb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              }}
            >
              Follow on Instagram
            </a>

            {/* Instagram embeds */}
            <div className="mt-8 grid gap-4 grid-cols-2">
              {instagramPosts.map((post, i) => (
                <a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-lg block"
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
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
