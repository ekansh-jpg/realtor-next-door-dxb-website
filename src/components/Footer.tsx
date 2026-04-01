import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111111' }} className="py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">EKANSH KINGER</span>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">Realtor Next Door DXB</span>
        </div>

        {/* Info */}
        <div className="text-center">
          <p className="font-sans text-xs text-white/50">
            RERA Certified • NobleHorizon • Dubai, UAE
          </p>
          <p className="font-sans text-xs text-white/40 mt-1">
            © 2026 Ekansh Kinger. All rights reserved.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/realtor_nextdoordxb" target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://wa.me/971544590555" target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <Phone className="h-4 w-4" />
          </a>
          <a href="mailto:contact@ekanshkinger.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
