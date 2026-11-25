import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { properties } from "@/data/properties";

const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/properties": "Properties",
  "/transactions": "Real Estate Transactions",
  "/dubai-insights": "Dubai Insights",
  "/services": "Services",
  "/contact": "Contact",
};

export const pageNameFor = (path: string) => {
  const clean = path.replace(/\/+$/, "") || "/";
  if (PAGE_NAMES[clean]) return PAGE_NAMES[clean];
  if (clean.startsWith("/properties/")) {
    const slug = clean.split("/")[2];
    const p = (properties as Array<{ slug?: string; name?: string; title?: string }>).find((x) => x.slug === slug);
    return p?.name || p?.title || "Property";
  }
  return "Website";
};

const WhatsAppFloat = () => {
  const { pathname } = useLocation();
  const msg = `Hi Ekansh, I'm interested in Dubai property. I found you on your website (${pageNameFor(pathname)}).`;
  return (
    <motion.a
      href={`https://wa.me/971544590555?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{ backgroundColor: "#25D366", marginBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={2} />
    </motion.a>
  );
};

export default WhatsAppFloat;
