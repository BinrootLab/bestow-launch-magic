import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Home, PartyPopper, Heart } from "lucide-react";

const sizes = [
  {
    icon: Heart,
    capacity: "3.3L",
    label: "For Couples",
    desc: "Perfect for intimate dinners for two. Ideal for soups, sauces, and small batches.",
    price: "₹8,999",
  },
  {
    icon: Users,
    capacity: "3.8L",
    label: "For Small Families",
    desc: "Great for a family of three. Everyday curries, rice dishes, and one-pot meals.",
    price: "₹10,499",
  },
  {
    icon: Home,
    capacity: "5.2L",
    label: "For Family of 4",
    desc: "The everyday workhorse. Biryanis, curries, stews — feeds the whole family.",
    price: "₹12,999",
    popular: true,
  },
  {
    icon: PartyPopper,
    capacity: "6.6L",
    label: "For Entertaining",
    desc: "Made for gatherings. Slow-cook large batches and serve straight from the pot.",
    price: "₹14,999",
  },
];

const BuyingGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="guide" className="py-24 md:py-40 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Quick Guide
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Which Bestow should I buy?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sizes.map((size, i) => (
            <motion.div
              key={size.capacity}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              whileHover={{ y: -8 }}
              className={`relative p-7 border text-center transition-shadow duration-300 hover:shadow-xl ${
                size.popular ? "border-primary bg-background" : "border-border bg-background"
              }`}
            >
              {size.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase">
                  Most Popular
                </div>
              )}
              <size.icon size={28} strokeWidth={1.5} className="mx-auto mb-3 text-primary" />
              <p className="font-display text-3xl text-foreground mb-1">{size.capacity}</p>
              <p className="font-body text-sm font-medium text-foreground mb-2">{size.label}</p>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-5">{size.desc}</p>
              <p className="font-display text-xl text-foreground mb-4">{size.price}</p>
              <a
                href="#shop"
                className="inline-block w-full py-3 bg-primary text-primary-foreground font-body text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyingGuide;
