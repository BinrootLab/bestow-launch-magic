import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lifestyleTable from "@/assets/lifestyle-table.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import lidCondensation from "@/assets/lid-condensation.jpg";

const LifestyleCooking = () => {
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
            The Bestow Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Cook for Moments That Matter.
          </h2>
          <p className="font-display text-lg md:text-xl text-muted-foreground font-light italic max-w-2xl mx-auto">
            Slow curries. Sunday biryanis. Shared family meals.
          </p>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Built for dishes that take time, and moments that stay longer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-8 overflow-hidden relative group"
          >
            <img src={lifestyleTable} alt="Family dining with Bestow" className="w-full h-[400px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-2xl md:text-3xl text-brand-cotton italic">Serve directly from flame</p>
            </div>
          </motion.div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden group flex-1"
            >
              <img src={galleryKitchen} alt="Cooking on stove" className="w-full h-full min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="overflow-hidden group flex-1"
            >
              <img src={lidCondensation} alt="Steam and condensation" className="w-full h-full min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleCooking;
