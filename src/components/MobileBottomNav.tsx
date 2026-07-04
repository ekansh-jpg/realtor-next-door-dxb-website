import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Building2, TrendingUp, Newspaper, Phone } from "lucide-react";

const items = [
  { label: "Home", to: "/", icon: Home },
  { label: "Properties", to: "/properties", icon: Building2 },
  { label: "Deals", to: "/transactions", icon: TrendingUp },
  { label: "Insights", to: "/dubai-insights", icon: Newspaper },
  { label: "Contact", to: "/contact", icon: Phone },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-3 left-3 right-3 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <nav
        className="rounded-2xl border backdrop-blur-xl shadow-2xl"
        style={{
          backgroundColor: "rgba(10,10,10,0.85)",
          borderColor: "rgba(201,169,110,0.25)",
        }}
      >
        <ul className="grid grid-cols-5">
          {items.map((it) => {
            const active = location.pathname === it.to;
            const Icon = it.icon;
            return (
              <li key={it.to}>
                <Link
                  to={it.to}
                  className="flex flex-col items-center justify-center gap-1 py-2.5 transition-colors"
                  style={{ color: active ? "#C9A96E" : "rgba(255,255,255,0.65)" }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-sans text-[9px] uppercase tracking-wider">{it.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
