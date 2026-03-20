import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Utensils, HandMetal, Thermometer, Sparkles, SprayCan, Droplets } from "lucide-react";

const careSteps = [
  { icon: Flame, number: "01", title: "Cook on Gentle Heat", desc: "Bestow retains heat efficiently — low to medium heat is all you need." },
  { icon: Utensils, number: "02", title: "Use the Right Tools", desc: "Stick to wooden, silicone, or nylon utensils to protect the enamel." },
  { icon: HandMetal, number: "03", title: "Wash with Care", desc: "Hand wash with mild soap and a soft sponge to preserve its finish." },
  { icon: Thermometer, number: "04", title: "Let It Cool", desc: "Allow your cookware to cool before cleaning to maintain durability." },
];

const proTips = [
  { icon: Sparkles, title: "For Stains", desc: "Soak with warm water and baking soda." },
  { icon: SprayCan, title: "Avoid Sprays", desc: "Use oil or butter instead." },
  { icon: Droplets, title: "Dry Well", desc: "Always dry before storing." },
];

interface CareSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const CareSection = ({ isOpen, onClose }: CareSectionProps) => {
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
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl bg-card z-50 flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Care Tips</h2>
                <p className="font-body text-xs text-muted-foreground mt-1">Simple care for lasting performance</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-5 mb-8">
                {careSteps.map((step) => (
                  <div key={step.title} className="flex items-start gap-4 p-5 border border-border bg-background">
                    <div className="w-10 h-10 flex items-center justify-center text-brand-olive flex-shrink-0">
                      <step.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-body text-[10px] text-muted-foreground">{step.number}</span>
                        <h3 className="font-display text-lg text-foreground">{step.title}</h3>
                      </div>
                      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="font-display text-xl text-foreground mb-5 text-center">Pro Tips</h3>
                <div className="space-y-4">
                  {proTips.map((tip) => (
                    <div key={tip.title} className="flex items-start gap-3">
                      <tip.icon size={18} strokeWidth={1.5} className="text-brand-olive flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-body text-sm font-medium text-foreground">{tip.title}</h4>
                        <p className="font-body text-sm text-muted-foreground font-light">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CareSection;
