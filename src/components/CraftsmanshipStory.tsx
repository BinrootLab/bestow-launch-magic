import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import enamelCloseup from "@/assets/enamel-closeup.jpg";
import lidCondensation from "@/assets/lid-condensation.jpg";

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
            The Legacy
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-cotton mb-4">
            The Cast Iron Legacy.
          </h2>
          <p className="font-display text-xl md:text-2xl text-brand-sky font-light italic">
            Timeless Cookware. Enduring Performance.
          </p>
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
            className="space-y-6"
          >
            <p className="font-body text-base text-brand-sky font-light leading-relaxed">
              Cast iron has been valued for centuries for its strength, versatility and ability to hold heat.
            </p>
            <p className="font-body text-base text-brand-sky font-light leading-relaxed">
              In Indian cooking, where flavour builds slowly and meals are meant to be shared, Bestow cast iron finds its perfect expression.
            </p>
            <p className="font-body text-base text-brand-sky font-light leading-relaxed">
              With Bestow, that timeless material meets vibrant design and toxin-free enamel made for modern kitchens.
            </p>
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
            Bestow Your Table
          </a>
          <p className="font-body text-xs text-brand-sky/60 mt-4 italic">
            For everyday use and high-performance pre-seasoned cast iron, visit our Titanex Cast Iron range.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipStory;
