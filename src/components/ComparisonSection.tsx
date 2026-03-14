import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Thermometer, Atom, PenTool } from "lucide-react";

const rows = [
  { feature: "Foundry Heritage", other: "Mass-produced assembly", bestow: "115 Years of Brazilian Mastery" },
  { feature: "Casting Quality", other: "Thin spots & uneven heat", bestow: "Heavy-Gauge Precision Casting" },
  { feature: "Surface Safety", other: "May contain PTFE/PFAS", bestow: "Healthy, Non-Toxic & PFOA-Free" },
  { feature: "Colour Resilience", other: "Fades with high-heat use", bestow: "2× Fade-Resistant Brilliance" },
  { feature: "Moisture Control", other: "Standard flat lid", bestow: "Self-Basting Condensation Rings" },
  { feature: "Longevity", other: "1–2 year typical lifespan", bestow: "10-Year Quality Guarantee" },
];

const distinctions = [
  {
    icon: Thermometer,
    number: "1",
    title: "Thermal Density",
    desc: "Bestow's heavy-gauge iron core eliminates \"hot spots,\" holding a steady, chef-level temperature from base to rim.",
  },
  {
    icon: Atom,
    number: "2",
    title: "Molecular Fusion",
    desc: "Our enamel is fused at 800°C to create a diamond-hard, non-reactive shield that won't chip or stain.",
  },
  {
    icon: PenTool,
    number: "3",
    title: "Purposeful Design",
    desc: "From the ergonomic stainless knob to the stove-to-social aesthetics, every detail is engineered for the modern home.",
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
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Bestow Distinction
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            The Bestow Distinction.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light max-w-xl mx-auto">
            115 years of engineering defines the difference between a pot and a legacy.
          </p>
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
            Experience the Difference
          </a>
          <p className="font-body text-xs text-muted-foreground mt-4 italic">
            Proven for Generations. Engineered for Yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
