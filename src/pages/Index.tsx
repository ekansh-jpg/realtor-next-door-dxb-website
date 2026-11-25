import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Achievements from "@/components/Achievements";
import WhyMe from "@/components/WhyMe";
import Testimonials from "@/components/Testimonials";

import VideoSection from "@/components/VideoSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import SocialSection from "@/components/SocialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InlineLeadSection from "@/components/leads/InlineLeadSection";
import LeadMagnet from "@/components/leads/LeadMagnet";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Seo
        title={"Ekansh Kinger | Dubai Real Estate Investment Advisor"}
        description={"Dubai real estate investment made simple. Ekansh Kinger — Senior Property Consultant at D&B Properties (RERA BRN 84711). 200+ homes sold, AED 500M+ transacted with Emaar, Damac, Sobha & Nakheel."}
        path="/"
        keywords={"realtor in Dubai, Dubai real estate investment, best real estate agent Dubai, invest in Dubai property, Dubai property investment 2026, off-plan investment Dubai, top realtors Dubai, luxury real estate Dubai, Emaar Damac Sobha Nakheel agent, Dubai rental yields, freehold property Dubai, NRI investment Dubai"}
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Ekansh Kinger — Realtor Next Door DXB",
          description:
            "Dubai real estate investment advisory and brokerage: off-plan launches, luxury villas, waterfront apartments and portfolio strategy.",
          serviceType: ["Real Estate Investment Advisory", "Property Brokerage", "Off-plan Investment"],
          areaServed: { "@type": "City", name: "Dubai" },
          url: "https://realtornextdoordxb.com/",
          telephone: "+971544590555",
          priceRange: "AED 600,000 - AED 100,000,000",
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Achievements />
      <WhyMe />
      <Testimonials />
      
      <VideoSection />
      <PartnersMarquee />
      <LeadMagnet />
      <InlineLeadSection formName="homepage" />
      <SocialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
