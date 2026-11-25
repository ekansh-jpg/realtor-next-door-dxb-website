import { useState } from "react";
import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, Building, Calendar, ChevronDown, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgInsights from "@/assets/bg-insights.webp";
import bgCta from "@/assets/bg-contact.webp";
import { Link } from "react-router-dom";
import { insightArticles } from "@/data/insights";
import { pageMetadata } from "@/lib/seo";
import { openLeadForm } from "@/lib/leads";

const marketStats = [
  { label: "Transactions, H1 2026", value: "112,850", source: "Dubai Land Department", icon: TrendingUp },
  { label: "Transaction value, H1 2026", value: "AED 419.9B", source: "Dubai Land Department", icon: Building },
  { label: "Avg sale price, Aug 2026", value: "AED 1,636/sqft", source: "Khaleej Times, Sep 2026", icon: MapPin },
  { label: "Price change YoY, Aug 2026", value: "−1.7%", source: "Khaleej Times, Sep 2026", icon: TrendingUp },
];

const articles = insightArticles.map(a => ({ ...a, date: a.dateLabel }));

const hotspots = [
  { area: "Emaar Beachfront", highlight: "Beachfront towers beside Dubai Marina" },
  { area: "Palm Jebel Ali", highlight: "Nakheel's relaunched island, mostly off-plan" },
  { area: "Dubai Islands", highlight: "Emerging beachfront master community" },
  { area: "JVC & JVT", highlight: "Popular mid-market communities for rental investors" },
];

const faqs = [
  { q: "Is Dubai real estate a good investment in 2026?", a: "It depends on your goals and time horizon. Dubai offers freehold ownership for foreigners, no personal income tax on rental income and rental yields that compare well with many global cities. Prices move in cycles, though: after several years of strong growth, average prices were slightly lower year-on-year in mid-2026. No returns are guaranteed." },
  { q: "What is the minimum investment for a Golden Visa?", a: "A property investment of AED 2 million or more qualifies for a 10-year Golden Visa. The property must be fully paid (not mortgaged) and retained for at least 3 years." },
  { q: "Can foreigners buy property in Dubai?", a: "Yes, foreigners can buy freehold property in designated areas across Dubai. There are no restrictions on nationality, and the process is straightforward with DLD registration." },
  { q: "What are the best areas to invest in Dubai?", a: "Top investment areas include Dubai Marina, Downtown Dubai, Business Bay, JVC, and Dubai Hills Estate — each offering different price points and rental yields." },
];

