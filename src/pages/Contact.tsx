import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, Send, MapPin, Clock, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgContact from "@/assets/bg-contact.webp";
import bgServices from "@/assets/bg-services.webp";

const faqs = [
  { q: "What documents do I need to buy property in Dubai?", a: "You'll need a valid passport, proof of address, and bank statements. For mortgage buyers, salary certificates and bank pre-approval letters are also required." },
  { q: "How long does the buying process take?", a: "For ready properties, the process typically takes 2-4 weeks from offer acceptance to key handover. Off-plan purchases can be completed in a few days." },
  { q: "Are there any hidden costs when buying in Dubai?", a: "The main costs are: 4% DLD transfer fee, 2% agency commission, AED 4,000-5,000 admin fees, and mortgage registration fee if applicable." },
  { q: "Can I buy property remotely from outside the UAE?", a: "Yes! We handle remote purchases regularly with Power of Attorney arrangements. Virtual viewings and digital documentation make the process seamless." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", budget: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi Ekansh, I'm ${form.name}. ${form.message} | Budget: ${form.budget} | Interest: ${form.interest}`);
    window.open(`https://wa.me/971544590555?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center md:bg-fixed pt-20 md:pt-24 pb-14 md:pb-20"
        style={{ backgroundImage: `url(${bgContact})`, minHeight: "30vh" }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.82)" }} />
        <div className="relative z-10 container mx-auto px-5 md:px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "20vh" }}>
          <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }} transition={{ duration: 0.8 }}
            className="font-sans text-[10px] md:text-xs uppercase mb-3 md:mb-4" style={{ color: "#C9A96E" }}>Get In Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-3 md:mb-4">
            Let's Find Your Perfect Property
          </motion.h1>
        </div>
      </section>

      {/* Response badge */}
      <div className="container mx-auto px-5 md:px-6 py-8 md:py-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 md:gap-3 rounded-full border border-white/10 px-5 md:px-8 py-3 md:py-4 max-w-md mx-auto backdrop-blur-sm"
          style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
          <Clock className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" style={{ color: "#C9A96E" }} />
          <p className="font-sans text-xs md:text-sm text-white">Average Response: <span style={{ color: "#C9A96E" }} className="font-semibold">Within 2 Hours</span></p>
        </motion.div>
      </div>

      {/* Form + Contact Info */}
      <div className="container mx-auto px-5 md:px-6 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border border-white/10 p-8 md:p-12 text-center backdrop-blur-sm" style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.15)" }}>
                  <Send className="h-6 w-6 md:h-7 md:w-7" style={{ color: "#C9A96E" }} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wider text-white mb-2">Message Sent!</h3>
                <p className="font-sans text-xs md:text-sm italic text-white/50">I'll get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 p-5 md:p-8 backdrop-blur-sm" style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
                <h2 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wider text-white mb-6 md:mb-8">Get Expert Guidance</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  {[
                    { key: "name", label: "Full Name", type: "text", required: true },
                    { key: "email", label: "Email", type: "email", required: true },
                    { key: "phone", label: "Phone Number", type: "tel", required: true },
                    { key: "budget", label: "Budget Range", type: "text", required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block font-sans text-[10px] md:text-xs uppercase tracking-wider mb-1.5 md:mb-2 text-white/40">{field.label}</label>
                      <input type={field.type} required={field.required} value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg font-sans text-sm text-white border border-white/10 outline-none transition-colors focus:border-[#C9A96E] bg-white/5" />
                    </div>
                  ))}
                </div>
                <div className="mb-3 md:mb-4">
                  <label className="block font-sans text-[10px] md:text-xs uppercase tracking-wider mb-1.5 md:mb-2 text-white/40">Property Interest</label>
                  <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg font-sans text-sm text-white border border-white/10 outline-none transition-colors focus:border-[#C9A96E] bg-white/5">
                    <option value="" style={{ backgroundColor: "#111111" }}>Select interest</option>
                    <option value="Buying" style={{ backgroundColor: "#111111" }}>Buying</option>
                    <option value="Investment" style={{ backgroundColor: "#111111" }}>Investment</option>
                    <option value="Off-Plan" style={{ backgroundColor: "#111111" }}>Off-Plan</option>
                    <option value="Rental" style={{ backgroundColor: "#111111" }}>Rental</option>
                    <option value="Golden Visa" style={{ backgroundColor: "#111111" }}>Golden Visa</option>
                  </select>
                </div>
                <div className="mb-4 md:mb-6">
                  <label className="block font-sans text-[10px] md:text-xs uppercase tracking-wider mb-1.5 md:mb-2 text-white/40">Message</label>
                  <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg font-sans text-sm text-white border border-white/10 outline-none transition-colors focus:border-[#C9A96E] resize-none bg-white/5" />
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
                  className="w-full py-3 md:py-4 rounded-full font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-white transition-all"
                  style={{ backgroundColor: "#C9A96E" }}>
                  Get Expert Guidance
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-2 space-y-3 md:space-y-4">
            {[
              { label: "Call Me", value: "+971 54 459 0555", href: "tel:+971544590555", iconEl: <Phone className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#C9A96E" }} /> },
              { label: "WhatsApp", value: "+971 54 459 0555", href: "https://wa.me/971544590555", iconEl: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-5 w-5 md:h-6 md:w-6" /> },
              { label: "Instagram", value: "@realtor_nextdoordxb", href: "https://www.instagram.com/realtor_nextdoordxb", iconEl: <Instagram className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#C9A96E" }} /> },
              { label: "Location", value: "Dubai, UAE", href: "#", iconEl: <MapPin className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#C9A96E" }} /> },
            ].map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-5 rounded-xl border border-white/10 p-4 md:p-6 transition-all hover:border-white/25 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(17,17,17,0.85)" }}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>{item.iconEl}</div>
                <div>
                  <p className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-white/40">{item.label}</p>
                  <p className="font-sans text-xs md:text-sm font-medium text-white">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68279754726!2d54.89784188519746!3d25.076280448202302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1696000000000"
                width="100%" height="150" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Dubai Location" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <section className="relative bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${bgServices})` }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.88)" }} />
        <div className="relative z-10 py-14 md:py-28">
          <div className="container mx-auto px-5 md:px-6">
            <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} viewport={{ once: true }}
              className="mb-2 text-center font-sans text-xs md:text-sm uppercase" style={{ color: "#C9A96E" }}>Knowledge Base</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] text-white mb-8 md:mb-12 text-center">
              Common Questions
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors backdrop-blur-sm"
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
