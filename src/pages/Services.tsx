import { motion } from "framer-motion";
import { Building, TrendingUp, Home, Key, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgServices from "@/assets/bg-services.jpg";

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description: "Find your dream home in Dubai with personalized property search, market analysis, and end-to-end support from viewing to handover.",
    features: ["Curated property shortlists", "Market price analysis", "Negotiation support", "Legal documentation"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Maximize your returns with data-driven investment strategies tailored to Dubai's high-growth real estate market.",
    features: ["ROI projections", "Portfolio diversification", "Market timing insights", "Risk assessment"],
  },
  {
    icon: Building,
    title: "Off-Plan Projects",
    description: "Access exclusive off-plan opportunities from Dubai's top developers — Emaar, DAMAC, Sobha, Nakheel, and more.",
    features: ["Early-bird pricing", "Flexible payment plans", "Developer partnerships", "Project comparisons"],
  },
  {
    icon: Key,
    title: "Rental Management",
    description: "Hassle-free property management with tenant sourcing, rent collection, and maintenance coordination.",
    features: ["Tenant screening", "Rent optimization", "Maintenance handling", "Financial reporting"],
  },
  {
    icon: Shield,
    title: "Golden Visa Assistance",
    description: "Navigate the UAE Golden Visa process through qualifying real estate investments with full documentation support.",
    features: ["Eligibility check", "Property selection", "Application support", "Status tracking"],
  },
  {
    icon: Users,
    title: "NRI Investment Support",
    description: "Specialized guidance for Non-Resident Indian investors looking to enter or expand in Dubai's property market.",
    features: ["Remote viewing tours", "Legal & tax guidance", "Repatriation advice", "POA arrangements"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-24 pb-20" style={{ minHeight: "40vh" }}>
        <div className="absolute inset-0">
          <img src={bgServices} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95))" }} />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "30vh" }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A96E" }}>
            What I Offer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Premium Real Estate Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Comprehensive real estate solutions backed by deep market knowledge and strong developer partnerships.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border p-8 group hover:border-[#C9A96E]/40 transition-all duration-300"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.1)" }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                <service.icon className="h-6 w-6" style={{ color: "#C9A96E" }} />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#C9A96E] transition-colors">{service.title}</h3>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="font-sans text-xs flex items-center gap-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors hover:gap-3"
                style={{ color: "#C9A96E" }}
              >
                Enquire Now <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
