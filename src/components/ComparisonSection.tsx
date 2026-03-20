import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Thermometer, ShieldCheck, PenTool } from "lucide-react";

const rows = [
  { feature: "Foundry Heritage", other: "Mass-produced", bestow: "115 Years of Brazilian Mastery" },
  { feature: "Heat Performance", other: "Uneven heat", bestow: "Even, consistent heat" },
  { feature: "Surface Safety", other: "May contain PFAS/PTFE", bestow: "100% Non-Toxic" },
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
    <section className="py-24 md:py-40" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-olive mb-4">
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
          className="border border-border overflow-hidden mb-20"
        >
          <div className="grid grid-cols-3 bg-foreground text-primary-foreground">
            <div className="p-4 font-body text-xs tracking-[0.15em] uppercase">Feature</div>
            <div className="p-4 font-body text-xs tracking-[0.15em] uppercase text-center">Other Enamel Cookware</div>
            <div className="p-4 font-body text-xs tracking-[0.15em] uppercase text-center">Tramontina Bestow</div>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              className={`grid grid-cols-3 border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}
            >
              <div className="p-4 font-body text-sm font-medium text-foreground">{row.feature}</div>
              <div className="p-4 font-body text-sm text-muted-foreground text-center">{row.other}</div>
              <div className="p-4 font-body text-sm text-primary font-medium text-center">{row.bestow}</div>
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
                <item.icon size={22} strokeWidth={1.5} className="text-brand-olive" />
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
