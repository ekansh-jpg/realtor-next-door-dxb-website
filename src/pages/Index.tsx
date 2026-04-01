import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Achievements from "@/components/Achievements";
import VideoSection from "@/components/VideoSection";
import SocialSection from "@/components/SocialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Achievements />
      <VideoSection />
      <SocialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
