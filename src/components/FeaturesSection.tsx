import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Shield, CircleDot, Thermometer } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Superior Heat Retention",
    description: "Cast iron core distributes and holds heat evenly, ensuring perfectly cooked meals every time.",
  },
  {
    icon: Shield,
    title: "Durable Enamel Finish",
    description: "Premium vitreous enamel coating resists chipping, cracking, and staining for lasting beauty.",
  },
  {
    icon: CircleDot,
    title: "Works on All Stovetops",
    description: "Compatible with gas, electric, ceramic, and induction cooktops for ultimate versatility.",
  },
  {
    icon: Thermometer,
    title: "Oven Safe up to 232°C",
    description: "Seamlessly transition from stovetop to oven for complete cooking flexibility.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 md:py-40 bg-brand-warm" ref={ref}>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-border rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                <feature.icon size={24} strokeWidth={1.5} className="text-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
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
