import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Play } from "lucide-react";

const VideoCard = ({ video, poster }: { video: string; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={video}
      poster={poster || undefined}
      muted
      loop
      playsInline
      preload="metadata"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full object-cover cursor-pointer"
    />
  );
};

const colors = [
  {
    name: "Cactus Green",
    hex: "#2D5A3D",
    subtitle: "Fresh, Grounded, Enduring",
    inspiration: "Inspired by Brazil's lush landscapes, a natural, calming presence in any kitchen.",
    video: "", // Add vertical video URL here
    poster: "", // Optional poster/thumbnail
  },
  {
    name: "Gradated Red",
    hex: "#7A1B1B",
    subtitle: "Rich, Bold, Expressive",
    inspiration: "Inspired by iron-rich earth, a colour that brings warmth and intensity to the table.",
    video: "",
    poster: "",
  },
  {
    name: "Medium Blue",
    hex: "#1B2D5A",
    subtitle: "Calm, Refined, Timeless",
    inspiration: "Inspired by the Atlantic, understated, elegant, and effortlessly versatile.",
    video: "",
    poster: "",
  },
];

const ColorStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="palette" className="py-24 md:py-40 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-burgundy mb-4">
            The Palette
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            The Soul of Brazil. In Every Colour.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-lg mx-auto">
            Crafted to perform. Built to last.
          </p>
        </motion.div>

        {/* 3 Vertical Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {colors.map((color, i) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group"
            >
              {/* Video container — 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] overflow-hidden bg-foreground/5 mb-5">
                {color.video ? (
                  <VideoCard video={color.video} poster={color.poster} />
                ) : (
                  /* Placeholder until videos are added */
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(160deg, ${color.hex}cc 0%, ${color.hex} 60%, ${color.hex}dd 100%)`,
                    }}
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10">
                      <Play size={22} className="text-white/80 ml-0.5" />
                    </div>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/60">
                      Video coming soon
                    </p>
                  </div>
                )}

                {/* Color badge overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full border-2 border-white/40 flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="font-body text-xs tracking-[0.1em] uppercase text-white/90 font-medium">
                      {color.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Color info */}
              <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                {color.subtitle}
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                {color.inspiration}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Find Your Colour
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ColorStory;
