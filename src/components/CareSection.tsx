import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Utensils, HandMetal, Thermometer, Sparkles, SprayCan, Droplets } from "lucide-react";

const careSteps = [
  {
    icon: Flame,
    number: "01",
    title: "Gentle Heat, Perfect Results",
    desc: "Our heavy-gauge cast iron is engineered for superior thermal density. To preserve the triple-layer enamel and prevent scorching, always cook on low to medium heat. High heat is rarely needed when your cookware holds energy this efficiently.",
  },
  {
    icon: Utensils,
    number: "02",
    title: "Tools of the Craft",
    desc: "To maintain the diamond-hard brilliance of your interior, always use silicone, wooden, or nylon utensils. Avoid metal tools to ensure your non-reactive surface remains flawless and scratch-free for decades.",
  },
  {
    icon: HandMetal,
    number: "03",
    title: "The Art of the Hand Wash",
    desc: "We recommend hand washing with a soft sponge and mild soap. This preserves the vibrant Brazilian-inspired lustre and protects the hand-finished rim from the harsh environment of a dishwasher.",
  },
  {
    icon: Thermometer,
    number: "04",
    title: "Cool Before Cleaning",
    desc: "Always allow your vessel to cool naturally before introducing it to water. This simple step protects the molecular bond of the enamel for a lifetime of use.",
  },
];

const proTips = [
  {
    icon: Sparkles,
    title: "Stain Removal",
    desc: "Soak with warm water and baking soda to restore original brilliance.",
  },
  {
    icon: SprayCan,
    title: "No Aerosols",
    desc: "Avoid non-stick sprays. A small amount of oil or butter is all you need.",
  },
  {
    icon: Droplets,
    title: "Dry Thoroughly",
    desc: "Always dry your pot completely before storing.",
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
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Bestow Care Guide
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Master the Care of Your Bestow.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-lg mx-auto">
            With proper care, your Bestow will last a lifetime. Discover the simple rituals that keep your cookware in peak condition.
          </p>
        </motion.div>

        {/* Main care steps */}
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

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card border border-border p-8 md:p-12"
        >
          <h3 className="font-display text-2xl text-foreground mb-8 text-center">3 Pro Tips</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {proTips.map((tip, i) => (
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
