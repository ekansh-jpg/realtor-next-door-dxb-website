import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import { Building, TrendingUp, Home, Key, Shield, Users, ArrowRight, CheckCircle, Phone, MessageSquare, Search, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgServices from "@/assets/bg-services.webp";
import bgContact from "@/assets/bg-contact.webp";

const services = [
  { icon: Home, title: "Property Buying", description: "Find your dream home in Dubai with personalized property search, market analysis, and end-to-end support.", features: ["Curated property shortlists", "Market price analysis", "Negotiation support", "Legal documentation"] },
  { icon: TrendingUp, title: "Investment Advisory", description: "Maximize your returns with data-driven investment strategies tailored to Dubai's high-growth market.", features: ["ROI projections", "Portfolio diversification", "Market timing insights", "Risk assessment"] },
  { icon: Building, title: "Off-Plan Projects", description: "Access exclusive off-plan opportunities from Dubai's top developers — Emaar, DAMAC, Sobha, Nakheel.", features: ["Early-bird pricing", "Flexible payment plans", "Developer partnerships", "Project comparisons"] },
  { icon: Key, title: "Rental Management", description: "Hassle-free property management with tenant sourcing, rent collection, and maintenance coordination.", features: ["Tenant screening", "Rent optimization", "Maintenance handling", "Financial reporting"] },
  { icon: Shield, title: "Golden Visa Assistance", description: "Navigate the UAE Golden Visa process through qualifying real estate investments with full documentation.", features: ["Eligibility check", "Property selection", "Application support", "Status tracking"] },
  { icon: Users, title: "NRI Investment Support", description: "Specialized guidance for Non-Resident Indian investors looking to enter Dubai's property market.", features: ["Remote viewing tours", "Legal & tax guidance", "Repatriation advice", "POA arrangements"] },
];

const steps = [
  { icon: Phone, step: "01", title: "Consultation", desc: "Free initial call to understand your goals, budget, and preferences." },
  { icon: Search, step: "02", title: "Property Search", desc: "Curated shortlist of properties matching your exact requirements." },
  { icon: Handshake, step: "03", title: "Negotiation", desc: "Expert negotiation to secure the best possible deal for you." },
  { icon: CheckCircle, step: "04", title: "Handover", desc: "Complete support through documentation, payment, and key handover." },
];

const valueProps = [
  { title: "Developer Partnerships", desc: "Direct relationships with Emaar, DAMAC, Sobha, Nakheel — giving you access to exclusive deals and pricing." },
  { title: "Market Intelligence", desc: "Data-driven insights from years of tracking Dubai's property market trends and transaction patterns." },
  { title: "End-to-End Service", desc: "From your first inquiry to post-handover support — a single point of contact for your entire journey." },
];

const Services = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Seo
        title={"Dubai Real Estate Investment Services — Buy, Sell & Grow Portfolio"}
        description={"End-to-end Dubai real estate services: off-plan investment, resale purchase, property selling, portfolio advisory and Golden Visa guidance for international and NRI investors."}
        path="/services"
        keywords={"Dubai real estate services, property investment advisory Dubai, sell property Dubai, off-plan investment services, Golden Visa property, NRI investment Dubai"}
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center md:bg-fixed pt-20 md:pt-24 pb-14 md:pb-20"
        style={{ backgroundImage: `url(${bgServices})`, minHeight: "35vh" }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.82)" }} />
        <div className="relative z-10 container mx-auto px-5 md:px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "25vh" }}>
          <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }} transition={{ duration: 0.8 }}
            className="font-sans text-[10px] md:text-xs uppercase mb-3 md:mb-4" style={{ color: "#C9A96E" }}>What I Offer</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-3 md:mb-4">
            Premium Real Estate Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs md:text-base max-w-2xl italic text-white/60 px-2">
            Comprehensive real estate solutions backed by deep market knowledge and strong developer partnerships.
          </motion.p>
        </div>
      </section>

      {/* Why Choose */}
      <div className="container mx-auto px-5 md:px-6 py-14 md:py-20">
        <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} viewport={{ once: true }}
          className="mb-2 text-center font-sans text-xs md:text-sm uppercase" style={{ color: "#C9A96E" }}>Our Edge</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-xl md:text-4xl font-bold uppercase tracking-wider text-white mb-8 md:mb-12 text-center">
          Why Choose Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {valueProps.map((vp, i) => (
            <motion.div key={vp.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-xl border border-white/10 p-5 md:p-8 text-center backdrop-blur-sm hover:border-white/25 transition-all"
              style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
              <motion.span initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                className="mb-3 md:mb-4 inline-block font-serif text-2xl md:text-3xl font-bold" style={{ color: "#C9A96E" }}>
                0{i + 1}
              </motion.span>
              <h3 className="font-serif text-sm md:text-lg font-bold uppercase tracking-wider text-white mb-2 md:mb-3">{vp.title}</h3>
              <p className="font-sans text-xs md:text-sm leading-relaxed text-white/50">{vp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-5 md:px-6 pb-14 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 p-5 md:p-8 group hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 md:mb-5" style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                <service.icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: "#C9A96E" }} />
              </div>
              <h3 className="font-serif text-base md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#C9A96E] transition-colors uppercase tracking-wider">{service.title}</h3>
              <p className="font-sans text-xs md:text-sm leading-relaxed mb-4 md:mb-5 text-white/50">{service.description}</p>
              <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                {service.features.map((f) => (
                  <li key={f} className="font-sans text-[10px] md:text-xs flex items-center gap-2 text-white/40">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A96E" }} />{f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 font-sans text-xs md:text-sm font-medium transition-colors hover:gap-3" style={{ color: "#C9A96E" }}>
                Enquire Now <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <section className="relative bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${bgContact})` }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.85)" }} />
        <div className="relative z-10 py-14 md:py-28">
          <div className="container mx-auto px-5 md:px-6">
            <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} viewport={{ once: true }}
              className="mb-2 text-center font-sans text-xs md:text-sm uppercase" style={{ color: "#C9A96E" }}>Process</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] text-white mb-10 md:mb-16 text-center">
              How It Works
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {steps.map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }} className="text-center relative">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="mb-3 md:mb-4 inline-block font-serif text-2xl md:text-3xl font-bold" style={{ color: "#C9A96E" }}
                  >{s.step}</motion.span>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl mx-auto mb-3 md:mb-5 flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                    <s.icon className="h-5 w-5 md:h-7 md:w-7" style={{ color: "#C9A96E" }} />
                  </div>
                  <h3 className="font-serif text-sm md:text-lg font-bold uppercase tracking-wider text-white mb-1 md:mb-2">{s.title}</h3>
                  <p className="font-sans text-[10px] md:text-sm text-white/50">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="container mx-auto px-5 md:px-6 py-14 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-xl border border-white/10 p-6 md:p-14 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 backdrop-blur-sm text-center md:text-left"
          style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
          <div>
            <h3 className="font-serif text-xl md:text-3xl font-bold uppercase tracking-wider text-white mb-2">Ready to Start?</h3>
            <p className="font-sans text-xs md:text-sm italic text-white/60">Get a free consultation and let's find your perfect property in Dubai.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact"
              className="flex items-center gap-2 md:gap-3 rounded-full px-6 md:px-10 py-3 md:py-4 font-sans text-xs md:text-sm font-semibold uppercase tracking-wider md:tracking-widest text-white transition-all flex-shrink-0"
              style={{ backgroundColor: "#C9A96E" }}>
              <MessageSquare className="h-3.5 w-3.5 md:h-4 md:w-4" /> Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
