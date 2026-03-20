import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import recipeBiryani from "@/assets/recipe-biryani.jpg";
import recipeButterChicken from "@/assets/recipe-butterchicken.jpg";
import recipeBread from "@/assets/recipe-bread.jpg";
import galleryPlated from "@/assets/gallery-plated.jpg";

const recipes = [
  { image: recipeButterChicken, title: "The Slow Braise", desc: "Fall-apart tenderness, rich flavours that deepen over time.", tip: "Use low heat and let the cast iron do the work. The heavy lid traps moisture for a self-basting effect." },
  { image: recipeBiryani, title: "The Signature Biryani", desc: "Even heat for the perfect bottom crust and layered flavour.", tip: "Layer rice and meat alternately, seal the lid with dough for the perfect dum. Bestow's heat retention makes it ideal." },
  { image: recipeBread, title: "The Artisan Loaf", desc: "Crisp crust, soft centre — bakery-quality at home.", tip: "Preheat the Dutch Oven for 30 minutes. The enclosed environment creates steam for a professional crust." },
  { image: galleryPlated, title: "The Family Stew", desc: "Clean, pure cooking for meals that bring everyone together.", tip: "Brown the meat first, deglaze with wine, then slow-cook. The non-reactive enamel preserves pure flavours." },
];

interface RecipeSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecipeSection = ({ isOpen, onClose }: RecipeSectionProps) => {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const goNext = () => setCurrentRecipe((p) => (p === recipes.length - 1 ? 0 : p + 1));
  const goPrev = () => setCurrentRecipe((p) => (p === 0 ? recipes.length - 1 : p - 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-full max-w-xl max-h-[700px] h-full bg-card flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground">Culinary Inspiration</h2>
                  <p className="font-body text-xs text-muted-foreground mt-1">Recipe {currentRecipe + 1} of {recipes.length}</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRecipe}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={recipes[currentRecipe].image} alt={recipes[currentRecipe].title} className="w-full h-[240px] md:h-[300px] object-cover" />
                    <div className="p-6">
                      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">{recipes[currentRecipe].title}</h3>
                      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-4">{recipes[currentRecipe].desc}</p>
                      <div className="p-4 bg-background border border-border">
                        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brand-olive mb-2">Bestow Tip</p>
                        <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{recipes[currentRecipe].tip}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-border">
                <button onClick={goPrev} className="flex items-center gap-2 px-4 py-2 border border-border text-foreground hover:bg-brand-burgundy hover:text-accent-foreground hover:border-brand-burgundy transition-colors text-sm font-body">
                  <ChevronLeft size={16} /> Previous
                </button>
                <div className="flex gap-1.5">
                  {recipes.map((_, i) => (
                    <button key={i} onClick={() => setCurrentRecipe(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentRecipe ? "bg-brand-burgundy w-4" : "bg-border"}`} />
                  ))}
                </div>
                <button onClick={goNext} className="flex items-center gap-2 px-4 py-2 border border-border text-foreground hover:bg-brand-burgundy hover:text-accent-foreground hover:border-brand-burgundy transition-colors text-sm font-body">
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RecipeSection;
