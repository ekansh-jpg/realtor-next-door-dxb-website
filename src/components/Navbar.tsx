import { useState, useEffect } from "react";
import { Youtube } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="font-sans text-sm font-bold tracking-[0.15em] text-foreground">MOHAMMED</span>
            <span className="font-sans text-sm font-bold tracking-[0.15em] text-foreground">ZOHAIB</span>
          </div>
        </a>

        <a
          href="https://www.youtube.com/@MohammedZohaib86"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Subscribe <Youtube className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
