import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Transactions", to: "/transactions" },
  { label: "Dubai Insights", to: "/dubai-insights" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111111' }} className="pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-5 md:px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 mb-10 md:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col leading-tight mb-3 md:mb-4">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] text-white">EKANSH</span>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] text-white">KINGER</span>
            </div>
            <p className="font-sans text-xs md:text-sm leading-relaxed text-white/50 max-w-xs">
              Your trusted real estate partner in Dubai. Transparent guidance, premium properties, exceptional service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-4 md:mb-6" style={{ color: "#C9A96E" }}>Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-1 md:space-y-3 md:gap-0">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="font-sans text-xs md:text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-4 md:mb-6" style={{ color: "#C9A96E" }}>Get In Touch</h4>
            <div className="space-y-2 md:space-y-3">
              <a href="tel:+971544590555" className="block font-sans text-xs md:text-sm text-white/50 hover:text-white transition-colors">
                +971 54 459 0555
              </a>
              <a href="https://www.instagram.com/realtor_nextdoordxb" target="_blank" rel="noopener noreferrer"
                className="block font-sans text-xs md:text-sm text-white/50 hover:text-white transition-colors">
                @realtor_nextdoordxb
              </a>
              <p className="font-sans text-xs md:text-sm text-white/50">Dubai, United Arab Emirates</p>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-6">
              {[
                { href: "tel:+971544590555", icon: <Phone className="h-4 w-4" /> },
                { href: "https://www.instagram.com/realtor_nextdoordxb", icon: <Instagram className="h-4 w-4" /> },
                { href: "https://wa.me/971544590555", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-4 w-4" /> },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, borderColor: "rgba(201,169,110,0.5)" }}
                  className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:text-white"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4">
            <p className="font-sans text-[10px] md:text-xs text-white/30">
              © 2025 Ekansh Kinger. All rights reserved.
            </p>
            <p className="font-sans text-[10px] md:text-xs text-white/30">
              Dubai, UAE · RERA Certified Broker
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
