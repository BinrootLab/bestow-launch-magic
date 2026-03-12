import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import colorTrio from "@/assets/color-trio.jpg";

const colors = [
  { name: "Forest Green", hex: "#2D5A3D", inspiration: "Inspired by the dense forests of southern Brazil" },
  { name: "Crimson Red", hex: "#7A1B1B", inspiration: "Inspired by the rich earth of the Serra Gaúcha" },
  { name: "Deep Blue", hex: "#1B2D5A", inspiration: "Inspired by the Atlantic waters off Rio Grande do Sul" },
];

const ColorStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Palette
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Colours inspired by nature
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-lg mx-auto">
            The outer enamel is 2× more fade-resistant than standard coatings. Pick a colour — it'll look this good for years.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <img src={colorTrio} alt="Bestow colour collection" className="w-full h-[300px] md:h-[450px] object-cover" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {colors.map((color, i) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="flex items-start gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-20 h-20 rounded-full flex-shrink-0 border-4 border-background shadow-lg"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">{color.name}</h3>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{color.inspiration}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
          >
            Pick Your Colour
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ColorStory;
