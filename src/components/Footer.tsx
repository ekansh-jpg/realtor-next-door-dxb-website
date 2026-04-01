import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111] py-10">
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
          <a href="https://www.youtube.com/@MohammedZohaib86" target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <Youtube className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/mohammedzohaib86" target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/mohammedzohaib86/" target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/mohammed-zohaib-68679432" target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://x.com/ZohaibDubai" target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <span className="text-xs font-bold">𝕏</span>
          </a>
          <a href="https://www.tiktok.com/@life_of_zee_" target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white">
            <span className="text-xs">♪</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
