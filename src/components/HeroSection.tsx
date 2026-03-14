import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-steam.jpg";

const trustBadges = [
  { icon: ShieldCheck, label: "Healthy Non-Toxic" },
  { icon: Leaf, label: "PFAS / PFOA / PTFE Free" },
  { icon: Award, label: "Professional Grade" },
  { icon: Clock, label: "Built for a Lifetime" },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bestow Enameled Cast Iron Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/60" />
      </div>

      {/* Animated steam particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 rounded-full bg-brand-cotton/20"
            style={{
              left: `${40 + i * 4}%`,
              bottom: "30%",
              height: `${40 + i * 15}px`,
            }}
            animate={{
              y: [0, -120, -200],
              opacity: [0, 0.6, 0],
              scaleX: [1, 1.5, 2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-brand-sky mb-6"
        >
          Tramontina presents
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-brand-cotton mb-6 tracking-tight leading-[1.1]"
        >
          Cast Iron, Beautifully Bestowed.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-lg md:text-xl text-brand-sky mb-2 font-light max-w-2xl mx-auto italic"
        >
          115 years of Brazilian craftsmanship come together in Bestow, Tramontina's signature cast iron collection.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-base md:text-lg text-brand-sky mb-8 font-light max-w-xl mx-auto leading-relaxed"
        >
          Lead-free, PFOA-free, and induction-ready — the vibrant soul of the modern healthy kitchen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#shop"
            className="px-10 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[200px]"
          >
            Shop the Collection
          </a>
          <a
            href="#palette"
            className="px-10 py-4 border border-brand-sky/40 text-brand-cotton font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/10 transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
            Choose Your Colour
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <badge.icon size={16} strokeWidth={1.5} className="text-brand-sky" />
              <span className="font-body text-[10px] tracking-[0.15em] uppercase text-brand-sky/80">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-brand-sky/40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
