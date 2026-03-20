import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, UtensilsCrossed, Beef, FlameKindling } from "lucide-react";

const sizes = [
  {
    icon: Heart,
    occasion: "Cooking for 1–2",
    recommendation: "25 cm Skillet / 3.3L Round",
    capacity: "Compact & Precise Cooking",
  },
  {
    icon: UtensilsCrossed,
    occasion: "Daily Family Meal",
    recommendation: "30 cm Skillet / 5.2L Round",
    capacity: "Versatile everyday use",
    popular: true,
  },
  {
    icon: Beef,
    occasion: "Hosting & Roasts",
    recommendation: "5.2L or 6.6L Oval",
    capacity: "Large, shareable meals",
  },
  {
    icon: FlameKindling,
    occasion: "Braising & Searing",
    recommendation: "3.8L Braiser",
    capacity: "Controlled, flavour-rich cooking",
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
            Choose Your Bestow.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-xl mx-auto leading-relaxed">
            From quiet dinners to shared family feasts — there's a Bestow for every table.
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-16 -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {sizes.map((size, i) => (
              <motion.div
                key={size.occasion}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * i }}
                whileHover={{ y: -8 }}
                className={`relative p-6 md:p-7 border text-center transition-shadow duration-300 hover:shadow-xl flex-shrink-0 w-[70vw] sm:w-[50vw] snap-start lg:w-auto lg:flex-shrink ${
                  size.popular ? "border-primary bg-background" : "border-border bg-background"
                }`}
              >
                {size.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <size.icon size={28} strokeWidth={1.5} className="mx-auto mb-3 text-primary" />
                <p className="font-display text-base md:text-lg text-foreground mb-1 font-medium">{size.occasion}</p>
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
            Find Your Bestow
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyingGuide;
