import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Sparkles, UtensilsCrossed, Flame, Gem } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Pure Cooking",
    description: "Porcelain enamel surface that is PFAS, PFOA and PTFE free.",
  },
  {
    icon: Sparkles,
    title: "Vibrant Finish",
    description: "Brilliant colour engineered to stay beautiful for years.",
  },
  {
    icon: UtensilsCrossed,
    title: "From Stove to Table",
    description: "Cook and serve in one timeless vessel.",
  },
  {
    icon: Flame,
    title: "Chef-Grade Craftsmanship",
    description: "Thick cast iron ensures even heat and reliable performance.",
  },
  {
    icon: Gem,
    title: "Aesthetic meets Performance",
    description: "Complements our high-performance Pre-seasoned cast iron range — Titanex Series.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 md:py-40 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Why Bestow
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Professional Precision. Everyday Perfection.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * index }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 mx-auto mb-6 border border-border rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300"
              >
                <feature.icon size={24} strokeWidth={1.5} className="text-foreground group-hover:text-primary transition-colors" />
              </motion.div>
              <h3 className="font-display text-lg md:text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mt-14"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Choose Your Bestow
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
