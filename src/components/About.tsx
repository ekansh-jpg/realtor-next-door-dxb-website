import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ekanshAbout from "@/assets/ekansh-about.jpg";
import whoAmIVideo from "@/assets/who-am-i.mp4.asset.json";



const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            hasPlayedRef.current = true;
            video.muted = true;
            video.play().catch(() => {});
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-14 md:py-28" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-4 md:space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xs md:text-sm uppercase" style={{ color: '#C9A96E' }}
            >
              About Me
            </motion.p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider" style={{ color: '#0A0A0A' }}>
              Who Am I
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[2px]"
              style={{ backgroundColor: "#C9A96E" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm md:text-base leading-relaxed md:text-lg" style={{ color: '#333' }}
            >
              I'm Ekansh Kinger — a successful realtor and investment manager in Dubai.
              My journey spans from e-learning to mastering Dubai's dynamic real estate market, driven
              by determination and smart planning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-sans text-sm md:text-base leading-relaxed md:text-lg" style={{ color: '#333' }}
            >
              I believe in transparent guidance over pushy sales. With deep expertise in business planning,
              negotiation, and strong partnerships with Dubai's top developers like Emaar, DAMAC, Sobha,
              and Nakheel — I ensure you get the best deals in the market.
            </motion.p>
          </motion.div>

          {/* Right: Video (9:16 native aspect) */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mx-auto w-full max-w-[320px] md:max-w-sm"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-2xl border border-black/10 bg-black">
              <video
                ref={videoRef}
                src={whoAmIVideo.url}
                controls
                playsInline
                muted
                preload="metadata"
                poster={ekanshAbout}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
