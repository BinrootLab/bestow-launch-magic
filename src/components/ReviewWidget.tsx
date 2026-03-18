import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    title: "My forever pot",
    text: "I slow-cook dal in my Bestow every single day. The heat is so even, nothing sticks and the flavour is unreal. This is my forever pot.",
    verified: true,
    product: "Bestow Round Dutch Oven — 5.2L",
  },
  {
    name: "Arjun Mehta",
    location: "Bangalore",
    rating: 5,
    title: "Better than any bakery",
    text: "I bake sourdough in the Dutch Oven every weekend. The crust comes out golden and crackling — better than any bakery. Worth every rupee.",
    verified: true,
    product: "Bestow Round Dutch Oven — 6.6L",
  },
  {
    name: "Kavita Reddy",
    location: "Hyderabad",
    rating: 5,
    title: "Everyone asked where I got it",
    text: "Made dum biryani for 12 people in the 6.6L. Cooked perfectly, served it straight on the table. Everyone asked where I got it.",
    verified: true,
    product: "Bestow Oval Dutch Oven — 6.6L",
  },
  {
    name: "Rohit Patel",
    location: "Ahmedabad",
    rating: 5,
    title: "The weight makes all the difference",
    text: "Was hesitant about the weight at first, but once I started cooking, the heat retention is incredible. My stews have never tasted this deep.",
    verified: true,
    product: "Bestow Braiser — 3.8L",
  },
  {
    name: "Sneha Iyer",
    location: "Chennai",
    rating: 5,
    title: "Beautiful and functional",
    text: "The Cactus Green colour is stunning on the dining table. We serve our Sunday curries directly in it. Looks gorgeous, cooks even better.",
    verified: true,
    product: "Bestow Round Dutch Oven — 5.2L",
  },
  {
    name: "Vikram Singh",
    location: "Delhi",
    rating: 5,
    title: "Professional quality at home",
    text: "As a home chef, I've used many brands. Nothing comes close to the heat control of Bestow. Searing, braising, baking — it does everything.",
    verified: true,
    product: "Bestow Enameled Skillet — 30cm",
  },
];

const overallRating = 4.9;
const totalReviews = 2847;

const ReviewWidget = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

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
            Customer Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Loved by Home Cooks Across India.
          </h2>
        </motion.div>

        {/* Overall Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-5xl text-foreground">{overallRating}</span>
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.round(overallRating) ? "fill-brand-gold text-brand-gold" : "text-border"}
                  />
                ))}
              </div>
              <span className="font-body text-xs text-muted-foreground mt-1">
                Based on {totalReviews.toLocaleString()} reviews
              </span>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="flex flex-col gap-1.5 mt-4 w-full max-w-xs">
            {[
              { stars: 5, pct: 89 },
              { stars: 4, pct: 8 },
              { stars: 3, pct: 2 },
              { stars: 2, pct: 1 },
              { stars: 1, pct: 0 },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-2">
                <span className="font-body text-xs text-muted-foreground w-8">{row.stars}★</span>
                <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-gold rounded-full transition-all duration-700"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="font-body text-xs text-muted-foreground w-8 text-right">{row.pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentReviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-background p-8 border border-border relative"
            >
              <Quote size={24} className="text-border absolute top-6 right-6" />
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <h4 className="font-display text-lg text-foreground mb-2">{review.title}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light mb-6 italic">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{review.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{review.location}</p>
                  </div>
                  {review.verified && (
                    <span className="font-body text-[10px] tracking-[0.1em] uppercase text-primary bg-primary/10 px-2 py-1">
                      Verified
                    </span>
                  )}
                </div>
                <p className="font-body text-[11px] text-muted-foreground mt-2">{review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 border border-border text-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-8 h-8 font-body text-xs transition-colors ${
                  i === currentPage
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 border border-border text-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Join the Bestow Family
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewWidget;
