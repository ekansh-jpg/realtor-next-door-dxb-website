import type { Property } from "@/data/properties";

export const SITE_URL = "https://www.realtornextdoordxb.com";
export const pageMetadata = {
  home: { title: "Ekansh Kinger | Dubai Real Estate Investment Advisor", description: "Research-driven Dubai property advice from Ekansh Kinger, RERA BRN 84711. Explore off-plan, ready and commercial options for your goals." },
  properties: { title: "Dubai Properties for Sale | Ekansh Kinger", description: "Explore Dubai apartments, villas and townhouses. Compare prices, locations and payment plans, and request a tailored shortlist from Ekansh Kinger." },
  transactions: { title: "Dubai Property Transactions | Market Overview", description: "Explore Dubai property transaction trends, off-plan and ready comparisons, and links to official Dubai Land Department market records." },
  insights: { title: "Dubai Property Insights | Ekansh Kinger", description: "Practical Dubai property guides covering off-plan buying, rental yields, Golden Visa eligibility and international investment considerations." },
  services: { title: "Dubai Property Advisory Services | Ekansh Kinger", description: "Property buying, resale, leasing and off-plan guidance for Dubai investors. Remote support for NRI and international buyers, from shortlist to handover." },
  contact: { title: "Contact Ekansh Kinger | Dubai Property Advice", description: "Discuss your Dubai property goals with Ekansh Kinger. Request a consultation or contact him by phone and WhatsApp on +971 54 459 0555." },
  privacy: { title: "Privacy Policy | Ekansh Kinger", description: "Learn how Ekansh Kinger collects and uses enquiry details, how website analytics work, and how to request removal of your information." },
};

export const propertyMetadata = (property: Property) => ({
  title: `${property.name} | Dubai Property`,
  description: `Explore ${property.name} in ${property.location}. From ${property.priceFrom}. Request the latest brochure, availability and payment plan.`,
});