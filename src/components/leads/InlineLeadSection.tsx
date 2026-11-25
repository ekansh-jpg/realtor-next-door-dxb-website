import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const InlineLeadSection = ({ formName = "inline", withMessage = false }: { formName?: string; withMessage?: boolean }) => (
  <section className="py-16 md:py-24" style={{ backgroundColor: "#0A0A0A" }} id="enquire">
    <div className="container mx-auto px-5 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: "#C9A96E" }}>Free Consultation</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">Tell Me What You're Looking For</h2>
        <div className="h-[2px] w-12 my-5" style={{ backgroundColor: "#C9A96E" }} />
        <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed">
          Share your budget and goals and I'll come back with a researched shortlist — off-plan, ready or commercial — that fits how you want to invest in Dubai.
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="lg:col-span-3 relative rounded-2xl border p-5 md:p-8" style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.25)" }}>
        <LeadForm formName={formName} variant="full" withMessage={withMessage} submitLabel="Book My Free Consultation" />
      </motion.div>
    </div>
  </section>
);

export default InlineLeadSection;
