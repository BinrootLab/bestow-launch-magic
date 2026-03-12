import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "I slow-cook dal in my Bestow every single day. The heat is so even, nothing sticks and the flavour is unreal. This is my forever pot.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    location: "Bangalore",
    text: "I bake sourdough in the Dutch Oven every weekend. The crust comes out golden and crackling — better than any bakery. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Kavita Reddy",
    location: "Hyderabad",
    text: "Made dum biryani for 12 people in the 6.6L. Cooked perfectly, served it straight on the table. Everyone asked where I got it.",
    rating: 5,
  },
];

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Trusted Worldwide
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Loved by millions of happy families
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-4 max-w-xl mx-auto">
            Tramontina cookware is used in over 150 million homes across 120+ countries. Here's what Indian home cooks are saying about Bestow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-background p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-body text-sm font-medium text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
          >
            Join the Bestow Family
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
