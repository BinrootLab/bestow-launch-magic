import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ShieldCheck, Globe } from "lucide-react";

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
            Bring Bestow Home
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-brand-cotton mb-4 leading-[1.1]">
            115 Years in the Making. Built for Your Lifetime.
          </h2>
          <p className="font-display text-lg md:text-xl text-brand-sky mb-8 italic font-light">
            More than cookware — it's an upgrade to how you cook and serve.
          </p>
          <p className="font-body text-base text-brand-sky mb-12 font-light max-w-xl mx-auto leading-relaxed">
            For over 115 years, Tramontina has defined what great cookware should be — reliable, safe, and built to last. Bring home Bestow and experience cookware designed for everyday use and made for moments that matter.
          </p>
          <motion.a
            href="#shop"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block px-12 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-all duration-300 hover:scale-105 hover:shadow-lg mb-10"
          >
            Shop Bestow
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-body text-sm text-brand-sky/80 mb-8"
          >
            115 Years of Engineering. 10-Year Guarantee. Non-Toxic & Safe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} strokeWidth={1.5} className="text-brand-sky" />
              <span className="font-body text-[10px] tracking-[0.15em] uppercase text-brand-sky/80">Est. 1911</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} strokeWidth={1.5} className="text-brand-sky" />
              <span className="font-body text-[10px] tracking-[0.15em] uppercase text-brand-sky/80">Non-Toxic</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} strokeWidth={1.5} className="text-brand-sky" />
              <span className="font-body text-[10px] tracking-[0.15em] uppercase text-brand-sky/80">Global Trust</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
