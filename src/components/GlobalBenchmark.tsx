import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Medal, Crown, Star, Gem, Shield, Globe, Flame, Heart, Sparkles, BadgeCheck, Ribbon, Target, Zap } from "lucide-react";

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

const GlobalBenchmark = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-sky mb-4">
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
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-brand-sky/10 rounded-sm">
                <award.icon size={20} strokeWidth={1.5} className="text-brand-sky" />
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
      <div className="relative">
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
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-brand-sky/10 rounded-sm">
                <award.icon size={20} strokeWidth={1.5} className="text-brand-sky" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-sm text-brand-cotton leading-snug">{award.title}</p>
                <p className="font-body text-[10px] tracking-[0.1em] uppercase text-brand-sky/70 mt-1">{award.year} · {award.category}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mt-16"
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
