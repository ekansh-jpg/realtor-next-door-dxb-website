import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, ExternalLink, TrendingUp, Building, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgTransactions from "@/assets/bg-transactions.webp";

const chartData = [
  { date: "Mon", existing: 2.4, offPlan: 2.1 },
  { date: "Tue", existing: 2.9, offPlan: 2.6 },
  { date: "Wed", existing: 3.2, offPlan: 2.4 },
  { date: "Thu", existing: 2.8, offPlan: 3.1 },
  { date: "Fri", existing: 3.6, offPlan: 2.9 },
  { date: "Sat", existing: 4.1, offPlan: 3.4 },
  { date: "Sun", existing: 3.5, offPlan: 3.7 },
];

const transactionData = [
  { id: 1, area: "Palm Jebel Ali", type: "Villa", bedrooms: "6 BR", price: "AED 42,000,000", sqft: "8,900", date: "This week", status: "Off-Plan" },
  { id: 2, area: "Dubai Creek Harbour", type: "Apartment", bedrooms: "3 BR", price: "AED 4,850,000", sqft: "1,780", date: "This week", status: "Off-Plan" },
  { id: 3, area: "Palm Jumeirah", type: "Villa", bedrooms: "5 BR", price: "AED 18,500,000", sqft: "5,400", date: "This week", status: "Completed" },
  { id: 4, area: "Downtown Dubai", type: "Apartment", bedrooms: "2 BR", price: "AED 3,650,000", sqft: "1,320", date: "This week", status: "Completed" },
  { id: 5, area: "DAMAC Lagoons", type: "Townhouse", bedrooms: "4 BR", price: "AED 3,100,000", sqft: "2,350", date: "This week", status: "Off-Plan" },
  { id: 6, area: "Dubai Hills Estate", type: "Villa", bedrooms: "5 BR", price: "AED 11,200,000", sqft: "5,800", date: "This week", status: "Completed" },
  { id: 7, area: "Business Bay", type: "Apartment", bedrooms: "1 BR", price: "AED 2,150,000", sqft: "820", date: "This week", status: "Completed" },
  { id: 8, area: "MBR City · Hartland II", type: "Apartment", bedrooms: "2 BR", price: "AED 2,780,000", sqft: "1,150", date: "This week", status: "Off-Plan" },
  { id: 9, area: "Arabian Ranches III", type: "Villa", bedrooms: "4 BR", price: "AED 6,400,000", sqft: "3,900", date: "This week", status: "Completed" },
  { id: 10, area: "Jumeirah Village Circle", type: "Apartment", bedrooms: "Studio", price: "AED 895,000", sqft: "470", date: "This week", status: "Completed" },
];

const filters = ["All", "Apartment", "Villa", "Townhouse", "Off-Plan"];

