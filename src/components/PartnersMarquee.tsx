const logos = [
  { src: "https://mohammedzohaib.com/wp-content/uploads/2024/08/EMAAR_WORD_MARK_EN-removebg-preview-1-e1695141770709.png", alt: "Emaar" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2024/08/logo_eaf_011b3f-300x140-1.png", alt: "EAF" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/Damac_logo.svg.png", alt: "Damac" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/BEYOND-LOGO.png", alt: "Beyond" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/Binghatti-logo-dark.webp", alt: "Binghatti" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/sobha.webp", alt: "Sobha" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2025/10/Meraas.png", alt: "Meraas" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2024/08/Nakheel-new-300x211-1.png", alt: "Nakheel" },
  { src: "https://mohammedzohaib.com/wp-content/uploads/2024/08/10.png", alt: "Partner" },
];

const PartnersMarquee = () => {
  return (
    <section className="bg-background py-12 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-8 flex-shrink-0 flex items-center justify-center" style={{ minWidth: 140 }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain opacity-70 brightness-0 invert md:h-16"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
