import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Utensils, HandMetal, Thermometer, Sparkles, SprayCan, Droplets } from "lucide-react";

const careSteps = [
  {
    icon: Flame,
    number: "01",
    title: "Cook on Gentle Heat",
    desc: "Bestow retains heat efficiently — low to medium heat is all you need.",
  },
  {
    icon: Utensils,
    number: "02",
    title: "Use the Right Tools",
    desc: "Stick to wooden, silicone, or nylon utensils to protect the enamel.",
  },
  {
    icon: HandMetal,
    number: "03",
    title: "Wash with Care",
    desc: "Hand wash with mild soap and a soft sponge to preserve its finish.",
  },
  {
    icon: Thermometer,
    number: "04",
    title: "Let It Cool",
    desc: "Allow your cookware to cool before cleaning to maintain durability.",
  },
];

const proTips = [
  {
    icon: Sparkles,
    title: "For Stains",
    desc: "Soak with warm water and baking soda.",
  },
  {
    icon: SprayCan,
    title: "Avoid Sprays",
    desc: "Use oil or butter instead.",
  },
  {
    icon: Droplets,
    title: "Dry Well",
    desc: "Always dry before storing.",
  },
];

const CareSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Simple Care for Lasting Performance.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-lg mx-auto">
            Designed to last for years, with care that's simple and effortless.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {careSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-6 border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div whileHover={{ rotate: 10 }} className="w-10 h-10 flex items-center justify-center text-primary">
                  <step.icon size={24} strokeWidth={1.5} />
                </motion.div>
                <span className="font-display text-sm text-muted-foreground">{step.number}</span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card border border-border p-8 md:p-12"
        >
          <h3 className="font-display text-2xl text-foreground mb-8 text-center">Pro Tips</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {proTips.map((tip) => (
              <div key={tip.title} className="flex items-start gap-4">
                <tip.icon size={20} strokeWidth={1.5} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body text-sm font-medium text-foreground mb-1">{tip.title}</h4>
                  <p className="font-body text-sm text-muted-foreground font-light">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareSection;
