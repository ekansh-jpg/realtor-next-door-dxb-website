import { motion } from "framer-motion";

const socials = [
  { platform: "X", handle: "@ZohaibDubai", followers: "10K+", url: "https://x.com/ZohaibDubai", icon: "𝕏" },
  { platform: "LinkedIn", handle: "Mohammed Zohaib", followers: "25k", url: "https://www.linkedin.com/in/mohammed-zohaib-68679432", icon: "in" },
  { platform: "Instagram", handle: "@mohammedzohaib86", followers: "43.3K", url: "https://www.instagram.com/mohammedzohaib86", icon: "📷" },
  { platform: "YouTube", handle: "@MohammedZohaib86", followers: "26K", url: "https://www.youtube.com/@MohammedZohaib86", icon: "▶" },
  { platform: "TikTok", handle: "life_of_zee_", followers: "13k", url: "https://www.tiktok.com/@life_of_zee_", icon: "♪" },
  { platform: "Facebook", handle: "Mohammed Zohaib", followers: "5K+", url: "https://www.facebook.com/mohammedzohaib86/", icon: "f" },
];

const SocialSection = () => {
  return (
    <section className="relative bg-[#111111] py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center font-serif text-3xl font-bold text-white md:text-4xl"
        >
          Engage with me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-14 max-w-2xl text-center font-sans leading-relaxed text-white/60"
        >
          After spending more than a decade in real estate and building a strong presence on social media,
          I enjoy sharing my experiences and insights to connect with everyone who wants to explore
          the endless opportunities Dubai has to offer.
        </motion.p>

        {/* Grid of social cards - matching original dark cards with big follower numbers */}
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-6">
          {socials.map((social, i) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col items-center justify-center bg-[#1a1a1a] p-6 text-center transition-all duration-300 hover:bg-[#222]"
            >
              <p className="text-3xl mb-3">{social.icon}</p>
              <p className="font-sans text-xs text-white/60 truncate w-full">
                {social.handle}
              </p>
              <p className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
                {social.followers}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
