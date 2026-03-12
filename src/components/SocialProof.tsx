import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The heat retention is extraordinary. My slow-cooked dal has never tasted better. This is a generational investment.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    location: "Bangalore",
    text: "I was sceptical at the price point, but after using the Dutch Oven daily for 3 months, I'm convinced. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Kavita Reddy",
    location: "Hyderabad",
    text: "Beautiful enough to serve at the table, tough enough for everyday cooking. The crimson red is absolutely stunning.",
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
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            What People Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Loved by home cooks across India
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default SocialProof;
