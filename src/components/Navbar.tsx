import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
          ? "bg-background/90 backdrop-blur-lg shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-serif text-xl font-bold tracking-wide text-foreground">
          MOHAMMED<br />
          <span className="text-sm font-medium tracking-[0.3em]">ZOHAIB</span>
        </a>
        <a
          href="https://www.youtube.com/@MohammedZohaib86"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-all hover:bg-muted hover:scale-105"
        >
          Subscribe <Youtube className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
