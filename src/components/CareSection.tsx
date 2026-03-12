import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, HandMetal, ThermometerSun, SprayCan } from "lucide-react";

const careTips = [
  {
    icon: ThermometerSun,
    title: "Heat Gradually",
    desc: "Always start on low-medium heat. Cast iron retains heat beautifully — no need to blast it.",
  },
  {
    icon: HandMetal,
    title: "Hand Wash Only",
    desc: "Gently wash with warm soapy water. Avoid dishwashers to preserve the enamel finish.",
  },
  {
    icon: Droplets,
    title: "Dry Thoroughly",
    desc: "Towel dry after washing. Store with lid slightly ajar to prevent moisture buildup.",
  },
  {
    icon: SprayCan,
    title: "Use Wooden or Silicone Utensils",
    desc: "Protect the enamel interior by avoiding metal utensils. Wood and silicone are ideal.",
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
            Care & Longevity
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Built for generations
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-lg mx-auto">
            With proper care, your Bestow cookware will last a lifetime. Here's how to keep it perfect.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {careTips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center p-6 border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div whileHover={{ rotate: 10 }} className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                <tip.icon size={28} strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-display text-lg text-foreground mb-2">{tip.title}</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareSection;
