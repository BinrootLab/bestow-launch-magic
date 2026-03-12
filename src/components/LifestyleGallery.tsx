import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryPlated from "@/assets/gallery-plated.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";

const LifestyleGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collection" className="py-24 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Cook beautifully. Serve confidently.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light">
            Where artistry meets the everyday
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 overflow-hidden"
          >
            <img
              src={galleryKitchen}
              alt="Bestow collection in a modern kitchen"
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 overflow-hidden"
          >
            <img
              src={galleryDetail}
              alt="Enamel detail close-up"
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-12 overflow-hidden relative"
          >
            <img
              src={galleryPlated}
              alt="Beautifully plated food in Bestow cookware"
              className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
              <p className="font-display text-3xl md:text-5xl text-primary-foreground font-light italic">
                Every dish, an occasion
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;
