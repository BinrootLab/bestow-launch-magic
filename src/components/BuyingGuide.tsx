import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, UtensilsCrossed, Beef, FlameKindling } from "lucide-react";

const sizes = [
  {
    icon: Heart,
    occasion: "Cooking for 1–2",
    recommendation: "25 cm Skillet / 3.3L Round",
    capacity: "Compact & Precise",
  },
  {
    icon: UtensilsCrossed,
    occasion: "Daily Family Meal",
    recommendation: "30 cm Skillet / 5.2L Round",
    capacity: "The All-Rounder",
    popular: true,
  },
  {
    icon: Beef,
    occasion: "Sunday Roasts",
    recommendation: "5.2L or 6.6L Oval",
    capacity: "Large & Elegant",
  },
  {
    icon: FlameKindling,
    occasion: "Braising & Searing",
    recommendation: "3.8L Braiser",
    capacity: "Low-Wall Mastery",
  },
];

const BuyingGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="guide" className="py-24 md:py-40 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Quick Guide
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Begin Your Bestow Story.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-xl mx-auto leading-relaxed">
            From intimate dinners for two to grand family feasts — precision-engineered for the heart of every home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {sizes.map((size, i) => (
            <motion.div
              key={size.occasion}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              whileHover={{ y: -8 }}
              className={`relative p-7 border text-center transition-shadow duration-300 hover:shadow-xl ${
                size.popular ? "border-primary bg-background" : "border-border bg-background"
              }`}
            >
              {size.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase">
                  Most Popular
                </div>
              )}
              <size.icon size={28} strokeWidth={1.5} className="mx-auto mb-3 text-primary" />
              <p className="font-display text-lg text-foreground mb-1 font-medium">{size.occasion}</p>
              <p className="font-body text-sm text-primary font-medium mb-2">{size.recommendation}</p>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-5">{size.capacity}</p>
              <a
                href="#shop"
                className="inline-block w-full py-3 bg-primary text-primary-foreground font-body text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 border border-primary text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Find Your Bestow Fit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyingGuide;
