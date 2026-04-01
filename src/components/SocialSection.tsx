import { motion } from "framer-motion";

const socials = [
  { platform: "X (Twitter)", handle: "@ZohaibDubai", followers: "10K+", url: "https://x.com/ZohaibDubai" },
  { platform: "LinkedIn", handle: "Mohammed Zohaib", followers: "25K+", url: "https://www.linkedin.com/in/mohammed-zohaib-68679432" },
  { platform: "Instagram", handle: "@mohammedzohaib86", followers: "43.3K", url: "https://www.instagram.com/mohammedzohaib86" },
  { platform: "YouTube", handle: "@MohammedZohaib86", followers: "27K+", url: "https://www.youtube.com/@MohammedZohaib86" },
  { platform: "TikTok", handle: "life_of_zee_", followers: "13K+", url: "https://www.tiktok.com/@life_of_zee_" },
  { platform: "Facebook", handle: "Mohammed Zohaib", followers: "5K+", url: "https://www.facebook.com/mohammedzohaib86/" },
];

const SocialSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl"
        >
          Engage with me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-16 max-w-2xl text-center font-sans leading-relaxed text-muted-foreground"
        >
          After spending more than a decade in real estate and building a strong presence on social media,
          I enjoy sharing my experiences and insights to connect with everyone who wants to explore
          the endless opportunities Dubai has to offer.
        </motion.p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
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
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/40 hover:scale-105"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                {social.platform}
              </p>
              <p className="mt-2 font-sans text-xs text-muted-foreground truncate w-full">
                {social.handle}
              </p>
              <p className="mt-1 font-serif text-lg font-bold text-foreground">
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
