import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import colorTrio from "@/assets/color-trio.jpg";
import heroSteam from "@/assets/hero-steam.jpg";
import enamelCloseup from "@/assets/enamel-closeup.jpg";
import lifestyleCooking from "@/assets/lifestyle-cooking.jpg";

const colors = [
  {
    name: "Cactus Green",
    hex: "#2D5A3D",
    subtitle: "Fresh, Grounded, Enduring",
    inspiration: "Inspired by Brazil's lush landscapes, a natural, calming presence in any kitchen.",
    image: lifestyleCooking,
  },
  {
    name: "Gradated Red",
    hex: "#7A1B1B",
    subtitle: "Rich, Bold, Expressive",
    inspiration: "Inspired by iron-rich earth, a colour that brings warmth and intensity to the table.",
    image: heroSteam,
  },
  {
    name: "Medium Blue",
    hex: "#1B2D5A",
    subtitle: "Calm, Refined, Timeless",
    inspiration: "Inspired by the Atlantic, understated, elegant, and effortlessly versatile.",
    image: enamelCloseup,
  },
];

const ColorStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeColor, setActiveColor] = useState<number | null>(null);

  const displayImage = activeColor !== null ? colors[activeColor].image : colorTrio;

  return (
    <section id="palette" className="py-24 md:py-40 bg-card" ref={ref}>
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
            The Soul of Brazil. In Every Colour.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-lg mx-auto">
            Crafted to perform. Built to last.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative overflow-hidden"
        >
          <img
            src={displayImage}
            alt="Bestow colour collection"
            className="w-full h-[300px] md:h-[450px] object-cover transition-all duration-700"
          />
          {activeColor !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-8"
            >
              <p className="font-display text-2xl md:text-3xl text-card font-light">
                {colors[activeColor].name} — {colors[activeColor].subtitle}
              </p>
              <p className="font-body text-sm text-card/80 mt-1">{colors[activeColor].inspiration}</p>
            </motion.div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {colors.map((color, i) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="flex items-start gap-5 cursor-pointer group"
              onMouseEnter={() => setActiveColor(i)}
              onMouseLeave={() => setActiveColor(null)}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-20 h-20 rounded-full flex-shrink-0 border-4 border-background shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {color.name} — {color.subtitle}
                </h3>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{color.inspiration}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Find Your Colour
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ColorStory;
