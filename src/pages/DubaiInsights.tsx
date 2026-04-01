import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, Building, Calendar, ChevronDown, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgInsights from "@/assets/bg-insights.jpg";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

const marketStats = [
  { label: "Total Transactions (2024)", value: "180,900+", icon: TrendingUp },
  { label: "Average Price/sqft", value: "AED 1,850", icon: Building },
  { label: "Top Area", value: "Dubai Marina", icon: MapPin },
  { label: "YoY Growth", value: "+18.5%", icon: TrendingUp },
];

const articles = [
  { image: insight1, date: "March 2025", category: "Market Overview", title: "Dubai Real Estate Hits Record $100B+ in 2024", excerpt: "Dubai's property market surpassed AED 370 billion in total transactions, marking the highest ever recorded year." },
  { image: insight2, date: "March 2025", category: "Investment Hotspot", title: "Why Dubai Hills Estate is the #1 Choice for Families", excerpt: "With world-class amenities, top schools, and Emaar's signature quality — Dubai Hills continues to dominate." },
  { image: insight3, date: "February 2025", category: "Development", title: "Palm Jebel Ali: The Next Mega-Project Reshaping Dubai", excerpt: "Nakheel's revival of Palm Jebel Ali promises to be five times larger than Palm Jumeirah." },
  { image: insight1, date: "February 2025", category: "Policy", title: "Golden Visa Through Real Estate: What You Need to Know", excerpt: "UAE's Golden Visa program now allows property investors to secure 10-year residency with qualifying investments." },
  { image: insight2, date: "January 2025", category: "Market Trends", title: "Off-Plan vs Ready Properties: 2025 Investment Guide", excerpt: "A comprehensive comparison of off-plan and ready property investments in Dubai's current market." },
  { image: insight3, date: "January 2025", category: "NRI Guide", title: "Complete Guide for Indian Investors in Dubai Real Estate", excerpt: "Everything NRI investors need to know about buying property in Dubai — from financing to legal requirements." },
];

const hotspots = [
  { area: "Dubai Creek Harbour", growth: "+24%", avgPrice: "AED 1,650/sqft", highlight: "Emaar's flagship waterfront" },
  { area: "Business Bay", growth: "+19%", avgPrice: "AED 1,900/sqft", highlight: "Commercial & residential hub" },
  { area: "JVC", growth: "+31%", avgPrice: "AED 950/sqft", highlight: "Affordable investment entry" },
  { area: "Jumeirah Village Triangle", growth: "+22%", avgPrice: "AED 1,100/sqft", highlight: "Rising rental yields" },
];

const faqs = [
  { q: "Is Dubai real estate a good investment in 2025?", a: "Yes — Dubai offers 6-10% rental yields, zero income tax, and strong capital appreciation. The market has shown consistent growth with record transactions in 2024." },
  { q: "What is the minimum investment for a Golden Visa?", a: "A property investment of AED 2 million or more qualifies for a 10-year Golden Visa. The property must be fully paid (not mortgaged) and retained for at least 3 years." },
  { q: "Can foreigners buy property in Dubai?", a: "Yes, foreigners can buy freehold property in designated areas across Dubai. There are no restrictions on nationality, and the process is straightforward with DLD registration." },
  { q: "What are the best areas to invest in Dubai?", a: "Top investment areas include Dubai Marina, Downtown Dubai, Business Bay, JVC, and Dubai Hills Estate — each offering different price points and rental yields." },
];

const DubaiInsights = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-24 pb-20" style={{ minHeight: "40vh" }}>
        <div className="absolute inset-0">
          <img src={bgInsights} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.7), rgba(10,10,10,0.95))" }} />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "30vh" }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A96E" }}>Market Intelligence</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">What's Going On in Dubai</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Stay ahead with the latest market trends, investment opportunities, and development updates.
          </motion.p>
        </div>
      </div>

      {/* Market Stats */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketStats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-xl border p-6 text-center"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.15)" }}>
              <stat.icon className="h-5 w-5 mx-auto mb-3" style={{ color: "#C9A96E" }} />
              <p className="font-serif text-xl md:text-2xl font-bold text-white">{stat.value}</p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="container mx-auto px-6 pb-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
          Latest <span style={{ color: "#C9A96E" }}>Developments</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div key={article.title + i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-xl border overflow-hidden group cursor-pointer"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.1)" }}>
              <div className="overflow-hidden h-48">
                <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}>{article.category}</span>
                  <span className="font-sans text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.4)" }}><Calendar className="h-3 w-3" /> {article.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#C9A96E] transition-colors">{article.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{article.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Investment Hotspots */}
      <div className="container mx-auto px-6 pb-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
          Investment <span style={{ color: "#C9A96E" }}>Hotspots</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {hotspots.map((h, i) => (
            <motion.div key={h.area} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-xl border p-6 flex items-center justify-between hover:border-[#C9A96E]/40 transition-colors"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.1)" }}>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">{h.area}</h3>
                <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{h.highlight}</p>
                <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{h.avgPrice}</p>
              </div>
              <div className="text-right">
                <p className="font-sans text-xl font-bold" style={{ color: "#22c55e" }}>{h.growth}</p>
                <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>YoY Growth</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl border p-10 md:p-14 text-center" style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.15)" }}>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">Subscribe to Market Updates</h3>
          <p className="font-sans text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Get weekly insights on Dubai's real estate market delivered straight to your inbox.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg font-sans text-sm text-white border outline-none transition-colors focus:border-[#C9A96E]"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(201,169,110,0.2)" }} />
            <button type="submit" className="px-6 py-3 rounded-lg font-sans text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#0A0A0A" }}>
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-6 pb-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
          Frequently Asked <span style={{ color: "#C9A96E" }}>Questions</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-xl border overflow-hidden"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.1)" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-sans text-sm font-medium text-white pr-4">{faq.q}</span>
                <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200"
                  style={{ color: "#C9A96E", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5">
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Source */}
      <div className="container mx-auto px-6 pb-10 text-center">
        <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          Source: <a href="https://dubailand.gov.ae" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A96E] transition-colors">Dubai Land Department (DLD)</a> • Data for illustration purposes
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default DubaiInsights;
