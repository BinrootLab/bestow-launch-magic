import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Truck, Disc, ShieldCheck } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-cooking.jpg";

const trustBadges = [
  { icon: Leaf, label: "Toxin-Free Coating" },
  { icon: Truck, label: "Free Shipping & Returns" },
  { icon: Disc, label: "Induction & All Cooktop Ready" },
  { icon: ShieldCheck, label: "Guaranteed for 10 Years" },
];

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 md:py-40 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <img
            src={lifestyleImage}
            alt="Cooking with Bestow cast iron"
            className="w-full h-[500px] md:h-[650px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            The Bestow Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-[1.1]">
            Bestow — Where Tradition Meets Craft.
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 font-light">
            Across the world and in Indian kitchens, cast iron has long been trusted for its ability to cook slowly, evenly and richly. Bestow elevates that tradition.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 font-light">
            Its dense cast iron core delivers steady heat that deepens flavours and enhances every dish. The porcelain enamel surface keeps cooking clean, pure and non-reactive.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed font-light">
            From the stovetop to the dining table, Bestow is made for meals that bring people together.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
            className="mt-8"
          >
            <a
              href="#shop"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Discover Bestow
            </a>
          </motion.div>

          {/* Micro trust line */}
          <p className="font-body text-xs text-muted-foreground mt-8 italic">
            115 Years of Brazilian Engineering. Professional-grade performance, backed by a lifetime of culinary support.
          </p>

          {/* Trust badges */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-3">
                  <badge.icon size={18} strokeWidth={1.5} className="text-primary flex-shrink-0" />
                  <span className="font-body text-xs text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
