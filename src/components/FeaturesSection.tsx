import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Palette, Thermometer, Flame, Layers } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Healthy & Nontoxic Enamel",
    description: "Porcelain enamel interior free from PFOA, PTFE, and PFAS. No chemicals leaching into your food — just pure, safe cooking.",
  },
  {
    icon: Palette,
    title: "2× Color & Fade Resistant",
    description: "The outer enamel stays vibrant twice as long as standard coatings. Your Bestow looks brand new even after years of daily use.",
  },
  {
    icon: Thermometer,
    title: "Locks In Nutrition",
    description: "Thick walls retain heat so well, you cook on lower flames. Vitamins and minerals stay in your food, not lost to high heat.",
  },
  {
    icon: Flame,
    title: "Flame to Table",
    description: "Cook a biryani on the stove, bake bread in the oven, then serve it straight at the table. One vessel, zero transfers.",
  },
  {
    icon: Layers,
    title: "Thick Gauge Cast Iron",
    description: "Heavy-duty construction distributes heat evenly across the base and walls — no hot spots, no burning, no guesswork.",
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
            Built to perform. Made to last.
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
      </div>
    </section>
  );
};

export default FeaturesSection;
