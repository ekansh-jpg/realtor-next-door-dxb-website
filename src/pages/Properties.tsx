import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import bgTransactions from "@/assets/bg-transactions.webp";

const developers = ["All", "Emaar", "DAMAC", "Nakheel", "Sobha"] as const;

const Properties = () => {
  const [filter, setFilter] = useState<(typeof developers)[number]>("All");

  const filtered =
    filter === "All" ? properties : properties.filter((p) => p.developer === filter);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center md:bg-fixed pt-20 md:pt-24 pb-14 md:pb-20"
        style={{ backgroundImage: `url(${bgTransactions})`, minHeight: "40vh" }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.82)" }} />
        <div className="relative z-10 container mx-auto px-5 md:px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "30vh" }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase border mb-4 md:mb-6"
            style={{ borderColor: "rgba(201,169,110,0.4)", color: "#C9A96E" }}
          >
            <Sparkles className="h-3 w-3" /> Trending Now
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-wider text-white mb-3 md:mb-4"
          >
            Trending <span style={{ color: "#C9A96E" }}>Properties</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-sans text-xs md:text-base max-w-2xl italic text-white/60 px-2"
          >
            Handpicked launches and best-sellers from Emaar, DAMAC, Nakheel and Sobha — updated regularly.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <div className="container mx-auto px-5 md:px-6 pt-10 md:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 md:gap-3 justify-center"
        >
          {developers.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className="px-5 py-2 md:py-2.5 rounded-full font-sans text-[11px] md:text-xs tracking-wider uppercase transition-all border"
              style={{
                backgroundColor: filter === d ? "#C9A96E" : "transparent",
                borderColor: filter === d ? "#C9A96E" : "rgba(255,255,255,0.15)",
                color: filter === d ? "#0A0A0A" : "rgba(255,255,255,0.7)",
              }}
            >
              {d}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Property Grid */}
      <div className="container mx-auto px-5 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-500"
              style={{ backgroundColor: "rgba(17,17,17,0.9)" }}
            >
              <Link to={`/properties/${p.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,10,10,0.85) 100%)" }}
                  />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full font-sans text-[10px] uppercase tracking-wider backdrop-blur-md"
                    style={{ backgroundColor: "rgba(10,10,10,0.6)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.4)" }}
                  >
                    {p.developer}
                  </span>
                  <span
                    className="absolute top-3 right-3 px-3 py-1 rounded-full font-sans text-[10px] uppercase tracking-wider backdrop-blur-md"
                    style={{
                      backgroundColor:
                        p.status === "Ready"
                          ? "rgba(34,197,94,0.2)"
                          : p.status === "Launching Soon"
                          ? "rgba(239,68,68,0.2)"
                          : "rgba(201,169,110,0.2)",
                      color:
                        p.status === "Ready"
                          ? "#22c55e"
                          : p.status === "Launching Soon"
                          ? "#f87171"
                          : "#C9A96E",
                    }}
                  >
                    {p.status}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-white">{p.name}</h3>
                    <p className="font-sans text-xs text-white/70 flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" style={{ color: "#C9A96E" }} /> {p.location}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="font-sans text-xs md:text-sm text-white/60 line-clamp-2 mb-4">
                    {p.tagline}
                  </p>
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-wider text-white/40">Starting from</p>
                      <p className="font-serif text-lg font-bold" style={{ color: "#C9A96E" }}>{p.priceFrom}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-sans text-[10px] uppercase tracking-wider text-white/40">Handover</p>
                      <p className="font-sans text-xs text-white/80">{p.handover}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="font-sans text-[11px] text-white/50">{p.bedrooms}</span>
                    <span className="inline-flex items-center gap-1 font-sans text-xs uppercase tracking-wider transition-all group-hover:gap-2" style={{ color: "#C9A96E" }}>
                      View Details <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
