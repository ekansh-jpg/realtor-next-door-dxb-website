import Navbar from "@/components/Navbar";
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
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Achievements />
      <WhyMe />
      <Testimonials />
      <FeaturedOn />
      <VideoSection />
      <PartnersMarquee />
      <SocialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
