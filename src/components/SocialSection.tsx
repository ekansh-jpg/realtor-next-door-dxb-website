import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import eventBg from "@/assets/event-crowd.jpg";

const socials = [
  {
    platform: "Call",
    handle: "+971 54 459 0555",
    url: "tel:+971544590555",
    icon: null,
    lucideIcon: true,
  },
  {
    platform: "Instagram",
    handle: "@realtor_nextdoordxb",
    url: "https://www.instagram.com/realtor_nextdoordxb",
    icon: "https://mohammedzohaib.com/wp-content/uploads/2025/10/%E2%80%94Pngtree%E2%80%94instagram-icon_8704817-1024x1024.png",
    lucideIcon: false,
  },
  {
    platform: "WhatsApp",
    handle: "+971 54 459 0555",
    url: "https://wa.me/971544590555",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    lucideIcon: false,
  },
];

const SocialSection = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${eventBg})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }} />

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
          >
            Engage With Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-14 max-w-3xl text-center font-sans italic leading-relaxed text-white/70"
          >
            Ready to explore Dubai's real estate opportunities? Reach out to me directly
            through any of these channels — I'm always happy to connect.
          </motion.p>

          <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
            {socials.map((social, i) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target={social.platform === "Call" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col items-center justify-center p-8 text-center transition-all duration-300 border-l-2"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.9)',
                  borderLeftColor: '#C9A96E',
                }}
              >
                {social.lucideIcon ? (
                  <Phone className="mb-3 h-14 w-14 text-white" />
                ) : (
                  <img
                    src={social.icon!}
                    alt={social.platform}
                    className="mb-3 h-14 w-14 object-contain md:h-16 md:w-16"
                    loading="lazy"
                  />
                )}
                <p className="font-serif text-lg font-bold text-white">{social.platform}</p>
                <p className="mt-1 font-sans text-sm text-white/60">
                  {social.handle}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
