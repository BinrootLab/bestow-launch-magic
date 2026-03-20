import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Is Bestow cookware too heavy for daily use?", a: "Our heavy-gauge cast iron is intentionally dense to provide superior thermal mass. This weight is the \"engineering secret\" to professional heat retention and even distribution, ensuring your food never burns and stays warm from stovetop to table." },
  { q: "Is the enamel coating truly non-toxic?", a: "Yes. Bestow is Lead, Cadmium, PFOA, and PTFE-free. Our triple-layer porcelain is molecularly fused at 800°C to create a non-reactive, glass-hard surface that is as safe as it is beautiful." },
  { q: "Can I use Bestow on my induction cooktop?", a: "Absolutely. Bestow is stovetop agnostic. The solid cast iron core is naturally magnetic, making it exceptionally efficient on induction, gas, electric, and ceramic glass surfaces." },
  { q: "Why should I choose Bestow over cheaper alternatives?", a: "You are investing in 115 years of Brazilian mastery. While standard pots may chip or fade, Bestow is engineered with dual-layer fade-resistant enamel and backed by a 10-year quality guarantee." },
  { q: "Is Bestow safe for high-heat cooking?", a: "While our cast iron core can withstand temperatures up to 260°C (500°F), we recommend cooking on low to medium heat. Because of its superior thermal density, the pot stores energy quickly and evenly." },
  { q: "Do I ever need to \"season\" the enamel?", a: "No. Unlike raw cast iron, our triple-fused porcelain enamel provides a naturally non-reactive, rust-proof surface that requires no seasoning. It is ready to use immediately." },
  { q: "What makes Bestow \"Non-Toxic\" compared to others?", a: "Many traditional non-stick pans use PTFE (Teflon) or PFAS (forever chemicals) that can release harmful fumes above 260°C. Bestow is free from PFOA, PTFE, Lead, and Cadmium." },
  { q: "Can I cook acidic foods like tomato or wine?", a: "Absolutely. Bestow's non-reactive enamel creates a protective shield, allowing you to simmer slow-cooked tomato gravies and wine-based stews without any metallic transfer." },
  { q: "Is it safe for my glass-top induction stove?", a: "Yes. Its smooth, glass-like enamel bottom is specifically engineered to be gentler on glass cooktops than raw, textured iron. Pro-Tip: Always lift the pot rather than dragging it." },
];

interface FAQSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const FAQSection = ({ isOpen, onClose }: FAQSectionProps) => {
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
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Frequently Asked Questions</h2>
                <p className="font-body text-xs text-muted-foreground mt-1">Expert answers for your Bestow queries</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                    <AccordionTrigger className="font-display text-base md:text-lg text-foreground text-left hover:text-brand-burgundy py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground font-light leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FAQSection;