const statCards = [
  { label: "Weekly Transactions", value: "6,840", icon: BarChart3, sub: "+14.2% WoW" },
  { label: "Total Worth (7 Days)", value: "AED 22.5B", icon: TrendingUp, sub: "+9.6% WoW" },
  { label: "Units / Villas / Off-Plan", value: "4,920 / 780 / 1,140", icon: Building, sub: "Off-plan share up" },
];

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

      {/* Hero with parallax */}
      <section
        className="relative bg-cover bg-center md:bg-fixed pt-20 md:pt-24 pb-14 md:pb-20"
        style={{ backgroundImage: `url(${bgTransactions})`, minHeight: "35vh" }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 10, 10, 0.82)" }} />
        <div className="relative z-10 container mx-auto px-5 md:px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "25vh" }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 md:px-5 py-2 rounded-full font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase border mb-4 md:mb-6"
            style={{ borderColor: "rgba(201,169,110,0.4)", color: "#C9A96E" }}
          >
            Live Market Data
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-3 md:mb-4"
          >
            Real Estate <span style={{ color: "#C9A96E" }}>Transactions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs md:text-base max-w-2xl italic text-white/60 px-2"
          >
            Dubai's latest property transaction data — updated daily from official sources
          </motion.p>
        </div>
      </section>

      {/* Stat Cards */}
      <div className="container mx-auto px-5 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-xl border border-white/10 p-5 md:p-8 text-center backdrop-blur-sm hover:border-white/25 transition-all duration-300"
              style={{ backgroundColor: "rgba(17, 17, 17, 0.85)" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4" style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                <card.icon className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#C9A96E" }} />
              </div>
              <p className="font-serif text-xl md:text-3xl font-bold text-white mb-1">{card.value}</p>
              <p className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-white/40">{card.label}</p>
              <p className="font-sans text-[10px] md:text-xs mt-1 md:mt-2" style={{ color: "#22c55e" }}>{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="container mx-auto px-5 md:px-6 pb-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border border-white/10 p-4 md:p-8 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(17, 17, 17, 0.85)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8">
            <div>
              <h3 className="font-serif text-base md:text-xl font-bold uppercase tracking-wider text-white">Daily Transaction Worth</h3>
              <p className="font-sans text-[10px] md:text-xs mt-1 text-white/40">Existing vs Off-Plan (in Billions AED)</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full font-sans text-[10px] md:text-xs uppercase tracking-wider border transition-all self-start sm:self-auto"
              style={{ borderColor: "rgba(201,169,110,0.3)", color: "#C9A96E" }}
            >
              <RefreshCw className="h-3 w-3 md:h-3.5 md:w-3.5" /> Refresh
            </motion.button>
          </div>
          <div className="h-56 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} />
                <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} tickFormatter={(v) => `${v}B`} width={35} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#111111", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "8px", fontSize: "11px", color: "#fff" }}
                  labelStyle={{ color: "rgba(255,255,255,0.6)" }}
                  formatter={(value: number) => [`AED ${value}B`, ""]}
                />
                <Legend wrapperStyle={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }} />
                <Line type="monotone" dataKey="existing" name="Existing" stroke="#C9A96E" strokeWidth={2} dot={{ fill: "#C9A96E", r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="offPlan" name="Off-Plan" stroke="rgba(255,255,255,0.6)" strokeWidth={2} dot={{ fill: "rgba(255,255,255,0.6)", r: 3 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-5 md:px-6 pb-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 md:px-6 py-2 md:py-2.5 rounded-full font-sans text-[10px] md:text-xs tracking-wider uppercase transition-all border"
              style={{
                backgroundColor: activeFilter === f ? "#C9A96E" : "transparent",
                borderColor: activeFilter === f ? "#C9A96E" : "rgba(255,255,255,0.15)",
                color: activeFilter === f ? "#0A0A0A" : "rgba(255,255,255,0.6)",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Mobile Cards / Desktop Table */}
        {/* Mobile: card layout */}
        <div className="md:hidden space-y-3">
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-white/10 p-4 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(17, 17, 17, 0.85)" }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-sans text-sm font-medium text-white">{t.area}</p>
                  <p className="font-sans text-xs text-white/50">{t.type} · {t.bedrooms} · {t.sqft} sqft</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full font-sans text-[10px] flex-shrink-0" style={{
                  backgroundColor: t.status === "Completed" ? "rgba(34,197,94,0.15)" : "rgba(201,169,110,0.15)",
                  color: t.status === "Completed" ? "#22c55e" : "#C9A96E",
                }}>
                  {t.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-sans text-sm font-semibold" style={{ color: "#C9A96E" }}>{t.price}</p>
                <p className="font-sans text-[10px] text-white/40">{t.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden md:block rounded-xl border border-white/10 overflow-hidden"
          style={{ backgroundColor: "rgba(17, 17, 17, 0.85)" }}
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
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="transition-colors hover:bg-white/5"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td className="px-6 py-4 font-sans text-sm font-medium text-white">{t.area}</td>
                    <td className="px-6 py-4 font-sans text-sm text-white/60">{t.type}</td>
                    <td className="px-6 py-4 font-sans text-sm text-white/60">{t.bedrooms}</td>
                    <td className="px-6 py-4 font-sans text-sm text-white/60">{t.sqft} sqft</td>
                    <td className="px-6 py-4 font-sans text-sm font-semibold" style={{ color: "#C9A96E" }}>{t.price}</td>
                    <td className="px-6 py-4 font-sans text-sm text-white/40">{t.date}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full font-sans text-xs" style={{
                        backgroundColor: t.status === "Completed" ? "rgba(34,197,94,0.15)" : "rgba(201,169,110,0.15)",
                        color: t.status === "Completed" ? "#22c55e" : "#C9A96E",
                      }}>
                        {t.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="font-sans text-[10px] md:text-xs text-white/30 text-center mt-4 md:mt-6">
          Data sourced from Dubai Land Department (DLD) • Updated weekly
        </p>
      </div>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url(${bgTransactions})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 10, 10, 0.75)" }} />
        <div className="relative z-10 py-14 md:py-28">
          <div className="container mx-auto px-5 md:px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-2xl font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] text-white sm:text-3xl md:text-4xl"
            >
              Real-Time Market Data
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto mt-4 md:mt-6 max-w-lg font-sans text-sm italic leading-relaxed text-white/70 px-2"
            >
              Access the official Dubai Land Department portal for live transaction data, market reports, and real estate insights.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5, type: "spring", stiffness: 200 }}
              className="mt-8 md:mt-10"
            >
              <motion.a
                href="https://dubailand.gov.ae/en/eservices/real-estate-transaction/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 md:gap-3 rounded-full px-6 md:px-10 py-3 md:py-4 font-sans text-xs md:text-sm font-semibold uppercase tracking-wider md:tracking-widest text-white transition-all duration-300"
                style={{ backgroundColor: "#C9A96E" }}
              >
                Check Real-Time Data <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transactions;
