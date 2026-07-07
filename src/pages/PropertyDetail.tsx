import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ExternalLink, Check, MessageCircle, Building2, Calendar, CreditCard, Bed } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPropertyBySlug } from "@/data/properties";

const PropertyDetail = () => {
  const { slug } = useParams();
  const property = slug ? getPropertyBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
        <Navbar />
        <div className="container mx-auto px-6 pt-32 pb-20 text-center">
          <h1 className="font-serif text-3xl text-white mb-4">Property not found</h1>
          <Link to="/properties" className="font-sans text-sm underline" style={{ color: "#C9A96E" }}>
            Back to properties
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(
    `Hi Ekansh, I'm interested in ${property.name} by ${property.developer}. Please share more details.`
  );

  const facts = [
    { icon: Building2, label: "Developer", value: property.developer },
    { icon: MapPin, label: "Location", value: property.location },
    { icon: Bed, label: "Bedrooms", value: property.bedrooms },
    { icon: Calendar, label: "Handover", value: property.handover },
    { icon: CreditCard, label: "Payment Plan", value: property.paymentPlan },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Navbar />

      {/* Hero image */}
      <section className="relative pt-16 md:pt-20">
        <div className="relative h-[55vh] md:h-[75vh] overflow-hidden">
          <motion.img
            key={activeImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src={property.gallery[activeImage]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.2) 40%, rgba(10,10,10,0.95) 100%)" }}
          />
          <div className="absolute top-20 md:top-24 left-5 md:left-8 z-10">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-[11px] md:text-xs uppercase tracking-wider backdrop-blur-md border transition-all hover:bg-white/10"
              style={{ backgroundColor: "rgba(10,10,10,0.5)", borderColor: "rgba(201,169,110,0.4)", color: "#C9A96E" }}
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Properties
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12">
            <div className="container mx-auto px-5 md:px-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-3 py-1 rounded-full font-sans text-[10px] uppercase tracking-wider mb-3 border"
                style={{ borderColor: "rgba(201,169,110,0.4)", color: "#C9A96E", backgroundColor: "rgba(10,10,10,0.5)" }}
              >
                {property.developer} · {property.status}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-wider"
              >
                {property.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-2 font-sans text-sm md:text-lg italic text-white/70 flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" style={{ color: "#C9A96E" }} /> {property.location}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Gallery thumbnails */}
        <div className="container mx-auto px-5 md:px-6 -mt-8 relative z-10">
          <div className="grid grid-cols-4 gap-2 md:gap-3">
            {property.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all"
                style={{ borderColor: activeImage === i ? "#C9A96E" : "rgba(255,255,255,0.1)" }}
              >
                <img src={img} alt={`${property.name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container mx-auto px-5 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left */}
          <div className="lg:col-span-2 space-y-10 md:space-y-14">
            {/* Facts strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4"
            >
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-white/10 p-3 md:p-4"
                  style={{ backgroundColor: "rgba(17,17,17,0.85)" }}
                >
                  <f.icon className="h-4 w-4 mb-2" style={{ color: "#C9A96E" }} />
                  <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-wider text-white/40">{f.label}</p>
                  <p className="font-sans text-xs md:text-sm text-white mt-1">{f.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] mb-3" style={{ color: "#C9A96E" }}>
                Overview
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">{property.tagline}</h2>
              <p className="font-sans text-sm md:text-base leading-relaxed text-white/70">{property.description}</p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] mb-3" style={{ color: "#C9A96E" }}>
                Highlights
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 rounded-lg p-4 border border-white/10" style={{ backgroundColor: "rgba(17,17,17,0.6)" }}>
                    <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }} />
                    <p className="font-sans text-xs md:text-sm text-white/80">{h}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] mb-3" style={{ color: "#C9A96E" }}>
                Amenities
              </p>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((a) => (
                  <span
                    key={a}
                    className="px-4 py-2 rounded-full font-sans text-xs border"
                    style={{ borderColor: "rgba(201,169,110,0.25)", color: "rgba(255,255,255,0.8)", backgroundColor: "rgba(17,17,17,0.6)" }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right sticky card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 h-fit rounded-2xl border border-white/10 p-6 md:p-7"
            style={{ backgroundColor: "rgba(17,17,17,0.95)" }}
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">Starting from</p>
            <p className="font-serif text-3xl md:text-4xl font-bold mt-1" style={{ color: "#C9A96E" }}>
              {property.priceFrom}
            </p>
            <p className="font-sans text-[11px] text-white/50 mt-1">{property.type}</p>

            <div className="my-5 h-px bg-white/10" />

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-xs">
                <span className="text-white/50">Payment Plan</span>
                <span className="text-white/90 text-right">{property.paymentPlan}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/50">Handover</span>
                <span className="text-white/90">{property.handover}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/50">Status</span>
                <span className="text-white/90">{property.status}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/971544590555?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-full px-5 py-3 font-sans text-xs md:text-sm font-semibold uppercase tracking-wider transition-all hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#0A0A0A" }}
            >
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a
              href={property.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full flex items-center justify-center gap-2 rounded-full px-5 py-3 font-sans text-[11px] md:text-xs uppercase tracking-wider border transition-all hover:bg-white/5"
              style={{ borderColor: "rgba(201,169,110,0.35)", color: "#C9A96E" }}
            >
              Developer Site <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
