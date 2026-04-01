import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col leading-tight">
          <span className="font-sans text-sm font-bold tracking-[0.15em] text-foreground">MOHAMMED</span>
          <span className="font-sans text-sm font-bold tracking-[0.15em] text-foreground">ZOHAIB</span>
        </div>

        <p className="font-sans text-xs text-muted-foreground">
          © 2023 Mohammed Zohaib
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: "https://www.youtube.com/@MohammedZohaib86", icon: <Youtube className="h-4 w-4" /> },
            { href: "https://www.instagram.com/mohammedzohaib86", icon: <Instagram className="h-4 w-4" /> },
            { href: "https://www.facebook.com/mohammedzohaib86/", icon: <Facebook className="h-4 w-4" /> },
            { href: "https://www.linkedin.com/in/mohammed-zohaib-68679432", icon: <Linkedin className="h-4 w-4" /> },
            { href: "https://x.com/ZohaibDubai", icon: <span className="text-xs font-bold">𝕏</span> },
            { href: "https://www.tiktok.com/@life_of_zee_", icon: <span className="text-xs">♪</span> },
          ].map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
