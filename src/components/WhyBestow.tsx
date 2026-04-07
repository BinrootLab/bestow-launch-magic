import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lifestyleImage from "@/assets/lifestyle-cooking.jpg";

const WhyBestow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 md:py-40 px-6 lg:px-12 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <img
            src={lifestyleImage}
            alt="Cooking with Bestow cast iron"
            className="w-full h-[500px] md:h-[650px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-burgundy mb-6">
            Why Bestow
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-[1.1]">
            Upgrade the Way You Cook.
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 font-light">
            In Indian kitchens, cooking is about depth, patience, and meals that bring people together.
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground font-light mb-4 italic">
            Not all cookware delivers that experience.
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground font-light mb-4 italic">
            Cooking should feel effortless. Clean. Reliable.
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground font-light mb-6 italic">
            That's where better craftsmanship makes all the difference.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 font-light">
            Bestow combines dense cast iron with toxin-free enamel — delivering cleaner, more consistent cooking.
          </p>
          <p className="font-body text-sm text-muted-foreground italic mb-8">
            Because great cooking deserves better tools.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <a
              href="#shop"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Discover Bestow
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBestow;
