import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lifestyleTable from "@/assets/lifestyle-table.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import lidCondensation from "@/assets/lid-condensation.jpg";
import heroSteam from "@/assets/hero-steam.jpg";
import enamelCloseup from "@/assets/enamel-closeup.jpg";
import galleryPlated from "@/assets/gallery-plated.jpg";
const LifestyleCooking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-olive mb-4">
            The Bestow Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Cook for Moments That Matter.
          </h2>
          <p className="font-display text-lg md:text-xl text-muted-foreground font-light italic max-w-2xl mx-auto">
            Slow curries. Sunday biryanis. Shared family meals.
          </p>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Built for dishes that take time, and moments that stay longer.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            { src: lifestyleTable, alt: "Family dining with Bestow", caption: "Serve directly from flame" },
            { src: galleryKitchen, alt: "Cooking on stove", caption: "Everyday elegance" },
            { src: lidCondensation, alt: "Steam and condensation", caption: "Self-basting lid" },
            { src: heroSteam, alt: "Cooking steam", caption: "Even heat distribution" },
            { src: enamelCloseup, alt: "Enamel detail", caption: "Toxin-free enamel" },
            { src: galleryPlated, alt: "Plated dish", caption: "From oven to table" },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="overflow-hidden relative group"
            >
              <img src={img.src} alt={img.alt} className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <p className="font-display text-sm md:text-lg text-brand-cotton italic drop-shadow-lg">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleCooking;
