const logos = [
  { name: "DAMAC" },
  { name: "EMAAR" },
  { name: "SOBHA" },
  { name: "NAKHEEL" },
  { name: "MERAAS" },
  { name: "BINGHATTI" },
  { name: "AZIZI" },
  { name: "DANUBE" },
];

const PartnersMarquee = () => {
  return (
    <section style={{ backgroundColor: '#0A0A0A' }} className="py-12 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-10 flex-shrink-0 flex items-center justify-center" style={{ minWidth: 140 }}>
              <span className="font-sans text-xl font-bold uppercase tracking-widest text-white/40">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
