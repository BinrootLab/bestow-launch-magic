import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-48 bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-sky mb-6">
            Join 150 million+ happy families
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-brand-cotton mb-8 leading-[1.1]">
            Your kitchen deserves Bestow
          </h2>
          <p className="font-body text-base text-brand-sky mb-12 font-light max-w-md mx-auto leading-relaxed">
            Healthy, nontoxic, PFAS-free cast iron that cooks better and lasts a lifetime. Start with one piece — you'll want the whole collection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#shop"
              className="inline-block px-12 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Shop Bestow
            </a>
            <a
              href="#guide"
              className="inline-block px-12 py-4 border border-brand-sky/40 text-brand-cotton font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/10 transition-colors"
            >
              Find Your Size
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
