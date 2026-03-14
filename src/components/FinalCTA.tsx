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
            The Bestow Promise
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-brand-cotton mb-4 leading-[1.1]">
            115 Years in the Making. Built for Your Lifetime.
          </h2>
          <p className="font-display text-lg md:text-xl text-brand-sky mb-8 italic font-light">
            You aren't just choosing a pot; you are choosing the anchor of your kitchen.
          </p>
          <p className="font-body text-base text-brand-sky mb-12 font-light max-w-xl mx-auto leading-relaxed">
            From the first sear in our 1911 workshop to the million homes we serve today, our mission remains the same: Professional performance. Healthy living. Timeless beauty.
          </p>
          <p className="font-body text-sm text-brand-sky/80 mb-12 font-light max-w-lg mx-auto">
            Don't just cook. Bestow your best. Experience the vibrant soul of the world's most trusted enamel cookware and start a tradition that will be passed down for generations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.a
              href="#shop"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block px-12 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Claim Your Bestow Legacy
            </motion.a>
          </div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-6"
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
          <p className="font-body text-xs text-brand-sky/60 italic">
            115 Years of Engineering. 10-Year Guarantee. Lifetime Support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
