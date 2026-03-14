import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Globe, Award, Factory } from "lucide-react";

const stats = [
  { icon: Calendar, value: "EST. 1911", label: "Founded on the principles of endurance and grit" },
  { icon: Globe, value: "120+", label: "Countries — A global gold standard in professional cookware" },
  { icon: Award, value: "Gold Standard", label: "Trusted in millions of homes for healthy, high-performance cooking" },
  { icon: Factory, value: "9 Factories", label: "End-to-end craftsmanship for flawless quality" },
];

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
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-brand-cotton mb-4">
            115 Years of Brazilian Mastery.
          </h2>
          <p className="font-display text-lg md:text-xl text-brand-sky font-light italic mb-8">
            From a small 1911 blacksmith workshop to the world's most trusted foundries.
          </p>
          <p className="font-body text-base text-brand-sky font-light max-w-2xl mx-auto leading-relaxed mb-12">
            What started as a single blacksmith's vision in southern Brazil has evolved into a global benchmark of Enamel Engineering. For over 115 years, Tramontina has remained a family-led brand, obsessed with the details of heat, form, and function.
          </p>
          <p className="font-body text-base text-brand-sky font-light max-w-2xl mx-auto leading-relaxed mb-16">
            Today, we operate 9 state-of-the-art factories, yet every Bestow piece still carries the same spirit of that first 1911 workshop: Make it right. Make it beautiful. Make it last.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon size={24} strokeWidth={1.5} className="text-brand-sky mb-3" />
                <p className="font-display text-2xl md:text-3xl text-brand-cotton">{stat.value}</p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-brand-sky mt-2 max-w-[180px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <a
              href="#shop"
              className="inline-block px-10 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Shop the Legacy
            </a>
            <p className="font-body text-xs text-brand-sky/60 mt-4 italic">
              115 years in the making. Your kitchen's new anchor.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
