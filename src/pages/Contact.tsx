import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, Send, MapPin, Clock, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgContact from "@/assets/bg-contact.jpg";

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
      <div className="relative pt-24 pb-20" style={{ minHeight: "35vh" }}>
        <div className="absolute inset-0">
          <img src={bgContact} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.85), rgba(10,10,10,0.98))" }} />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "25vh" }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A96E" }}>Get In Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">Let's Find Your Perfect Property</motion.h1>
        </div>
      </div>

      {/* Response badge */}
      <div className="container mx-auto px-6 pb-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-3 rounded-xl border p-4 max-w-md mx-auto"
          style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.15)" }}>
          <Clock className="h-5 w-5" style={{ color: "#C9A96E" }} />
          <p className="font-sans text-sm text-white">Average Response Time: <span style={{ color: "#C9A96E" }} className="font-semibold">Within 2 Hours</span></p>
        </motion.div>
      </div>

      {/* Form + Contact Info */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border p-12 text-center" style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.2)" }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.15)" }}>
                  <Send className="h-7 w-7" style={{ color: "#C9A96E" }} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>I'll get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border p-8" style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.15)" }}>
                <h2 className="font-serif text-2xl font-bold text-white mb-6">Get Expert Guidance</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {[
                    { key: "name", label: "Full Name", type: "text", required: true },
                    { key: "email", label: "Email", type: "email", required: true },
                    { key: "phone", label: "Phone Number", type: "tel", required: true },
                    { key: "budget", label: "Budget Range", type: "text", required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block font-sans text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>{field.label}</label>
                      <input type={field.type} required={field.required} value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg font-sans text-sm text-white border outline-none transition-colors focus:border-[#C9A96E]"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(201,169,110,0.15)" }} />
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block font-sans text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Property Interest</label>
                  <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg font-sans text-sm text-white border outline-none transition-colors focus:border-[#C9A96E]"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(201,169,110,0.15)" }}>
                    <option value="" style={{ backgroundColor: "#111111" }}>Select interest</option>
                    <option value="Buying" style={{ backgroundColor: "#111111" }}>Buying</option>
                    <option value="Investment" style={{ backgroundColor: "#111111" }}>Investment</option>
                    <option value="Off-Plan" style={{ backgroundColor: "#111111" }}>Off-Plan</option>
                    <option value="Rental" style={{ backgroundColor: "#111111" }}>Rental</option>
                    <option value="Golden Visa" style={{ backgroundColor: "#111111" }}>Golden Visa</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block font-sans text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Message</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg font-sans text-sm text-white border outline-none transition-colors focus:border-[#C9A96E] resize-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(201,169,110,0.15)" }} />
                </div>
                <button type="submit" className="w-full py-4 rounded-lg font-sans text-sm font-semibold tracking-wider uppercase transition-all hover:opacity-90"
                  style={{ backgroundColor: "#C9A96E", color: "#0A0A0A" }}>Get Expert Guidance</button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-2 space-y-6">
            {[
              { label: "Call Me", value: "+971 54 459 0555", href: "tel:+971544590555", iconEl: <Phone className="h-5 w-5" style={{ color: "#C9A96E" }} /> },
              { label: "WhatsApp", value: "+971 54 459 0555", href: "https://wa.me/971544590555", iconEl: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-6 w-6" /> },
              { label: "Instagram", value: "@realtor_nextdoordxb", href: "https://www.instagram.com/realtor_nextdoordxb", iconEl: <Instagram className="h-5 w-5" style={{ color: "#C9A96E" }} /> },
              { label: "Location", value: "Dubai, United Arab Emirates", href: "#", iconEl: <MapPin className="h-5 w-5" style={{ color: "#C9A96E" }} /> },
            ].map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="flex items-center gap-5 rounded-xl border p-6 transition-all hover:border-[#C9A96E]/40"
                style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.1)" }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>{item.iconEl}</div>
                <div>
                  <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{item.label}</p>
                  <p className="font-sans text-sm font-medium text-white">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68279754726!2d54.89784188519746!3d25.076280448202302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1696000000000"
                width="100%" height="200" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Dubai Location" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-6 pb-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
          Common <span style={{ color: "#C9A96E" }}>Questions</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-xl border overflow-hidden"
              style={{ backgroundColor: "#111111", borderColor: "rgba(201,169,110,0.1)" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
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

      <Footer />
    </div>
  );
};

export default Contact;
