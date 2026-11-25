import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/data/faqs";
import HowIWork from "@/components/HowIWork";
import PropertyFAQ from "@/components/PropertyFAQ";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Achievements from "@/components/Achievements";
import WhyMe from "@/components/WhyMe";

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
        title={pageMetadata.home.title}
        description={pageMetadata.home.description}
        path="/"
        schema={faqSchema}
      />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Achievements />
      <WhyMe />
      <HowIWork />
      
      <VideoSection />
      <PartnersMarquee />
      <LeadMagnet />
      <InlineLeadSection formName="homepage" />
      <PropertyFAQ />
      <SocialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
