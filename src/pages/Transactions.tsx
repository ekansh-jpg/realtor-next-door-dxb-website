import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, ExternalLink, TrendingUp, Building, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chartData = [
  { date: "22 Mar", existing: 1.8, offPlan: 1.2 },
  { date: "23 Mar", existing: 2.1, offPlan: 1.5 },
  { date: "24 Mar", existing: 2.4, offPlan: 1.1 },
  { date: "25 Mar", existing: 1.9, offPlan: 1.8 },
  { date: "26 Mar", existing: 2.7, offPlan: 2.0 },
  { date: "27 Mar", existing: 3.1, offPlan: 1.6 },
  { date: "28 Mar", existing: 2.5, offPlan: 2.3 },
];

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

const statCards = [
  { label: "Total Transactions (7 Days)", value: "5,120", icon: BarChart3, sub: "+12% from last week" },
  { label: "Total Worth (7 Days)", value: "AED 17.82B", icon: TrendingUp, sub: "+8.3% from last week" },
  { label: "Property Breakdown", value: "4,085 / 422 / 613", icon: Building, sub: "Units / Buildings / Land" },
];

const Transactions = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = transactionData.filter((t) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Off-Plan") return t.status === "Off-Plan";
    return t.type === activeFilter;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F0E8" }}>
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-10 container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full font-sans text-xs tracking-[0.2em] uppercase border mb-6"
            style={{ borderColor: "#C9A96E", color: "#C9A96E" }}
          >
            Live Market Data
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3" style={{ color: "#0A0A0A" }}>
            Real Estate <span style={{ color: "#C9A96E" }}>Transactions</span>
          </h1>
          <p className="font-sans text-sm md:text-base max-w-2xl mx-auto" style={{ color: "rgba(10,10,10,0.55)" }}>
            Dubai's latest property transaction data — updated daily from official sources
          </p>
        </motion.div>
      </div>

      {/* Stat Cards */}
      <div className="container mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-3 gap-5">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl p-6 border shadow-sm"
              style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(201,169,110,0.15)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <p className="font-sans text-xs tracking-wider uppercase" style={{ color: "rgba(10,10,10,0.45)" }}>{card.label}</p>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.12)" }}>
                  <card.icon className="h-4 w-4" style={{ color: "#C9A96E" }} />
                </div>
              </div>
              <p className="font-serif text-2xl md:text-3xl font-bold" style={{ color: "#0A0A0A" }}>{card.value}</p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(10,10,10,0.4)" }}>{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="container mx-auto px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border p-6 shadow-sm"
          style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(201,169,110,0.15)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-lg font-bold" style={{ color: "#0A0A0A" }}>Daily Transaction Worth</h3>
              <p className="font-sans text-xs" style={{ color: "rgba(10,10,10,0.4)" }}>Existing vs Off-Plan (in Billions AED)</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-xs border transition-colors hover:bg-gray-50"
              style={{ borderColor: "rgba(201,169,110,0.3)", color: "#C9A96E" }}>
              <RefreshCw className="h-3 w-3" /> Refresh
            </button>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis dataKey="date" tick={{ fontSize: 12, fill: "rgba(10,10,10,0.5)" }} axisLine={{ stroke: "rgba(0,0,0,0.1)" }} />
                <YAxis tick={{ fontSize: 12, fill: "rgba(10,10,10,0.5)" }} axisLine={{ stroke: "rgba(0,0,0,0.1)" }} tickFormatter={(v) => `${v}B`} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "8px", fontSize: "12px" }}
                  formatter={(value: number) => [`AED ${value}B`, ""]}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line type="monotone" dataKey="existing" name="Existing" stroke="#C9A96E" strokeWidth={2.5} dot={{ fill: "#C9A96E", r: 4 }} />
                <Line type="monotone" dataKey="offPlan" name="Off-Plan" stroke="#0A0A0A" strokeWidth={2.5} dot={{ fill: "#0A0A0A", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Filters & Table */}
      <div className="container mx-auto px-6 pb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 rounded-full font-sans text-xs tracking-wider transition-all border"
              style={{
                backgroundColor: activeFilter === f ? "#C9A96E" : "#FFFFFF",
                borderColor: activeFilter === f ? "#C9A96E" : "rgba(10,10,10,0.12)",
                color: activeFilter === f ? "#FFFFFF" : "rgba(10,10,10,0.6)",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-2xl border overflow-hidden shadow-sm"
          style={{ borderColor: "rgba(201,169,110,0.15)", backgroundColor: "#FFFFFF" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
                  {["Area", "Type", "Bedrooms", "Size", "Price", "Date", "Status"].map((h) => (
                    <th key={h} className="px-6 py-4 text-left font-sans text-xs tracking-wider uppercase" style={{ color: "#C9A96E" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr key={t.id} className="transition-colors hover:bg-gray-50/50" style={{ borderBottom: "1px solid rgba(10,10,10,0.05)" }}>
                    <td className="px-6 py-4 font-sans text-sm font-medium" style={{ color: "#0A0A0A" }}>{t.area}</td>
                    <td className="px-6 py-4 font-sans text-sm" style={{ color: "rgba(10,10,10,0.6)" }}>{t.type}</td>
                    <td className="px-6 py-4 font-sans text-sm" style={{ color: "rgba(10,10,10,0.6)" }}>{t.bedrooms}</td>
                    <td className="px-6 py-4 font-sans text-sm" style={{ color: "rgba(10,10,10,0.6)" }}>{t.sqft} sqft</td>
                    <td className="px-6 py-4 font-sans text-sm font-semibold" style={{ color: "#C9A96E" }}>{t.price}</td>
                    <td className="px-6 py-4 font-sans text-sm" style={{ color: "rgba(10,10,10,0.4)" }}>{t.date}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full font-sans text-xs" style={{
                        backgroundColor: t.status === "Completed" ? "rgba(34,197,94,0.1)" : "rgba(201,169,110,0.1)",
                        color: t.status === "Completed" ? "#16a34a" : "#C9A96E",
                      }}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://dubailand.gov.ae/en/eservices/real-estate-transaction/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-sans text-sm font-semibold tracking-wider uppercase transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#C9A96E", color: "#FFFFFF" }}
          >
            Check Real-Time Data on DubaiLand <ExternalLink className="h-4 w-4" />
          </a>
          <p className="font-sans text-xs mt-4" style={{ color: "rgba(10,10,10,0.35)" }}>
            Data sourced from Dubai Land Department (DLD) • Updated weekly
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Transactions;
