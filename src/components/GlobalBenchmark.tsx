import { motion, useInView, useAnimation, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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

const GlobalBenchmark = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollToIndex = useCallback((index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const containerWidth = container.offsetWidth;
      const cardLeft = card.offsetLeft;
      const scrollPos = cardLeft - 24; // 24px left padding
      container.scrollTo({ left: scrollPos, behavior: "smooth" });
      setActiveIndex(index);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || isDragging.current) return;
    const container = containerRef.current;
    const cards = Array.from(container.children) as HTMLElement[];
    const scrollPos = container.scrollLeft + 24;
    
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - scrollPos);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  const handlePrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const handleNext = () => scrollToIndex(Math.min(reviews.length - 1, activeIndex + 1));

  // Touch/mouse drag
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-20 md:py-28 bg-foreground text-primary-foreground overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-light text-brand-cotton mb-4 leading-[1.1]">
            Loved in Kitchens Around the World
          </h2>
          <p className="font-body text-sm md:text-base text-brand-sky/80 font-light max-w-lg mx-auto leading-relaxed">
            Built on 115 years of craftsmanship, designed for performance that lasts.
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="font-display text-xl text-brand-cotton">4.9</span>
            <span className="font-body text-[11px] text-brand-sky/60 tracking-wide">
              from 2,847 reviews
            </span>
          </div>
        </motion.div>
      </div>

      {/* Review Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="flex gap-5 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[380px] lg:w-[400px] snap-start select-none"
            >
              <div className="bg-brand-sky/[0.04] border border-brand-sky/10 p-6 md:p-7 h-full relative group hover:bg-brand-sky/[0.08] transition-colors duration-300">
                <Quote size={18} className="text-brand-sky/15 absolute top-5 right-5" />
                
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={12} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Title & Text */}
                <h4 className="font-display text-base md:text-lg text-brand-sky mb-2 leading-snug">
                  {review.title}
                </h4>
                <p className="font-body text-sm text-brand-sky/75 leading-relaxed font-light mb-5 italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="border-t border-brand-sky/10 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm font-medium text-brand-cotton">{review.name}</p>
                    <p className="font-body text-[11px] text-brand-sky/50">{review.location}</p>
                  </div>
                  {review.verified && (
                    <span className="font-body text-[9px] tracking-[0.15em] uppercase text-brand-olive bg-brand-olive/10 px-2 py-0.5">
                      Verified
                    </span>
                  )}
                </div>
                <p className="font-body text-[10px] text-brand-sky/40 mt-2">{review.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-brand-burgundy"
                    : "w-1.5 bg-brand-sky/30 hover:bg-brand-sky/50"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-9 h-9 border border-brand-sky/20 flex items-center justify-center text-brand-cotton hover:bg-brand-sky/10 disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-200 active:scale-95"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === reviews.length - 1}
              className="w-9 h-9 border border-brand-sky/20 flex items-center justify-center text-brand-cotton hover:bg-brand-sky/10 disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-200 active:scale-95"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GlobalBenchmark;
