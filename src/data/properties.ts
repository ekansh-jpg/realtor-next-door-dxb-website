export type Property = {
  slug: string;
  name: string;
  developer: "Emaar" | "DAMAC" | "Nakheel" | "Sobha" | "Meraas" | "Aldar";
  location: string;
  priceFrom: string;
  handover: string;
  status: "Off-Plan" | "Ready" | "Launching Soon";
  bedrooms: string;
  type: string;
  paymentPlan: string;
  cover: string;
  gallery: string[];
  tagline: string;
  description: string;
  highlights: string[];
  amenities: string[];
  officialUrl: string;
};

// Photos sourced from Unsplash (free-to-use, real photography of Dubai / luxury projects).
// Official developer pages linked below each project.
export const properties: Property[] = [
  {
    slug: "emaar-creek-waters",
    name: "Creek Waters",
    developer: "Emaar",
    location: "Dubai Creek Harbour",
    priceFrom: "AED 1.9M",
    handover: "Q4 2027",
    status: "Off-Plan",
    bedrooms: "1 – 4 BR",
    type: "Waterfront Apartments",
    paymentPlan: "80/20 · During Construction",
    cover: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    ],
    tagline: "Waterfront living beside the future Dubai Creek Tower",
    description:
      "A signature Emaar development set directly on Dubai Creek, Creek Waters offers panoramic views of the marina, the Ras Al Khor sanctuary and Downtown Dubai. Interiors are finished to Emaar's premium waterfront standard with floor-to-ceiling glass, gourmet kitchens and generous private terraces.",
    highlights: [
      "Direct waterfront with private marina access",
      "5-minute drive to Downtown Dubai and Ras Al Khor",
      "Premium finishes by Emaar's flagship design team",
      "Attractive 80/20 payment plan during construction",
    ],
    amenities: [
      "Infinity edge pool overlooking the creek",
      "State-of-the-art fitness centre & yoga deck",
      "Private beach access and boardwalk",
      "Retail promenade, cafés and fine dining",
      "24/7 concierge and smart-home integration",
    ],
    officialUrl: "https://www.emaar.com/en/",
  },
  {
    slug: "damac-lagoons",
    name: "DAMAC Lagoons",
    developer: "DAMAC",
    location: "Dubailand",
    priceFrom: "AED 2.3M",
    handover: "Ready & Off-Plan Phases",
    status: "Off-Plan",
    bedrooms: "4 – 7 BR",
    type: "Mediterranean Villas & Townhouses",
    paymentPlan: "70/30 · Post-Handover Available",
    cover: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fe6ba68?w=1600&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80",
    ],
    tagline: "Mediterranean-inspired villa community with crystal lagoons",
    description:
      "DAMAC Lagoons is a master-planned waterfront community themed around eight Mediterranean destinations — from Santorini to Portofino. Turquoise lagoons, white-sand beaches and lush gardens surround premium villas and townhouses designed for family living.",
    highlights: [
      "Eight themed clusters across 45M sqft of master community",
      "Crystal-clear swimmable lagoons and sandy beaches",
      "Wave pools, floating cinemas and water sports",
      "Attractive post-handover payment plans",
    ],
    amenities: [
      "Swimmable crystal lagoons",
      "Floating amphitheatre and outdoor cinema",
      "Retail island with F&B and boutique shops",
      "Sports courts, jogging & cycling tracks",
      "Community clubhouses and kids play zones",
    ],
    officialUrl: "https://www.damacproperties.com/en/property/damac-lagoons",
  },
  {
    slug: "emaar-address-residences-dubai-hills",
    name: "Address Residences Dubai Hills",
    developer: "Emaar",
    location: "Dubai Hills Estate",
    priceFrom: "AED 2.6M",
    handover: "Q2 2027",
    status: "Off-Plan",
    bedrooms: "1 – 3 BR",
    type: "Branded Serviced Apartments",
    paymentPlan: "80/20 During Construction",
    cover: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
    ],
    tagline: "Branded 5-star living inside Dubai's greenest community",
    description:
      "Set inside Dubai Hills Estate, Address Residences delivers the signature 5-star hospitality of Address Hotels + Resorts as a permanent residence. Fully-serviced apartments overlook the Championship 18-hole golf course, Dubai Hills Park and the Downtown skyline.",
    highlights: [
      "Managed by Address Hotels + Resorts",
      "Overlooking the 18-hole Dubai Hills Golf Course",
      "Walking distance to Dubai Hills Mall",
      "Full hotel amenities and residents-only facilities",
    ],
    amenities: [
      "Signature Address infinity pool",
      "Full-service spa and fitness club",
      "In-residence dining and concierge",
      "Direct park and golf course access",
      "Dedicated valet and 24/7 security",
    ],
    officialUrl: "https://www.emaar.com/en/",
  },
  {
    slug: "damac-safa-two",
    name: "Safa Two",
    developer: "DAMAC",
    location: "Al Safa · Sheikh Zayed Road",
    priceFrom: "AED 1.5M",
    handover: "Q4 2027",
    status: "Off-Plan",
    bedrooms: "Studio – 3 BR",
    type: "Ultra-Luxury Tower",
    paymentPlan: "20% DP · 60% During · 20% Handover",
    cover: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753051-6057f2b6f2c9?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1600&q=80",
    ],
    tagline: "De GRISOGONO-inspired super-tall on Sheikh Zayed Road",
    description:
      "Safa Two rises as one of Dubai's most striking new super-tall towers, developed by DAMAC in collaboration with de GRISOGONO. Interiors, amenities and finishes borrow the boldness of high jewellery — dark textures, deep greens and gold accents throughout.",
    highlights: [
      "Landmark super-tall on Sheikh Zayed Road",
      "Interiors inspired by de GRISOGONO",
      "5 minutes to Downtown Dubai and DIFC",
      "Panoramic Burj Khalifa, sea and Safa Park views",
    ],
    amenities: [
      "Sky-high infinity pool with Burj views",
      "Artificial rainforest lobby",
      "Ice bath and floating spa",
      "Fitness centre with sky garden",
      "Gourmet dining outlets on premium floors",
    ],
    officialUrl: "https://www.damacproperties.com/en/property/safa-two-de-grisogono",
  },
  {
    slug: "sobha-hartland-ii",
    name: "Sobha Hartland II",
    developer: "Sobha",
    location: "MBR City",
    priceFrom: "AED 1.7M",
    handover: "Q4 2026",
    status: "Off-Plan",
    bedrooms: "1 – 6 BR",
    type: "Waterfront Apartments & Villas",
    paymentPlan: "60/40 · Post-Handover",
    cover: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753104-5cd6c68f2e3b?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1600&q=80",
    ],
    tagline: "Waterfront master community with signature Sobha quality",
    description:
      "Sobha Hartland II is a fully-integrated waterfront master community in MBR City, featuring crystal lagoons, ultra-green landscaping and Sobha's globally-recognized backward-integrated build quality. Homes range from starter 1-BR apartments to signature waterfront villas.",
    highlights: [
      "Direct access to Ras Al Khor and Downtown",
      "Crystal blue lagoons and beach edges",
      "Backward-integrated Sobha build quality",
      "Extensive green cover and parks",
    ],
    amenities: [
      "Crystal lagoons and sandy beaches",
      "Boardwalks, cycling and jogging tracks",
      "International schools within community",
      "Retail, F&B and lifestyle plaza",
      "Wellness centres and clubhouses",
    ],
    officialUrl: "https://www.sobharealty.com/",
  },
  {
    slug: "nakheel-palm-jebel-ali",
    name: "Palm Jebel Ali",
    developer: "Nakheel",
    location: "Palm Jebel Ali",
    priceFrom: "AED 18M",
    handover: "Q4 2027 onwards",
    status: "Launching Soon",
    bedrooms: "5 – 7 BR",
    type: "Beachfront Signature Villas",
    paymentPlan: "80/20 · During Construction",
    cover: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    ],
    tagline: "Twice the size of Palm Jumeirah — Dubai's next iconic address",
    description:
      "Nakheel's revival of Palm Jebel Ali is one of the largest real estate launches in Dubai's history — a fully master-planned island community with 110km of coastline, luxury beachfront villas and world-class hospitality. Signature 5, 6 and 7 bedroom villas offer unmatched sea views.",
    highlights: [
      "Twice the size of Palm Jumeirah",
      "110km of coastline and 80+ hotels & resorts",
      "Signature architect-designed beachfront villas",
      "Direct beach access and private pools",
    ],
    amenities: [
      "Private beachfront and boat moorings",
      "Signature clubs and beach lounges",
      "Fine dining and 5-star hospitality",
      "Marinas and water sports centres",
      "Nature reserves and coastal parks",
    ],
    officialUrl: "https://www.nakheel.com/en/communities/palm-jebel-ali",
  },
];

export const getPropertyBySlug = (slug: string) =>
  properties.find((p) => p.slug === slug);
