import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import lifestyleImage from "@/assets/lifestyle-cooking.jpg";

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
            Crafted for those who savour every moment
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 font-light">
            Bestow combines timeless design with exceptional heat retention, crafted to elevate everyday cooking. Each piece is a testament to over a century of Tramontina's expertise in creating cookware that performs beautifully.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed font-light">
            From slow-simmered stews to perfectly seared proteins, the enameled cast iron construction ensures even heat distribution and unmatched durability — a companion for generations of meals.
          </p>
          <div className="mt-10 pt-10 border-t border-border">
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "100+", label: "Years of Craft" },
                { value: "232°C", label: "Oven Safe" },
                { value: "∞", label: "Meals to Make" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl md:text-3xl text-foreground">{stat.value}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">{stat.label}</p>
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
