import insight1 from "@/assets/insight-1.webp";
import insight2 from "@/assets/insight-2.webp";
import insight3 from "@/assets/insight-3.webp";
import share1 from "@/assets/optimized/insight-1-share.jpg.asset.json";
import share2 from "@/assets/optimized/insight-2-share.jpg.asset.json";
import share3 from "@/assets/optimized/insight-3-share.jpg.asset.json";

export const insightArticles = [
  {
    slug: "chelsea-residences-investor-guide", title: "Chelsea Residences: A Waterfront Buyer's Checklist", seoTitle: "Chelsea Residences Investor Guide | Dubai", category: "Waterfront", image: insight1, share: share1.url,
    excerpt: "What to check before buying a branded sea-view apartment in Dubai Maritime City.",
    sections: [
      { heading: "Start with the unit, not the branding", text: "Compare the floor plan, usable area, orientation, floor level and view specification in the sales agreement. A branded address does not guarantee a resale premium or rental demand. Ask which amenities and services are included and what they cost." },
      { heading: "Check the payment commitments", text: "The site's indicative starting price is AED 2.5M. Confirm current availability, the exact unit price and instalment schedule directly before reserving. Review escrow information, the anticipated handover date and contractual remedies for delays." },
      { heading: "Budget for ownership", text: "Alongside the purchase price, consider registration, the 4% DLD transfer fee where applicable, agreed agency fees and ongoing service charges. Compare completed rentals in the surrounding area rather than relying on promotional return estimates; verify current fees with DLD." },
    ],
  },
  {
    slug: "damac-islands-2-townhouse-guide", title: "DAMAC Islands 2: Comparing Waterfront Townhouses", seoTitle: "DAMAC Islands 2 Townhouse Guide | Dubai", category: "Off-plan", image: insight2, share: share2.url,
    excerpt: "Compare layouts, construction milestones and payment commitments before selecting a townhouse.",
    sections: [
      { heading: "Compare the whole community", text: "Look beyond the renderings: review access roads, schools, transport, retail and the phasing of shared amenities. For a waterfront townhouse, confirm whether the advertised view and access are specific to the unit you are buying." },
      { heading: "Understand your cash-flow needs", text: "Four-bedroom townhouses are listed on this site from an indicative AED 2.9M. Prices and plans can change. Match every contractual instalment with your available funds, including a contingency for fees and any financing needed at handover." },
      { heading: "Plan for more than one exit", text: "Check assignment restrictions and developer resale requirements. Assess whether holding and leasing would still suit your goals if resale takes longer than expected. Neither resale premiums nor rental income are guaranteed." },
    ],
  },
  {
    slug: "emaar-oasis-villa-buying-guide", title: "The Oasis by Emaar: Planning a Villa Purchase", seoTitle: "The Oasis by Emaar Villa Guide | Dubai", category: "Villas", image: insight3, share: share3.url,
    excerpt: "A practical look at villa selection, plot details and long-term ownership costs.",
    sections: [
      { heading: "Review the plot and layout", text: "Compare built-up area with plot size, orientation, privacy and the position of neighbouring homes. Waterfront access, landscaping and pool specifications should be confirmed against the unit's contractual documents, not assumed from a community image." },
      { heading: "Look at total ownership costs", text: "This site lists villas from an indicative AED 15M. Confirm live pricing and availability. Include registration charges, agreed agency fees, community charges, insurance, utilities and maintenance when assessing the long-term budget." },
      { heading: "Keep your investment horizon realistic", text: "Large villas may have a narrower tenant and buyer pool than smaller apartments. Consider how long you are comfortable holding the property, financing options at handover and the effect of vacancy. Market values can fall as well as rise." },
    ],
  },
  {
    slug: "dubai-property-golden-visa-guide", title: "Dubai Property Golden Visa: Eligibility Essentials", seoTitle: "Dubai Property Golden Visa | AED 2M Guide", category: "Golden Visa", image: insight1, share: share1.url,
    excerpt: "Understand the AED 2M property threshold and why eligibility must be checked before purchasing.",
    sections: [
      { heading: "The AED 2M threshold", text: "DLD's property investor service identifies a qualifying purchase value of AED 2 million or more. Reaching the threshold alone does not ensure approval: title, identity and residency evidence must meet the authority's current requirements." },
      { heading: "Mortgage and off-plan questions", text: "Mortgage and payment-plan conditions require individual verification. DLD currently refers to supporting bank evidence for mortgaged property. Do not assume that a booking deposit or any off-plan contract automatically qualifies; obtain an eligibility assessment first." },
      { heading: "Check before you commit", text: "Visa fees, supporting documents and processing rules can change. Consult DLD and the relevant residency authority. Choose the property on its merits and affordability, not solely on a hoped-for visa outcome." },
    ],
  },
  {
    slug: "dubai-rental-yields-gross-vs-net", title: "Dubai Rental Yields: Gross vs Net Returns", seoTitle: "Dubai Rental Yields | Gross vs Net Guide", category: "Rental income", image: insight2, share: share2.url,
    excerpt: "Learn to compare rental estimates after service charges, vacancy and maintenance.",
    sections: [
      { heading: "Calculate gross yield", text: "Gross yield is annual rent divided by purchase price, multiplied by 100. For example, AED 100,000 of annual rent on an AED 2,000,000 property gives a 5% gross yield before costs. This is an illustration, not a forecast." },
      { heading: "Deduct realistic expenses", text: "Net yield should account for service charges, repairs, insurance, management and periods without a tenant. Financing and acquisition costs affect your cash flow too. Use achieved comparable rents and realistic occupancy rather than the highest asking rent." },
      { heading: "Treat ranges as a starting point", text: "Broad gross residential ranges of around 4–8% are often discussed, but actual results vary considerably by location and unit. Higher projected yield can involve more risk. Rental returns and property values are not guaranteed." },
    ],
  },
  {
    slug: "dubai-branded-residences-guide", title: "Branded Residences: What Are You Paying For?", seoTitle: "Dubai Branded Residences | Buyer Guide", category: "Branded living", image: insight3, share: share3.url,
    excerpt: "Evaluate service standards, fees and comparable properties rather than assuming a brand premium.",
    sections: [
      { heading: "Separate branding from the property", text: "Check the scope and duration of the branding agreement, what services residents receive and whether those services carry separate fees. Compare location, layout, build quality and management with unbranded alternatives." },
      { heading: "Review ongoing charges", text: "Hospitality-style services can increase ongoing costs. Ask for current or estimated service charges, use restrictions, letting rules and management arrangements. Review the written documents with a qualified adviser where needed." },
      { heading: "Compare evidence, not promises", text: "A recognised brand does not assure higher resale value or rent. Compare actual transactions and achievable rents for similar properties and allow for vacancy. Make the decision around your budget and goals, not an assumed premium." },
    ],
  },
].map(article => ({ ...article, date: "2026-11-25", dateLabel: "25 November 2026" }));