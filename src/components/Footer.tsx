import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111111' }} className="py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">MOHAMMED</span>
          <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">ZOHAIB</span>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs text-white/50">
          © 2023 Mohammed Zohaib
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { href: "https://www.youtube.com/@MohammedZohaib86", icon: <Youtube className="h-4 w-4" /> },
            { href: "https://www.instagram.com/mohammedzohaib86", icon: <Instagram className="h-4 w-4" /> },
            { href: "https://www.linkedin.com/in/mohammed-zohaib-68679432", icon: <Linkedin className="h-4 w-4" /> },
            { href: "https://www.facebook.com/mohammedzohaib86/", icon: <Facebook className="h-4 w-4" /> },
            { href: "https://x.com/ZohaibDubai", icon: <span className="text-xs font-bold">𝕏</span> },
            { href: "https://www.tiktok.com/@life_of_zee_", icon: <span className="text-xs">♪</span> },
          ].map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
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
