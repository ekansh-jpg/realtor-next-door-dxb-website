import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileBottomNav from "@/components/MobileBottomNav";
import PageTransition from "@/components/PageTransition";
import LetsConnectModal from "@/components/LetsConnectModal";
import Index from "./pages/Index.tsx";
const Transactions = lazy(() => import("./pages/Transactions.tsx"));
const DubaiInsights = lazy(() => import("./pages/DubaiInsights.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Properties = lazy(() => import("./pages/Properties.tsx"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const InsightDetail = lazy(() => import("./pages/InsightDetail.tsx"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }} />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/properties" element={<PageTransition><Properties /></PageTransition>} />
        <Route path="/properties/:slug" element={<PageTransition><PropertyDetail /></PageTransition>} />
        <Route path="/transactions" element={<PageTransition><Transactions /></PageTransition>} />
        <Route path="/dubai-insights" element={<PageTransition><DubaiInsights /></PageTransition>} />
        <Route path="/dubai-insights/:slug" element={<PageTransition><InsightDetail /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
        <MobileBottomNav />
        <WhatsAppFloat />
        <LetsConnectModal />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
