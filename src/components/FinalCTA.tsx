import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-48" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Begin your journey
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-[1.1]">
            Experience the Bestow Collection
          </h2>
          <p className="font-body text-base text-muted-foreground mb-12 font-light max-w-md mx-auto leading-relaxed">
            Timeless design. Exceptional performance. Crafted for those who believe cooking is an art.
          </p>
          <a
            href="#shop"
            className="inline-block px-12 py-4 bg-foreground text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Shop Bestow
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
