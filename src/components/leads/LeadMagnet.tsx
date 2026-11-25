import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import LeadForm from "./LeadForm";

const LeadMagnet = () => (
  <section className="py-16 md:py-20" style={{ backgroundColor: "#111111" }}>
    <div className="container mx-auto px-5 md:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl border p-6 md:p-10"
        style={{ backgroundColor: "#0A0A0A", borderColor: "rgba(201,169,110,0.35)" }}>
        <div>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(201,169,110,0.12)" }}>
            <FileText className="h-6 w-6" style={{ color: "#C9A96E" }} />
          </div>
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase mb-2" style={{ color: "#C9A96E" }}>Free Monthly Shortlist</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">Get This Month's Dubai Off-Plan Shortlist</h2>
          <div className="h-[2px] w-12 my-4" style={{ backgroundColor: "#C9A96E" }} />
          <p className="font-sans text-sm md:text-base text-white/60">5 projects with payment plans, sent to your WhatsApp/email.</p>
        </div>
        <div className="relative">
          <LeadForm formName="shortlist" variant="short" submitLabel="Send Me the Shortlist" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default LeadMagnet;
