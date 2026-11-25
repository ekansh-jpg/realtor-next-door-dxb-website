import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { pageMetadata } from "@/lib/seo";

const Privacy = () => (
  <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
    <Seo title={pageMetadata.privacy.title} description={pageMetadata.privacy.description} path="/privacy" />
    <Navbar />
    <main className="container mx-auto px-5 md:px-6 pt-32 pb-20 max-w-3xl">
      <h1 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">Privacy Policy</h1>
      <div className="h-[2px] w-12 my-5" style={{ backgroundColor: "#C9A96E" }} />
      <div className="space-y-4 font-sans text-sm md:text-base text-white/70 leading-relaxed">
        <p>When you submit a form on this website, Ekansh Kinger, Real Estate Investment Advisor (RERA BRN 84711), receives the details you enter: your name, WhatsApp number, email and any preferences you choose to share, such as budget, interest, timeline and country of residence.</p>
        <p>These details are used only to contact you about Dubai properties that match your enquiry, by phone, WhatsApp or email.</p>
        <p>To stop being contacted or to ask for your details to be removed, message <a href="https://wa.me/971544590555" className="underline" style={{ color: "#C9A96E" }}>+971 54 459 0555</a> on WhatsApp.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
