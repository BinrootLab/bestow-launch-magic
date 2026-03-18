import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Globe, Award, Factory } from "lucide-react";

const stats = [
  { icon: Calendar, value: "EST. 1911", label: "Built on craftsmanship and enduring quality" },
  { icon: Globe, value: "120+", label: "Countries — Present in kitchens around the world" },
  { icon: Award, value: "Family-Led", label: "Generations of expertise and care" },
  { icon: Factory, value: "9 Factories", label: "End-to-end control for consistent quality" },
];

const GlobalBenchmark = () => {
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
            Global Benchmark
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-brand-cotton mb-4">
            Loved in Kitchens Around the World.
          </h2>
          <p className="font-body text-base text-brand-sky font-light max-w-2xl mx-auto leading-relaxed mb-16">
            Built on 115 years of craftsmanship, designed for performance that lasts.
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
              Shop Bestow
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalBenchmark;
