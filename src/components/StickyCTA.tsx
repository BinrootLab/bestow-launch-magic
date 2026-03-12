import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const StickyCTA = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.95, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border py-3 px-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:block">
          <p className="font-display text-lg text-foreground">Bestow Enameled Cast Iron</p>
          <p className="font-body text-xs text-muted-foreground">Starting at ₹8,999</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <a
            href="#shop"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors"
          >
            <ShoppingBag size={14} />
            Shop Now
          </a>
          <a
            href="#guide"
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-body text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Find Your Size
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
