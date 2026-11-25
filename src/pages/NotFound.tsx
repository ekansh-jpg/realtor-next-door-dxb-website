import { Link } from "react-router-dom";
import { Home, Building2, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { openLeadForm } from "@/lib/leads";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/properties", label: "Properties", icon: Building2 },
  { to: "/contact", label: "Contact", icon: Phone },
];

const NotFound = () => (
  <div className="min-h-screen pb-16 md:pb-0" style={{ backgroundColor: "#0A0A0A" }}>
    <Seo
      title="Page Not Found | Ekansh Kinger"
      description="The page you were looking for could not be found. Browse Dubai properties or get in touch with Ekansh Kinger."
      path="/404"
      noindex
    />
    <Navbar />
    <main className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 pb-16 text-center md:px-6">
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.3em]" style={{ color: "#C9A96E" }}>Error 404</p>
      <h1 className="font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md font-sans text-sm text-white/60 md:text-base">
        This page may have moved or no longer exists. Try one of these instead, or tell me what you're looking for.
      </p>
      <nav aria-label="Helpful links" className="mt-8 flex flex-wrap justify-center gap-3">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-sans text-sm text-white/80 transition-colors hover:border-[#C9A96E] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A96E]"
          >
            <Icon className="h-4 w-4" /> {label}
          </Link>
        ))}
      </nav>
      <Button
        size="lg"
        className="mt-8 rounded-full px-8 font-semibold uppercase tracking-wider text-black hover:opacity-90"
        style={{ backgroundColor: "#C9A96E" }}
        onClick={() => openLeadForm({ formName: "not_found", title: "Tell me what you're looking for" })}
      >
        Send an enquiry
      </Button>
    </main>
    <Footer />
  </div>
);

export default NotFound;
