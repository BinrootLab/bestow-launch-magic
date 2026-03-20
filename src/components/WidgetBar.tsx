import { useState } from "react";
import { HelpCircle, Sparkles, ChefHat } from "lucide-react";
import FAQSection from "./FAQSection";
import CareSection from "./CareSection";
import RecipeSection from "./RecipeSection";

const WidgetBar = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  const [careOpen, setCareOpen] = useState(false);
  const [recipeOpen, setRecipeOpen] = useState(false);

  return (
    <>
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-8">
            Quick Access
          </p>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <button
              onClick={() => setFaqOpen(true)}
              className="flex flex-col items-center gap-3 p-6 border border-border bg-card hover:bg-brand-burgundy hover:text-accent-foreground hover:border-brand-burgundy group transition-all duration-300 active:scale-[0.97]"
            >
              <HelpCircle size={22} strokeWidth={1.5} className="text-brand-burgundy group-hover:text-accent-foreground transition-colors" />
              <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground group-hover:text-accent-foreground transition-colors">FAQ</span>
            </button>
            <button
              onClick={() => setCareOpen(true)}
              className="flex flex-col items-center gap-3 p-6 border border-border bg-card hover:bg-brand-olive hover:text-card hover:border-brand-olive group transition-all duration-300 active:scale-[0.97]"
            >
              <Sparkles size={22} strokeWidth={1.5} className="text-brand-olive group-hover:text-card transition-colors" />
              <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground group-hover:text-card transition-colors">Care Tips</span>
            </button>
            <button
              onClick={() => setRecipeOpen(true)}
              className="flex flex-col items-center gap-3 p-6 border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary group transition-all duration-300 active:scale-[0.97]"
            >
              <ChefHat size={22} strokeWidth={1.5} className="text-primary group-hover:text-primary-foreground transition-colors" />
              <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground group-hover:text-primary-foreground transition-colors">Recipes</span>
            </button>
          </div>
        </div>
      </section>

      <FAQSection isOpen={faqOpen} onClose={() => setFaqOpen(false)} />
      <CareSection isOpen={careOpen} onClose={() => setCareOpen(false)} />
      <RecipeSection isOpen={recipeOpen} onClose={() => setRecipeOpen(false)} />
    </>
  );
};

export default WidgetBar;
