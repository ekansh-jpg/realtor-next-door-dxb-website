import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import eventBg from "@/assets/event-crowd.jpg";

const socials = [
  { platform: "Call", handle: "+971 54 459 0555", url: "tel:+971544590555", icon: null, lucideIcon: true },
  { platform: "Instagram", handle: "@realtor_nextdoordxb", url: "https://www.instagram.com/realtor_nextdoordxb", icon: "https://mohammedzohaib.com/wp-content/uploads/2025/10/%E2%80%94Pngtree%E2%80%94instagram-icon_8704817-1024x1024.png", lucideIcon: false },
  { platform: "WhatsApp", handle: "+971 54 459 0555", url: "https://wa.me/971544590555", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", lucideIcon: false },
];

const SocialSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${eventBg})` }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }} />

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-2 text-center font-sans text-sm uppercase"
            style={{ color: '#C9A96E' }}
          >
            Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 text-center font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
          >
            Engage With Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[2px] mx-auto mb-6"
            style={{ backgroundColor: "#C9A96E" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center font-sans italic leading-relaxed text-white/70"
          >
            Ready to explore Dubai's real estate opportunities? Reach out to me directly
            through any of these channels — I'm always happy to connect.
          </motion.p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {socials.map((social, i) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target={social.platform === "Call" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group flex flex-col items-center justify-center rounded-xl p-10 text-center transition-all duration-300 border border-white/10 hover:border-white/25 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(17, 17, 17, 0.9)' }}
              >
                {social.lucideIcon ? (
                  <Phone className="mb-4 h-14 w-14 text-white/80 group-hover:text-white transition-colors" />
                ) : (
                  <img src={social.icon!} alt={social.platform}
                    className="mb-4 h-14 w-14 object-contain md:h-16 md:w-16 opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
                )}
                <p className="font-serif text-lg font-bold uppercase tracking-wider text-white">{social.platform}</p>
                <p className="mt-2 font-sans text-sm text-white/60">{social.handle}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
