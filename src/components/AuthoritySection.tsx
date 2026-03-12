import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 bg-foreground text-primary-foreground" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-sky mb-6">
            Since 1911
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-brand-cotton mb-8">
            Trusted by millions since 1911
          </h2>
          <p className="font-body text-base text-brand-sky font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Tramontina started as a small blacksmith workshop in southern Brazil. Today, it's one of the world's most trusted cookware brands — present in over 120 countries, used in 150 million+ homes, and backed by 113 years of making things that last.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { value: "1911", label: "Founded" },
              { value: "120+", label: "Countries" },
              { value: "150M+", label: "Happy Families" },
              { value: "9", label: "Factories" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className="font-display text-3xl md:text-4xl text-brand-cotton">{stat.value}</p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brand-sky mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-colors"
          >
            Shop the Legacy
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
