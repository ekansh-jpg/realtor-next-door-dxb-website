import { useState } from "react";
import { Instagram, Play } from "lucide-react";

interface Props {
  url: string;
  title: string;
  eager?: boolean;
}

const InstagramEmbed = ({ url, title, eager }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="aspect-[9/12] relative overflow-hidden bg-black">
      {/* Immediate branded poster + skeleton (visible until iframe reports load) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        aria-hidden={loaded}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          }}
        />
        <div className="absolute inset-0 bg-black/25" />
        {/* Subtle shimmer */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
            animation: "ig-shimmer 1.6s linear infinite",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white text-center px-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/40">
            <Play className="h-6 w-6 fill-white text-white" />
          </div>
          <Instagram className="h-5 w-5" strokeWidth={1.5} />
          <p className="font-serif text-sm leading-snug">{title}</p>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/90">
            Loading reel…
          </p>
        </div>
        <style>{`@keyframes ig-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
      </div>

      <iframe
        src={`${url}embed/captioned/`}
        className={`h-full w-full border-0 relative transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading={eager ? "eager" : "lazy"}
        scrolling="no"
        allow="encrypted-media; autoplay; clipboard-write; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default InstagramEmbed;
