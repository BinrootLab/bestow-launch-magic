import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl tracking-widest uppercase text-foreground">
          Tramontina
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a href="#story" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Story
          </a>
          <a href="#features" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#collection" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Collection
          </a>
          <a href="#shop" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-foreground hover:text-accent transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-body font-medium rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {["Story", "Features", "Collection", "Shop"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
