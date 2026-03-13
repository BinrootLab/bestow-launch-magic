import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import enamelCloseup from "@/assets/enamel-closeup.jpg";
import lidCondensation from "@/assets/lid-condensation.jpg";

const steps = [
  { number: "01", title: "Molten Iron, Precision Moulds", desc: "Each pot starts as molten iron poured into sand moulds. This gives Bestow its signature weight and even heat distribution — no thin spots, no warping." },
  { number: "02", title: "Triple-Layer Enamel Coating", desc: "Three layers of porcelain enamel are kiln-fired at 800°C. The result is a smooth, nontoxic, PFAS-free surface that won't chip, stain, or react with acidic foods." },
  { number: "03", title: "Tested for a Lifetime", desc: "Every piece is individually inspected for heat uniformity, lid seal, and enamel integrity before it leaves the factory." },
];

const CraftsmanshipStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 bg-foreground text-primary-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-sky mb-4">
            The Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-cotton">
            Craftsmanship in every detail
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={enamelCloseup} alt="Enamel surface close-up" className="w-full h-[280px] object-cover" />
            <img src={lidCondensation} alt="Lid condensation detail" className="w-full h-[280px] object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="flex gap-6"
              >
                <span className="font-display text-3xl text-brand-sky/40">{step.number}</span>
                <div>
                  <h3 className="font-display text-xl text-brand-cotton mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-brand-sky font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            See the Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipStory;
