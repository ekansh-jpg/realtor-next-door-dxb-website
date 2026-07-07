import { motion } from "framer-motion";
import { Phone, Instagram, MessageCircle, Linkedin } from "lucide-react";
import eventBg from "@/assets/event-crowd.webp";

const socials = [
  { platform: "Call", handle: "+971 54 459 0555", url: "tel:+971544590555", Icon: Phone },
  { platform: "WhatsApp", handle: "+971 54 459 0555", url: "https://wa.me/971544590555", Icon: MessageCircle },
  { platform: "Instagram", handle: "@realtor_nextdoordxb", url: "https://www.instagram.com/realtor_nextdoordxb", Icon: Instagram },
  { platform: "LinkedIn", handle: "Ekansh Kinger", url: "https://www.linkedin.com/in/ekansh-kinger-7207341a6", Icon: Linkedin },
];

const SocialSection = () => {
  return (
    <section className="relative bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${eventBg})` }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }} />

      <div className="relative z-10 py-14 md:py-28">
        <div className="container mx-auto px-5 md:px-6">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-2 text-center font-sans text-xs md:text-sm uppercase"
            style={{ color: '#C9A96E' }}
          >
            Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 text-center font-serif text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl md:text-4xl"
          >
            Engage With Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[2px] mx-auto mb-4 md:mb-6"
            style={{ backgroundColor: "#C9A96E" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mb-10 md:mb-14 max-w-3xl text-center font-sans text-sm italic leading-relaxed text-white/70 px-2"
          >
            Ready to explore Dubai's real estate opportunities? Reach out to me directly
            through any of these channels — I'm always happy to connect.
          </motion.p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {socials.map((social, i) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target={social.platform === "Call" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group flex items-center md:flex-col gap-5 md:gap-0 md:justify-center rounded-xl p-6 md:p-8 lg:p-10 md:text-center min-h-[110px] md:min-h-[240px] transition-all duration-300 border border-white/10 hover:border-[#C9A96E]/40 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(17, 17, 17, 0.9)' }}
              >
                <social.Icon className="h-10 w-10 md:mb-5 md:h-14 md:w-14 text-white/80 group-hover:text-[#C9A96E] transition-colors flex-shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <p className="font-serif text-base md:text-lg font-bold uppercase tracking-wider text-white truncate">{social.platform}</p>
                  <p className="mt-1 md:mt-2 font-sans text-xs md:text-sm text-white/60 break-all md:break-normal">{social.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
