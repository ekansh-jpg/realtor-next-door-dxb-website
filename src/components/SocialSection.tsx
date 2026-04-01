import { motion } from "framer-motion";

const socials = [
  {
    platform: "X",
    handle: "@ZohaibDubai",
    followers: "",
    url: "https://x.com/ZohaibDubai",
    icon: "https://mohammedzohaib.com/wp-content/uploads/2025/10/vecteezy_new-twitter-x-logo-twitter-icon-x-social-media-icon_42148611-scaled-e1761918200503-1018x1024.png",
  },
  {
    platform: "LinkedIn",
    handle: "Mohammed Zohaib",
    followers: "25k",
    url: "https://www.linkedin.com/in/mohammed-zohaib-68679432",
    icon: "https://mohammedzohaib.com/wp-content/uploads/2025/10/%E2%80%94Pngtree%E2%80%94linkedin-png-icon-design-elements_3562011-1024x1024.png",
  },
  {
    platform: "Instagram",
    handle: "@mohammedzohaib86",
    followers: "43.3K",
    url: "https://www.instagram.com/mohammedzohaib86",
    icon: "https://mohammedzohaib.com/wp-content/uploads/2025/10/%E2%80%94Pngtree%E2%80%94instagram-icon_8704817-1024x1024.png",
  },
  {
    platform: "YouTube",
    handle: "@MohammedZohaib86",
    followers: "26K",
    url: "https://www.youtube.com/@MohammedZohaib86/playlists",
    icon: "https://mohammedzohaib.com/wp-content/uploads/2025/10/vecteezy_youtube-logo-png-youtube-logo-transparent-png-youtube-icon_23986704-scaled-e1761262696651-1024x733.png",
  },
  {
    platform: "TikTok",
    handle: "life_of_zee_",
    followers: "13k",
    url: "https://www.tiktok.com/@life_of_zee_",
    icon: "https://mohammedzohaib.com/wp-content/uploads/2025/10/vecteezy_tiktok-logo-png-tiktok-logo-transparent-png-tiktok-icon_23986939-scaled-e1761617132856-1024x1020.png",
  },
  {
    platform: "Facebook",
    handle: "Mohammed Zohaib",
    followers: "",
    url: "https://www.facebook.com/mohammedzohaib86/",
    icon: "https://mohammedzohaib.com/wp-content/uploads/2025/10/vecteezy_facebook-logo-png-facebook-logo-transparent-png-facebook_23986999-scaled-e1761617178285-1022x1024.png",
  },
];

const SocialSection = () => {
  return (
    <section className="relative bg-card py-20 md:py-28">
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
          className="mx-auto mb-14 max-w-2xl text-center font-sans leading-relaxed text-muted-foreground"
        >
          After spending more than a decade in real estate and building a strong presence on social media,
          I enjoy sharing my experiences, insights, and thoughts to connect with everyone who wants to be
          part of Dubai's journey or explore the endless opportunities this city has to offer.
        </motion.p>

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
              className="group flex flex-col items-center justify-center bg-accent p-6 text-center transition-all duration-300 hover:bg-primary/10"
            >
              <img
                src={social.icon}
                alt={social.platform}
                className="mb-3 h-10 w-10 object-contain"
                loading="lazy"
              />
              <p className="font-sans text-xs text-muted-foreground truncate w-full">
                {social.handle}
              </p>
              {social.followers && (
                <p className="mt-2 font-serif text-2xl font-bold text-primary md:text-3xl">
                  {social.followers}
                </p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
