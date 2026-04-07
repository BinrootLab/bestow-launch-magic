import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Globe, Users, Factory } from "lucide-react";

const stats = [
  { icon: Calendar, value: "EST. 1911", label: "Built on craftsmanship and enduring quality" },
  { icon: Globe, value: "120+ Countries", label: "Present in kitchens around the world" },
  { icon: Users, value: "Family-Led", label: "Generations of expertise and care" },
  { icon: Factory, value: "9 Factories", label: "End-to-end control for consistent quality" },
];

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="brand" className="py-24 md:py-40 bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-olive mb-6">
            The Bestow Story
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-4">
            115 Years of Brazilian Mastery.
          </h2>
          <p className="font-display text-lg md:text-xl text-muted-foreground font-light italic mb-8">
            From a 1911 blacksmith workshop to a global benchmark in cookware.
          </p>
          <p className="font-body text-base text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed mb-6">
            What began as a single blacksmith's vision in southern Brazil has evolved into a global standard in cookware. For over 115 years, Tramontina has remained family-led, focused on craftsmanship, performance, and timeless design.
          </p>
          <p className="font-body text-base text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed mb-16">
            Today, with 9 state-of-the-art factories, every Bestow piece still reflects that original philosophy: make it right, make it beautiful, and make it last.
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
                <stat.icon size={24} strokeWidth={1.5} className="text-primary mb-3" />
                <p className="font-display text-2xl md:text-3xl text-foreground">{stat.value}</p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-2 max-w-[180px]">{stat.label}</p>
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
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Bestow
            </a>
            <p className="font-body text-xs text-muted-foreground mt-4 italic">
              115 years of craftsmanship, brought to your kitchen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;