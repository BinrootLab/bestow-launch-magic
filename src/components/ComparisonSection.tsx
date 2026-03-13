import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Healthy & Nontoxic Enamel (PFAS-Free)", bestow: true, regular: false },
  { feature: "2× Fade-Resistant Exterior", bestow: true, regular: false },
  { feature: "Thick Gauge Cast Iron", bestow: true, regular: false },
  { feature: "Oven Safe to 232°C", bestow: true, regular: true },
  { feature: "Works on Induction", bestow: true, regular: false },
  { feature: "Flame to Table Design", bestow: true, regular: false },
  { feature: "Self-Basting Lid", bestow: true, regular: false },
  { feature: "Lifetime Durability", bestow: true, regular: false },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Difference
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Bestow vs. Regular Cookware
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-border overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-foreground text-primary-foreground">
            <div className="p-4 font-body text-xs tracking-[0.15em] uppercase">Feature</div>
            <div className="p-4 font-body text-xs tracking-[0.15em] uppercase text-center">Bestow</div>
            <div className="p-4 font-body text-xs tracking-[0.15em] uppercase text-center">Regular</div>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              className={`grid grid-cols-3 border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}
            >
              <div className="p-4 font-body text-sm text-foreground">{row.feature}</div>
              <div className="p-4 flex justify-center">
                <Check size={18} className="text-green-600" />
              </div>
              <div className="p-4 flex justify-center">
                {row.regular ? <Check size={18} className="text-green-600" /> : <X size={18} className="text-destructive" />}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Switch to Bestow
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
