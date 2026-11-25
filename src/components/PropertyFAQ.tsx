import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { propertyFaqs } from "@/data/faqs";

const PropertyFAQ = () => (
  <section style={{ backgroundColor: "#0A0A0A" }} className="text-white py-14 md:py-20" aria-labelledby="property-faq-title">
    <div className="container max-w-4xl px-5 md:px-6">
      <p className="mb-3 font-sans text-xs uppercase text-[#C9A96E]">Your questions, answered</p>
      <h2 id="property-faq-title" className="mb-8 font-serif text-2xl font-bold md:text-4xl">Dubai Property FAQs</h2>
      <Accordion type="single" collapsible>
        {propertyFaqs.map(({ q, a }, i) => (
          <AccordionItem key={q} value={`faq-${i}`} className="border-white/10">
            <AccordionTrigger className="min-h-14 text-left font-sans text-sm md:text-base">{q}</AccordionTrigger>
            <AccordionContent className="font-sans text-sm leading-relaxed text-white/60">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="mt-6 text-xs leading-relaxed text-white/60">General guidance only; verify current fees with DLD. Eligibility and regulations can change.</p>
      <div className="mt-3 flex flex-wrap gap-5 text-xs text-[#C9A96E] underline">
        <a href="https://dubailand.gov.ae/en/eservices/property-sale-registration/" target="_blank" rel="noopener noreferrer">DLD purchase registration</a>
        <a href="https://dubailand.gov.ae/en/eservices/request-for-golden-visa-investor/" target="_blank" rel="noopener noreferrer">DLD property investor visa</a>
      </div>
    </div>
  </section>
);
export default PropertyFAQ;