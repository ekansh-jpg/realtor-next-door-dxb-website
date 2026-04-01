import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Transactions", to: "/transactions" },
  { label: "Dubai Insights", to: "/dubai-insights" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "rgba(10, 10, 10, 0.9)" } : {}}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">EKANSH</span>
            <span className="font-sans text-sm font-bold tracking-[0.15em] text-white">KINGER</span>
          </div>
        </Link>

        {/* Desktop dropdown */}
        <div className="hidden md:block relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 rounded-md px-6 py-2.5 font-sans text-sm font-medium text-white transition-all border hover:bg-white/5"
            style={{ borderColor: "#C9A96E" }}
          >
            <span style={{ color: "#C9A96E" }}>Explore</span>
            <ChevronDown
              className="h-4 w-4 transition-transform duration-200"
              style={{ color: "#C9A96E", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-52 rounded-lg border shadow-2xl backdrop-blur-xl overflow-hidden animate-fade-in"
              style={{ backgroundColor: "rgba(17, 17, 17, 0.95)", borderColor: "rgba(201, 169, 110, 0.3)" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-5 py-3 font-sans text-sm transition-all hover:bg-white/5"
                  style={{
                    color: location.pathname === link.to ? "#C9A96E" : "rgba(255,255,255,0.8)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t animate-fade-in"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.98)", borderColor: "rgba(201, 169, 110, 0.2)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-6 py-4 font-sans text-sm transition-all hover:bg-white/5"
              style={{
                color: location.pathname === link.to ? "#C9A96E" : "rgba(255,255,255,0.8)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