const DubaiInsights = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Seo
        title={pageMetadata.insights.title}
        description={pageMetadata.insights.description}
        path="/dubai-insights"
        type="article"
        breadcrumbs={[{ name: "Dubai Insights", path: "/dubai-insights" }]}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center md:bg-fixed pt-20 md:pt-24 pb-14 md:pb-20"
        style={{ backgroundImage: `url(${bgInsights})`, minHeight: "35vh" }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.82)" }} />
        <div className="relative z-10 container mx-auto px-5 md:px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "25vh" }}>
          <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }} transition={{ duration: 0.8 }}
            className="font-sans text-[10px] md:text-xs uppercase mb-3 md:mb-4" style={{ color: "#C9A96E" }}>Market Intelligence</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-3 md:mb-4">
            What's Going On in Dubai
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs md:text-base max-w-2xl italic text-white/60 px-2">
            Stay ahead with the latest market trends, investment opportunities, and development updates.
          </motion.p>
        </div>
      </section>

      {/* Market Stats */}
      <div className="container mx-auto px-5 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {marketStats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 p-4 md:p-6 text-center backdrop-blur-sm hover:border-white/25 transition-all"
              style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
              <stat.icon className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-2 md:mb-3" style={{ color: "#C9A96E" }} />
              <p className="font-serif text-base md:text-2xl font-bold text-white">{stat.value}</p>
              <p className="font-sans text-[9px] md:text-xs mt-1 uppercase tracking-wider text-white/40">{stat.label}</p>
              <p className="font-sans text-[9px] md:text-[10px] mt-1 text-white/30">Source: {stat.source}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="container mx-auto px-5 md:px-6 pb-14 md:pb-20">
        <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} viewport={{ once: true }}
          className="mb-2 text-center font-sans text-xs md:text-sm uppercase" style={{ color: "#C9A96E" }}>Insights</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-xl md:text-4xl font-bold uppercase tracking-wider text-white mb-8 md:mb-12 text-center">
          Latest Developments
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {articles.map((article, i) => (
            <Link key={article.slug} to={`/dubai-insights/${article.slug}`} className="block"><motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 overflow-hidden group cursor-pointer hover:border-white/25 transition-all"
              style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
              <div className="overflow-hidden h-36 md:h-48">
                <img src={article.image} alt={article.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <span className="font-sans text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}>{article.category}</span>
                  <span className="font-sans text-[10px] md:text-xs flex items-center gap-1 text-white/40"><Calendar className="h-2.5 w-2.5 md:h-3 md:w-3" /> {article.date}</span>
                </div>
                <h3 className="font-serif text-sm md:text-lg font-bold text-white mb-1 md:mb-2 group-hover:text-[#C9A96E] transition-colors leading-snug">{article.title}</h3>
                <p className="font-sans text-xs md:text-sm leading-relaxed text-white/50 line-clamp-2">{article.excerpt}</p>
              </div>
            </motion.div></Link>
          ))}
        </div>
      </div>

      {/* Investment Hotspots */}
      <div className="container mx-auto px-5 md:px-6 pb-14 md:pb-20">
        <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} viewport={{ once: true }}
          className="mb-2 text-center font-sans text-xs md:text-sm uppercase" style={{ color: "#C9A96E" }}>Trending Areas</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-xl md:text-4xl font-bold uppercase tracking-wider text-white mb-8 md:mb-12 text-center">
          Areas Investors Ask About
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {hotspots.map((h, i) => (
            <motion.div key={h.area} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-xl border border-white/10 p-4 md:p-6 flex items-center justify-between hover:border-white/25 transition-all backdrop-blur-sm"
              style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
              <div>
                <h3 className="font-serif text-sm md:text-lg font-bold text-white">{h.area}</h3>
                <p className="font-sans text-[10px] md:text-xs mt-0.5 md:mt-1 text-white/50">{h.highlight}</p>
              </div>
              <button type="button" onClick={() => openLeadForm({ formName: "area_enquiry", property: h.area, title: `Ask about ${h.area}`, variant: "short" })}
                className="flex-shrink-0 ml-4 rounded-full border border-white/15 px-3 py-1.5 font-sans text-[10px] md:text-xs uppercase tracking-wider text-white/70 hover:border-[#C9A96E] hover:text-white transition-colors">
                Ask about this area
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <section className="relative bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${bgCta})` }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.8)" }} />
        <div className="relative z-10 py-14 md:py-28">
          <div className="container mx-auto px-5 md:px-6 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] text-white">
              Follow Market Updates
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="mx-auto mt-4 md:mt-6 max-w-lg font-sans text-sm italic leading-relaxed text-white/70 px-2">
              Get weekly insights on Dubai's real estate market delivered straight to your inbox.
            </motion.p>
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8 md:mt-10">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email"
                className="flex-1 px-4 md:px-5 py-3 md:py-3.5 rounded-full font-sans text-sm text-white border outline-none transition-colors focus:border-[#C9A96E]"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(201,169,110,0.3)" }} />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} type="submit"
                className="px-6 md:px-8 py-3 md:py-3.5 rounded-full font-sans text-xs md:text-sm font-semibold uppercase tracking-wider md:tracking-widest flex items-center justify-center gap-2 transition-all"
                style={{ backgroundColor: "#C9A96E", color: "#0A0A0A" }}>
                <Send className="h-3.5 w-3.5 md:h-4 md:w-4" /> Follow
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="container mx-auto px-5 md:px-6 py-14 md:py-20">
        <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} viewport={{ once: true }}
          className="mb-2 text-center font-sans text-xs md:text-sm uppercase" style={{ color: "#C9A96E" }}>Knowledge Base</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-xl md:text-4xl font-bold uppercase tracking-wider text-white mb-8 md:mb-12 text-center">
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
              style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left">
                <span className="font-sans text-xs md:text-sm font-medium text-white pr-3 md:pr-4">{faq.q}</span>
                <ChevronDown className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0 transition-transform duration-200"
                  style={{ color: "#C9A96E", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {openFaq === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <p className="font-sans text-xs md:text-sm leading-relaxed text-white/55">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Source */}
      <div className="container mx-auto px-5 md:px-6 pb-8 md:pb-10 text-center">
        <p className="font-sans text-[10px] md:text-xs text-white/30">
          Sources: <a href="https://dubailand.gov.ae" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A96E] transition-colors">Dubai Land Department (DLD)</a> H1 2026 transaction data; Khaleej Times (Sep 2026) for August 2026 prices. Figures change monthly — always check the latest DLD data.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default DubaiInsights;
