import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111111' }} className="py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col leading-tight">
          <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">EKANSH</span>
          <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">KINGER</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <a href="tel:+971544590555" className="font-sans text-xs text-white/70 hover:text-white transition-colors">
            +971 54 459 0555
          </a>
          <p className="font-sans text-xs text-white/50">
            © 2025 Ekansh Kinger
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: "tel:+971544590555", icon: <Phone className="h-4 w-4" /> },
            { href: "https://www.instagram.com/realtor_nextdoordxb", icon: <Instagram className="h-4 w-4" /> },
            { href: "https://wa.me/971544590555", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-4 w-4" /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
