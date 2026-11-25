import { Instagram, Play } from "lucide-react";
import { pushEvent } from "@/lib/tracking";

interface Props {
  url: string;
  title: string;
  /** Cover image for the reel card */
  image?: string;
  eager?: boolean;
}

/**
 * Static reel card: a cover image with a play icon that opens the reel on Instagram.
 * Avoids Instagram iframe embeds, which often fail to load and slow the page down.
 */
const InstagramEmbed = ({ url, title, image, eager }: Props) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Watch "${title}" on Instagram`}
    onClick={() => pushEvent("instagram_reel_click", { reel_title: title })}
    className="group relative block aspect-[9/12] overflow-hidden rounded-xl bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A96E]"
  >
    {image ? (
      <img
        src={image}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width={720}
        height={960}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-white">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/50 backdrop-blur-sm transition-transform group-hover:scale-110">
        <Play className="h-7 w-7 fill-white text-white" />
      </span>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
      <p className="font-serif text-base leading-snug">{title}</p>
      <p className="mt-1 flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-white/80">
        <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} /> Watch on Instagram
      </p>
    </div>
  </a>
);

export default InstagramEmbed;
