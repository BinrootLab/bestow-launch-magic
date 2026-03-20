import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Trophy, Medal, Crown, Star, Gem, Shield, Globe, Flame, Heart, Sparkles, BadgeCheck, Ribbon, Target, Zap, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Red Dot Design Award", year: "2023", category: "Product Design" },
  { icon: Award, title: "iF Design Award", year: "2022", category: "Kitchen & Household" },
  { icon: Medal, title: "Good Housekeeping Seal", year: "2023", category: "Cookware Excellence" },
  { icon: Crown, title: "German Design Award", year: "2021", category: "Excellent Product Design" },
  { icon: Star, title: "Best Cookware Brand", year: "2023", category: "Consumer Choice" },
  { icon: Shield, title: "FDA Compliant", year: "Certified", category: "Safety Standard" },
  { icon: Globe, title: "ISO 9001 Certified", year: "Since 2005", category: "Quality Management" },
  { icon: Gem, title: "Brazil Export Award", year: "2022", category: "National Excellence" },
  { icon: Flame, title: "Chef's Choice Award", year: "2023", category: "Professional Cookware" },
  { icon: Heart, title: "Eco-Friendly Certified", year: "2023", category: "Sustainability" },
  { icon: Sparkles, title: "Innovation Award", year: "2022", category: "Material Science" },
  { icon: BadgeCheck, title: "Non-Toxic Verified", year: "Certified", category: "Health & Safety" },
  { icon: Ribbon, title: "Best Cast Iron", year: "2023", category: "Cookware Category" },
  { icon: Target, title: "Precision Engineering", year: "2021", category: "Manufacturing" },
  { icon: Zap, title: "Thermal Performance", year: "2022", category: "Lab Tested" },
  { icon: Trophy, title: "Heritage Brand Award", year: "2023", category: "115 Years Legacy" },
];

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
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);

  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground overflow-hidden" ref={ref}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-olive mb-4">
            Globally Recognised
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-cotton mb-4">
            Awards & Accolades
          </h2>
          <p className="font-body text-base text-brand-sky font-light max-w-xl mx-auto">
            115 years of craft, recognised by the world's most respected institutions.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {[...awards.slice(0, 8), ...awards.slice(0, 8)].map((award, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 w-[260px] border border-brand-sky/15 bg-brand-sky/5 p-5 flex items-start gap-4 hover:bg-brand-sky/10 transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-brand-olive/15 rounded-sm">
                <award.icon size={20} strokeWidth={1.5} className="text-brand-olive" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-sm text-brand-cotton leading-snug">{award.title}</p>
                <p className="font-body text-[10px] tracking-[0.1em] uppercase text-brand-sky/70 mt-1">{award.year} · {award.category}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative mb-20">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {[...awards.slice(8, 16), ...awards.slice(8, 16)].map((award, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 w-[260px] border border-brand-sky/15 bg-brand-sky/5 p-5 flex items-start gap-4 hover:bg-brand-sky/10 transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-brand-olive/15 rounded-sm">
                <award.icon size={20} strokeWidth={1.5} className="text-brand-olive" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-sm text-brand-cotton leading-snug">{award.title}</p>
                <p className="font-body text-[10px] tracking-[0.1em] uppercase text-brand-sky/70 mt-1">{award.year} · {award.category}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-brand-cotton mb-3">
            Loved in Kitchens Around the World
          </h3>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="font-display text-2xl text-brand-cotton">4.9</span>
            <span className="font-body text-xs text-brand-sky/70">based on 2,847 reviews</span>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {currentReviews.map((review, i) => (
            <motion.div
              key={`${currentPage}-${review.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-brand-sky/5 border border-brand-sky/15 p-7 relative"
            >
              <Quote size={20} className="text-brand-sky/20 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={13} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <h4 className="font-display text-lg text-brand-cotton mb-2">{review.title}</h4>
              <p className="font-body text-sm text-brand-sky/80 leading-relaxed font-light mb-5 italic">
                "{review.text}"
              </p>
              <div className="border-t border-brand-sky/15 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-body text-sm font-medium text-brand-cotton">{review.name}</p>
                  <p className="font-body text-[11px] text-brand-sky/60">{review.location}</p>
                </div>
                {review.verified && (
                  <span className="font-body text-[10px] tracking-[0.1em] uppercase text-brand-olive bg-brand-olive/15 px-2 py-1">
                    Verified
                  </span>
                )}
              </div>
              <p className="font-body text-[10px] text-brand-sky/50 mt-2">{review.product}</p>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 border border-brand-sky/30 text-brand-cotton hover:bg-brand-sky/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-8 h-8 font-body text-xs transition-colors ${
                  i === currentPage
                    ? "bg-brand-burgundy text-brand-cotton"
                    : "border border-brand-sky/30 text-brand-sky/70 hover:text-brand-cotton"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 border border-brand-sky/30 text-brand-cotton hover:bg-brand-sky/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Shop Bestow
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalBenchmark;
