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
    slug: "damac-chelsea-residences",
    name: "Chelsea Residences by DAMAC",
    developer: "DAMAC",
    location: "Dubai Maritime City",
    priceFrom: "AED 2.5M",
    handover: "Q4 2029",
    status: "Off-Plan",
    bedrooms: "1 – 3 BR",
    type: "Full Sea View Apartments",
    paymentPlan: "20% DP · 55% During · 25% Handover",
    cover: "https://images.ctfassets.net/zoq5l15g49wj/3ACFCoKPvL8GqiFqFx2OpS/d552a0e2d40ed28eb708aef5c36a5add/Chelsea_Residences-Homepage_Hero_16x9.jpg?fm=webp&w=1600&q=80",
    gallery: [
      "https://images.ctfassets.net/zoq5l15g49wj/3ACFCoKPvL8GqiFqFx2OpS/d552a0e2d40ed28eb708aef5c36a5add/Chelsea_Residences-Homepage_Hero_16x9.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/1ekJe0zSQqUN4LwZB8Y7Ux/9ca4fca5b30bd47a406d380fbc7ee6cb/Chelsea_Residences-Gallery-00.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/1moLdrptanHF6pSznZ8Tqd/4a8b0acb4ab2d39da56bc164acc584c7/Chelsea_Residences-Gallery-18.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/1cS2623SFR5yOZGtBqKZKo/ead60b6ae6d039aa9fd966aac6cc9500/Chelsea_Residences-4-Amenities-ATHLETE_PERFORMANCE_TRAINING_CENTRE.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/1QNgBYRv6nVs0j0t80POTD/11b4a83130205b158325e88d1bc9fc25/Chelsea_Residences-2-Amenities-STAMFORD_SUMMIT.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/2VVUL7LI0uOVZ8JShHwdUe/54a1014b0d24c9ae2c54cc3528b150e9/Chelsea_Residences-9-Amenities-RAIN_THERAPY.jpg?fm=webp&w=1600&q=80",
    ],
    tagline: "The world's first Chelsea FC-branded residences — Dubai Maritime City",
    description:
      "In a landmark partnership with Chelsea Football Club, DAMAC presents Dubai's first football-branded residences. Located in the heart of Dubai Maritime City, this iconic project features over 1,400 residences with unobstructed sea views, world-class athlete-grade amenities, and interiors curated in the spirit of Chelsea FC's legacy.",
    highlights: [
      "World's first Chelsea FC-branded residences",
      "Unobstructed full sea-view apartments",
      "Athlete Performance & Training Centre",
      "Direct waterfront access, 10 min to DIFC",
    ],
    amenities: [
      "Stamford Summit sky pool & lounge",
      "Athlete Performance Training Centre",
      "Rain therapy & wellness spa",
      "Kids' academy and play zones",
      "24/7 concierge and valet",
    ],
    officialUrl: "https://www.damacproperties.com/en/projects/chelsea-residences/",
  },
  {
    slug: "damac-islands-2",
    name: "DAMAC Islands 2",
    developer: "DAMAC",
    location: "Dubailand",
    priceFrom: "AED 2.9M",
    handover: "Q4 2030",
    status: "Off-Plan",
    bedrooms: "4 BR",
    type: "Waterfront Townhouses",
    paymentPlan: "75/25 · During Construction",
    cover: "https://images.ctfassets.net/zoq5l15g49wj/1KXVhOmVHWSejUzPkjBjad/903799e7d3c72fbc8f8195e012e285df/DAMAC_Islands_2-Gallery-07.jpg?fm=webp&w=1600&q=80",
    gallery: [
      "https://images.ctfassets.net/zoq5l15g49wj/1KXVhOmVHWSejUzPkjBjad/903799e7d3c72fbc8f8195e012e285df/DAMAC_Islands_2-Gallery-07.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/1J85NFb97z7fNzQyBZc4J9/44b6cd1f6c9c565bc1751637f6fc9f1a/DAMAC_Islands_2-Gallery-01.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/1JxXJTSQ69L72Mn8VUOvMz/c9297a24d62694083b9930fcef2c12ca/DAMAC_Islands_2-Gallery-16.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/2BzcEatHFYiPoOac8l530o/82c53e35b2792082883d20e6af25883d/DAMAC_Islands_2-Gallery-14.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/1qoDtQpoXecJOeboXnA7KV/4e799229da48e1be11d039ea073638f7/DAMAC_Islands_2-Amenities-02-WHISPERING_WATERFALL.jpg?fm=webp&w=1600&q=80",
      "https://images.ctfassets.net/zoq5l15g49wj/35ikIRha2F2WfYMDQn992Y/16d06be089f5599aa695f883b8bee621/DAMAC_Islands_2-Amenities-04-ISLAND_VIDA_WELLNESS.jpg?fm=webp&w=1600&q=80",
    ],
    tagline: "Tropical island-inspired 4-BR waterfront townhouses in Dubailand",
    description:
      "The second phase of DAMAC Islands brings tropical island living to Dubailand — a master community themed after eight iconic destinations (Bahamas, Tahiti, Bermuda, Barbados, Cuba, Maui, Mauritius, Antigua). Signature 4-bedroom waterfront townhouses front crystal lagoons, sandy beaches, and lush landscaping.",
    highlights: [
      "Eight-island themed master community",
      "Direct waterfront on crystal lagoons",
      "Spacious 4-BR townhouse layouts (~2,300 sqft)",
      "Attractive 75/25 payment plan",
    ],
    amenities: [
      "Whispering waterfalls and lagoon beaches",
      "Island Vida wellness resort",
      "Eco lodge hospitality & spa",
      "Garden of Insight & jungle river ride",
      "Retail promenade and F&B outlets",
    ],
    officialUrl: "https://www.damacproperties.com/en/communities/damac-islands-2-community/projects/damac-islands-2/",
  },
  {
    slug: "emaar-the-oasis-villas",
    name: "The Oasis by Emaar",
    developer: "Emaar",
    location: "Dubailand · Al Qudra",
    priceFrom: "AED 15M",
    handover: "Q2 2029",
    status: "Off-Plan",
    bedrooms: "4 – 7 BR",
    type: "Ultra-Luxury Villas & Mansions",
    paymentPlan: "80/20 · During Construction",
    cover: "https://uae-cms.emaar.com/uploads/365091_hero_Image_7a7ee697ee.jpg",
    gallery: [
      "https://uae-cms.emaar.com/uploads/365091_hero_Image_7a7ee697ee.jpg",
      "https://uae-cms.emaar.com/uploads/371381_property_Main_Image_cb1133dad0.jpg",
      "https://uae-cms.emaar.com/uploads/382869_property_Main_Image_753e4972ad.jpg",
      "https://uae-cms.emaar.com/uploads/383841_property_Main_Image_0efa9335c6.jpg",
      "https://uae-cms.emaar.com/uploads/390394_property_Main_Image_2f294f9d91.jpg",
      "https://uae-cms.emaar.com/uploads/391268_property_Main_Image_85c4fae2fc.jpg",
    ],
    tagline: "Emaar's most exclusive villa master community — water, greens and mansions",
    description:
      "The Oasis by Emaar is a 100M sqft ultra-luxury master community centred around designer water canals, lakes, and lush parks. Signature mansions and villas by world-renowned architects offer generous plots, private pools, and direct waterfront frontage — Emaar's most exclusive launch to date.",
    highlights: [
      "100M sqft ultra-luxury master community",
      "Designer water canals, lakes and beaches",
      "Signature mansions from top global architects",
      "25% of community dedicated to water, parks and open spaces",
    ],
    amenities: [
      "Private beaches and swimmable lagoons",
      "Signature clubhouse and wellness resort",
      "Golf course and sports facilities",
      "International schools within community",
      "Fine-dining promenade and boutique retail",
    ],
    officialUrl: "https://www.emaar.com/en/our-communities/the-oasis",
  },
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
