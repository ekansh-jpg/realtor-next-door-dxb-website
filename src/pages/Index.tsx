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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo title={"No.1 Realtor in Dubai | Ekansh Kinger — Luxury Real Estate Agent"} description={"Work with the No.1 realtor in Dubai. Ekansh Kinger — RERA-certified luxury real estate agent, 200+ homes sold, AED 500M+ transacted with Emaar, Damac, Sobha & Nakheel."} path="/" />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Achievements />
      <WhyMe />
      <Testimonials />
      
      <VideoSection />
      <PartnersMarquee />
      <SocialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
