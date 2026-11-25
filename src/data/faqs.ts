export const GOLDEN_VISA_THRESHOLD_AED = 2_000_000;
export const DLD_TRANSFER_FEE_PERCENT = 4;

export const propertyFaqs = [
  { q: "Can foreigners buy property in Dubai?", a: "Yes. Foreign nationals can buy freehold property in designated areas of Dubai. Check the property's ownership eligibility and title with Dubai Land Department (DLD) before committing." },
  { q: "How does the property Golden Visa work?", a: `Property investors may be eligible at a qualifying property value of AED ${GOLDEN_VISA_THRESHOLD_AED / 1_000_000}M or more. Approval is not automatic: ownership evidence, mortgage or off-plan conditions and immigration requirements must be checked with DLD and the relevant residency authority.` },
  { q: "What are the costs of buying property?", a: `Allow for the ${DLD_TRANSFER_FEE_PERCENT}% DLD transfer fee, the agreed agency fee (often 2% plus VAT on resale), registration or trustee fees and applicable developer, mortgage or valuation charges. Allocation and amounts depend on the transaction; verify current fees with DLD.` },
  { q: "Off-plan vs ready — which is better?", a: "Off-plan may offer staged payments and a wider choice of new layouts, but involves construction, delivery and resale risks. Ready property can be inspected and may generate rent sooner, though more payment is usually due upfront. The right choice depends on your budget, timing and risk tolerance." },
  { q: "How do payment plans work?", a: "A developer plan normally divides the price into a booking payment, construction instalments and a handover balance; some include post-handover payments. Schedules vary by project. Review the sales agreement, escrow details, late-payment terms and total costs before booking." },
  { q: "Can I buy remotely from India or abroad?", a: "Many purchases can be coordinated remotely using video tours, identity checks, approved documents and, where needed, an attested power of attorney. Banks, developers and registration authorities determine what must be completed in person. Seek independent advice on home-country tax and remittance rules." },
  { q: "What rental yields are typical in Dubai?", a: "For illustration, gross residential yields are often discussed in a broad 4–8% annual range, but vary significantly by area, purchase price and unit. Net returns are lower after service charges, vacancy, maintenance and management costs. Obtain current comparable rents; neither rent nor capital growth is guaranteed." },
  { q: "Do you help with resale and leasing?", a: "Yes. I can help with resale pricing, marketing and viewings, and coordinate leasing support and handover. The scope, fees and responsibilities are agreed before work starts." },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: propertyFaqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};