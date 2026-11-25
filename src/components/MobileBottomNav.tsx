import { Phone, MessageCircle, Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import { openLeadForm } from "@/lib/leads";
import { pageNameFor } from "@/components/WhatsAppFloat";

/** Sticky mobile action bar: Call / WhatsApp / Enquire */
const MobileBottomNav = () => {
  const { pathname } = useLocation();
  const msg = encodeURIComponent(`Hi Ekansh, I'm interested in Dubai property. I found you on your website (${pageNameFor(pathname)}).`);
  const cell = "flex flex-col items-center justify-center gap-1 py-3 font-sans text-[10px] uppercase tracking-wider";
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t backdrop-blur-xl"
      style={{ backgroundColor: "rgba(10,10,10,0.92)", borderColor: "rgba(201,169,110,0.25)", paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="grid grid-cols-3">
        <a href="tel:+971544590555" className={cell} style={{ color: "rgba(255,255,255,0.8)" }}><Phone className="h-5 w-5" />Call</a>
        <a href={`https://wa.me/971544590555?text=${msg}`} target="_blank" rel="noopener noreferrer" className={cell} style={{ color: "#25D366" }}>
          <MessageCircle className="h-5 w-5" />WhatsApp</a>
        <button type="button" onClick={() => openLeadForm({ formName: "mobile_enquire", title: "Enquire Now", subtitle: "Share your details and I'll reach out personally." })}
          className={cell} style={{ backgroundColor: "#C9A96E", color: "#0A0A0A" }}><Send className="h-5 w-5" />Enquire</button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
