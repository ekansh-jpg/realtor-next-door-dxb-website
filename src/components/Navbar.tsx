import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Transactions", to: "/transactions" },
  { label: "Dubai Insights", to: "/dubai-insights" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "rgba(10, 10, 10, 0.9)" } : {}}
    >
      <div className="container mx-auto flex items-center justify-between py-4 md:py-5 px-5 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.15em] text-white">EKANSH</span>
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.15em] text-white">KINGER</span>
          </div>
        </Link>

        {/* Desktop inline links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative px-4 py-2 font-sans text-sm font-medium transition-all duration-300 hover:text-white"
              style={{
                color: location.pathname === link.to ? "#C9A96E" : "rgba(255,255,255,0.6)",
              }}
            >
              {link.label}
              {location.pathname === link.to && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full"
                  style={{ backgroundColor: "#C9A96E" }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu - full screen overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-[56px] animate-fade-in overflow-y-auto"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.98)" }}
        >
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-2 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-6 py-4 font-sans text-lg uppercase tracking-widest transition-all hover:bg-white/5 text-center"
                style={{
                  color: location.pathname === link.to ? "#C9A96E" : "rgba(255,255,255,0.8)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
