import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgTransactions from "@/assets/bg-transactions.jpg";

const transactionData = [
  { id: 1, area: "Dubai Marina", type: "Apartment", bedrooms: "2 BR", price: "AED 2,450,000", sqft: "1,250", date: "28 Mar 2025", status: "Completed" },
  { id: 2, area: "Downtown Dubai", type: "Apartment", bedrooms: "1 BR", price: "AED 1,890,000", sqft: "850", date: "27 Mar 2025", status: "Completed" },
  { id: 3, area: "Palm Jumeirah", type: "Villa", bedrooms: "4 BR", price: "AED 12,500,000", sqft: "4,200", date: "26 Mar 2025", status: "Completed" },
  { id: 4, area: "Business Bay", type: "Apartment", bedrooms: "Studio", price: "AED 980,000", sqft: "450", date: "25 Mar 2025", status: "Completed" },
  { id: 5, area: "JVC", type: "Apartment", bedrooms: "1 BR", price: "AED 750,000", sqft: "720", date: "25 Mar 2025", status: "Off-Plan" },
  { id: 6, area: "Dubai Hills", type: "Villa", bedrooms: "5 BR", price: "AED 8,900,000", sqft: "5,500", date: "24 Mar 2025", status: "Completed" },
  { id: 7, area: "Creek Harbour", type: "Apartment", bedrooms: "3 BR", price: "AED 3,200,000", sqft: "1,800", date: "24 Mar 2025", status: "Off-Plan" },
  { id: 8, area: "JBR", type: "Apartment", bedrooms: "2 BR", price: "AED 3,100,000", sqft: "1,400", date: "23 Mar 2025", status: "Completed" },
  { id: 9, area: "Arabian Ranches", type: "Villa", bedrooms: "4 BR", price: "AED 5,600,000", sqft: "3,800", date: "23 Mar 2025", status: "Completed" },
  { id: 10, area: "DAMAC Hills", type: "Townhouse", bedrooms: "3 BR", price: "AED 2,800,000", sqft: "2,100", date: "22 Mar 2025", status: "Off-Plan" },
];

const filters = ["All", "Apartment", "Villa", "Townhouse", "Off-Plan"];

const Transactions = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = transactionData.filter((t) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Off-Plan") return t.status === "Off-Plan";
    return t.type === activeFilter;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-24 pb-20" style={{ minHeight: "40vh" }}>
        <div className="absolute inset-0">
          <img src={bgTransactions} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.95))" }} />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "30vh" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#C9A96E" }}
          >
            Real Estate Transactions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Dubai Property Data
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base max-w-2xl"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Dubai's latest property transaction data — updated daily from official sources
          </motion.p>
        </div>
      </div>

      {/* Filters & Table */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 rounded-full font-sans text-xs tracking-wider transition-all border"
              style={{
                backgroundColor: activeFilter === f ? "#C9A96E" : "transparent",
                borderColor: activeFilter === f ? "#C9A96E" : "rgba(255,255,255,0.15)",
                color: activeFilter === f ? "#0A0A0A" : "rgba(255,255,255,0.7)",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "rgba(201,169,110,0.15)", backgroundColor: "#111111" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(201,169,110,0.15)" }}>
                  {["Area", "Type", "Bedrooms", "Size", "Price", "Date", "Status"].map((h) => (
                    <th key={h} className="px-6 py-4 text-left font-sans text-xs tracking-wider uppercase" style={{ color: "#C9A96E" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((t, i) => (
                  <motion.tr
                    key={t.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="transition-colors hover:bg-white/5"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td className="px-6 py-4 font-sans text-sm text-white">{t.area}</td>
                    <td className="px-6 py-4 font-sans text-sm text-white/70">{t.type}</td>
                    <td className="px-6 py-4 font-sans text-sm text-white/70">{t.bedrooms}</td>
                    <td className="px-6 py-4 font-sans text-sm text-white/70">{t.sqft} sqft</td>
                    <td className="px-6 py-4 font-sans text-sm font-medium" style={{ color: "#C9A96E" }}>{t.price}</td>
                    <td className="px-6 py-4 font-sans text-sm text-white/50">{t.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className="px-3 py-1 rounded-full font-sans text-xs"
                        style={{
                          backgroundColor: t.status === "Completed" ? "rgba(34,197,94,0.15)" : "rgba(201,169,110,0.15)",
                          color: t.status === "Completed" ? "#22c55e" : "#C9A96E",
                        }}
                      >
                        {t.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Data sourced from Dubai Land Department (DLD) • For illustration purposes
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Transactions;
