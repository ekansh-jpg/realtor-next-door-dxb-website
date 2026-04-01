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
          ? "shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: 'rgba(10, 10, 10, 0.9)' } : {}}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">EKANSH</span>
            <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">KINGER</span>
          </div>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md px-5 py-2.5 font-sans text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ backgroundColor: '#3D4F5F' }}
        >
          Subscribe <Youtube className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
