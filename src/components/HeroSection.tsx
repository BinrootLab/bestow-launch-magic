import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cookware.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bestow Enameled Cast Iron Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/50" />
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
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-brand-cotton mb-6 tracking-tight"
        >
          Introducing Bestow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-base md:text-lg text-brand-sky mb-10 font-light max-w-xl mx-auto leading-relaxed"
        >
          The globally acclaimed enamel cast iron range arrives in India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#shop"
            className="px-10 py-4 bg-brand-cotton text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/90 transition-colors min-w-[200px]"
          >
            Shop Bestow
          </a>
          <a
            href="#collection"
            className="px-10 py-4 border border-brand-sky/40 text-brand-cotton font-body text-xs tracking-[0.2em] uppercase hover:bg-brand-cotton/10 transition-colors min-w-[200px]"
          >
            Discover the Collection
          </a>
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
