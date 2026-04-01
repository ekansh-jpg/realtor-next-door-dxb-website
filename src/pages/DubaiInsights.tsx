import { motion } from "framer-motion";
import { TrendingUp, MapPin, Building, Calendar } from "lucide-react";
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
  {
    image: insight1,
    date: "March 2025",
    category: "Market Overview",
    title: "Dubai Real Estate Hits Record $100B+ in 2024",
    excerpt: "Dubai's property market surpassed AED 370 billion in total transactions, marking the highest ever recorded year for the emirate's real estate sector.",
  },
  {
    image: insight2,
    date: "March 2025",
    category: "Investment Hotspot",
    title: "Why Dubai Hills Estate is the #1 Choice for Families",
    excerpt: "With world-class amenities, top schools, and Emaar's signature quality — Dubai Hills continues to dominate as the preferred community for family living.",
  },
  {
    image: insight3,
    date: "February 2025",
    category: "Development",
    title: "Palm Jebel Ali: The Next Mega-Project Reshaping Dubai",
    excerpt: "Nakheel's revival of Palm Jebel Ali promises to be five times larger than Palm Jumeirah, with luxury villas, hotels, and beachfront living.",
  },
];

const hotspots = [
  { area: "Dubai Creek Harbour", growth: "+24%", avgPrice: "AED 1,650/sqft", highlight: "Emaar's flagship waterfront" },
  { area: "Business Bay", growth: "+19%", avgPrice: "AED 1,900/sqft", highlight: "Commercial & residential hub" },
  { area: "JVC", growth: "+31%", avgPrice: "AED 950/sqft", highlight: "Affordable investment entry" },
  { area: "Jumeirah Village Triangle", growth: "+22%", avgPrice: "AED 1,100/sqft", highlight: "Rising rental yields" },
];

const DubaiInsights = () => {
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
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A96E" }}>
            Market Intelligence
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            What's Going On in Dubai
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Stay ahead with the latest market trends, investment opportunities, and development updates from Dubai's thriving real estate sector.
          </motion.p>
        </div>
      </div>

      {/* Market Stats */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border p-6 text-center"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.15)" }}
            >
              <stat.icon className="h-5 w-5 mx-auto mb-3" style={{ color: "#C9A96E" }} />
              <p className="font-serif text-xl md:text-2xl font-bold text-white">{stat.value}</p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="container mx-auto px-6 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center"
        >
          Latest <span style={{ color: "#C9A96E" }}>Developments</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-xl border overflow-hidden group cursor-pointer"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.1)" }}
            >
              <div className="overflow-hidden h-48">
                <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}>
                    {article.category}
                  </span>
                  <span className="font-sans text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <Calendar className="h-3 w-3" /> {article.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#C9A96E] transition-colors">
                  {article.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {article.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Investment Hotspots */}
      <div className="container mx-auto px-6 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center"
        >
          Investment <span style={{ color: "#C9A96E" }}>Hotspots</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {hotspots.map((h, i) => (
            <motion.div
              key={h.area}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border p-6 flex items-center justify-between hover:border-[#C9A96E]/40 transition-colors"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.1)" }}
            >
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

      <Footer />
    </div>
  );
};

export default DubaiInsights;
