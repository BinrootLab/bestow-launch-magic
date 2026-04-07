import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Thermometer, ShieldCheck, PenTool } from "lucide-react";

const rows = [
  { feature: "Foundry Heritage", other: "Mass-produced", bestow: "115 Years of Brazilian Mastery" },
  { feature: "Heat Performance", other: "Uneven heat", bestow: "Even, consistent heat" },
  { feature: "Surface Safety", other: "May contain PFAS/PTFE", bestow: "Healthy and Nontoxic" },
  { feature: "Colour Durability", other: "Fades over time", bestow: "Fade-resistant finish" },
  { feature: "Lid Design", other: "Standard flat lid", bestow: "Self-basting lid design" },
  { feature: "Longevity", other: "Short lifespan", bestow: "10-Year Guarantee" },
];

const distinctions = [
  {
    icon: Thermometer,
    number: "1",
    title: "Even, Consistent Heat",
    desc: "Thick cast iron ensures steady heat with no hot spots.",
  },
  {
    icon: ShieldCheck,
    number: "2",
    title: "Non-Toxic Enamel",
    desc: "A durable, non-reactive surface designed for clean cooking.",
  },
  {
    icon: PenTool,
    number: "3",
    title: "Thoughtful Design",
    desc: "Built to cook, serve, and elevate every meal.",
  },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-burgundy mb-4">
            The Bestow Distinction
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            The Difference Is in the Details.
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 pb-4 border-b border-border">
            <div className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">Feature</div>
            <div className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium text-center">Other Enamel Cookware</div>
            <div className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium text-center bg-brand-sky-tint rounded-t-sm px-4 py-2 -mb-4">Tramontina Bestow</div>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="grid grid-cols-3 py-5 border-b border-border/60"
            >
              <div className="font-body text-sm font-medium text-foreground">{row.feature}</div>
              <div className="font-body text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
                <span className="text-muted-foreground/50">×</span> {row.other}
              </div>
              <div className="font-body text-sm text-primary font-medium text-center bg-brand-sky-tint px-4 flex items-center justify-center gap-2">
                <span className="text-primary">✓</span> {row.bestow}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What Sets Bestow Apart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl font-light text-foreground">
            What Sets Bestow Apart
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {distinctions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
              className="text-center p-6 border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 mx-auto mb-4 rounded-full border border-border flex items-center justify-center"
              >
                <item.icon size={22} strokeWidth={1.5} className="text-primary" />
              </motion.div>
              <span className="font-display text-sm text-muted-foreground">{item.number}.</span>
              <h4 className="font-display text-xl text-foreground mb-2">{item.title}</h4>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Discover the Difference
          </a>
          <p className="font-body text-xs text-muted-foreground mt-4 italic">
            Proven Over Generations. Made for Yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
