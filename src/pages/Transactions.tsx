import Seo from "@/components/Seo";
import { pageMetadata } from "@/lib/seo";
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Building, BarChart3 } from "lucide-react";
import { openLeadForm } from "@/lib/leads";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgTransactions from "@/assets/bg-transactions.webp";

// Dubai Land Department figures for H1 2026, as reported by Emirates 24|7 (Jul 2026).
// Update these when DLD publishes new half-year data.
const salesSplit = [
  { segment: "Ready (completed)", value: 146.69, deals: 27160 },
  { segment: "Off-plan", value: 139.75, deals: 58840 },
];

const statCards = [
  { label: "Transactions, H1 2026", value: "112,850", icon: BarChart3, sub: "All real estate transactions" },
  { label: "Transaction value, H1 2026", value: "AED 419.9B", icon: TrendingUp, sub: "All real estate transactions" },
  { label: "Property sales, H1 2026", value: "86,000", icon: Building, sub: "AED 286.4B in sales value" },
];

const liveSources = [
  { name: "Dubai Land Department", desc: "Official open data and transaction records.", href: "https://dubailand.gov.ae" },
  { name: "Dubai REST app", desc: "DLD's official app for property and transaction lookups.", href: "https://dubailand.gov.ae" },
  { name: "DXBinteract", desc: "Searchable sales and rental data built on DLD records.", href: "https://dxbinteract.com" },
];

const Transactions = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Seo
        title={pageMetadata.transactions.title}
        description={pageMetadata.transactions.description}
        path="/transactions"
        breadcrumbs={[{ name: "Transactions", path: "/transactions" }]}
      />
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
            Market Overview
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
            Official Dubai Land Department figures for the first half of 2026, and where to check live transactions yourself
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
              <p className="font-sans text-[10px] md:text-xs mt-1 md:mt-2 text-white/50">{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ready vs off-plan */}
      <div className="container mx-auto px-5 md:px-6 pb-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border border-white/10 p-4 md:p-8 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(17, 17, 17, 0.85)" }}
        >
          <h2 className="font-serif text-base md:text-xl font-bold uppercase tracking-wider text-white">Ready vs Off-Plan Sales</h2>
          <p className="font-sans text-[10px] md:text-xs mt-1 mb-6 md:mb-8 text-white/40">Sales value, H1 2026 (AED billions)</p>
          <div className="h-56 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesSplit} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="segment" tick={{ fontSize: 11, fill: "rgba(255,255,255,0.6)" }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}B`} width={40} />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                  contentStyle={{ backgroundColor: "#111111", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "8px", fontSize: "11px", color: "#fff" }}
                  formatter={(value: number, _n, item) => [`AED ${value}B · ${(item.payload as { deals: number }).deals.toLocaleString()} deals`, "Sales"]}
                />
                <Bar dataKey="value" fill="#C9A96E" radius={[6, 6, 0, 0]} maxBarSize={120} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Where to check live data */}
      <div className="container mx-auto px-5 md:px-6 pb-10 md:pb-16">
        <h2 className="font-serif text-lg md:text-2xl font-bold uppercase tracking-wider text-white mb-2 text-center">Check Live Transactions</h2>
        <p className="font-sans text-xs md:text-sm text-white/50 text-center mb-6 md:mb-8">Recent sale prices in a building or community are public. These are the official places to look.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {liveSources.map((src) => (
            <a
              key={src.name}
              href={src.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 p-5 md:p-6 hover:border-[#C9A96E] transition-colors"
              style={{ backgroundColor: "rgba(17, 17, 17, 0.85)" }}
            >
              <p className="flex items-center gap-2 font-serif text-base font-bold text-white">
                {src.name} <ExternalLink className="h-3.5 w-3.5 text-white/40 group-hover:text-[#C9A96E]" />
              </p>
              <p className="mt-1 font-sans text-xs text-white/50">{src.desc}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => openLeadForm({ formName: "transactions_request", title: "Recent transactions in an area", subtitle: "Tell me the building or community and I'll send you recent sale prices.", variant: "short" })}
            className="rounded-full px-8 py-3 font-sans text-xs md:text-sm font-semibold uppercase tracking-wider text-black hover:opacity-90"
            style={{ backgroundColor: "#C9A96E" }}
          >
            Ask me for recent sales in an area
          </button>
        </div>
        <p className="font-sans text-[10px] md:text-xs text-white/30 text-center mt-6">
          Source: Dubai Land Department H1 2026 data, as reported by Emirates 24|7 (July 2026). Figures are updated when new official data is published.
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
