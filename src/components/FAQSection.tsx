import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Bestow cookware too heavy for daily use?",
    a: "Our heavy-gauge cast iron is intentionally dense to provide superior thermal mass. This weight is the \"engineering secret\" to professional heat retention and even distribution, ensuring your food never burns and stays warm from stovetop to table.",
  },
  {
    q: "Is the enamel coating truly non-toxic?",
    a: "Yes. Bestow is Lead, Cadmium, PFOA, and PTFE-free. Our triple-layer porcelain is molecularly fused at 800°C to create a non-reactive, glass-hard surface that is as safe as it is beautiful.",
  },
  {
    q: "Can I use Bestow on my induction cooktop?",
    a: "Absolutely. Bestow is stovetop agnostic. The solid cast iron core is naturally magnetic, making it exceptionally efficient on induction, gas, electric, and ceramic glass surfaces.",
  },
  {
    q: "Why should I choose Bestow over cheaper alternatives?",
    a: "You are investing in 115 years of Brazilian mastery. While standard pots may chip or fade, Bestow is engineered with dual-layer fade-resistant enamel and backed by a 10-year quality guarantee. It's the difference between a temporary tool and a lifelong heirloom.",
  },
  {
    q: "Is Bestow safe for high-heat cooking?",
    a: "While our cast iron core can withstand temperatures up to 260°C (500°F), we recommend cooking on low to medium heat. Because of its superior thermal density, the pot stores energy quickly and evenly, requiring less heat to achieve a perfect sear.",
  },
  {
    q: "Do I ever need to \"season\" the enamel?",
    a: "No. Unlike raw cast iron, our triple-fused porcelain enamel provides a naturally non-reactive, rust-proof surface that requires no seasoning. It is ready to use immediately.",
  },
  {
    q: "What makes Bestow \"Non-Toxic\" compared to others?",
    a: "Many traditional non-stick pans use PTFE (Teflon) or PFAS (forever chemicals) that can release harmful fumes above 260°C. Bestow is free from PFOA, PTFE, Lead, and Cadmium.",
  },
  {
    q: "Can I cook acidic foods like tomato or wine?",
    a: "Absolutely. Bestow's non-reactive enamel creates a protective shield, allowing you to simmer slow-cooked tomato gravies and wine-based stews without any metallic transfer.",
  },
  {
    q: "Is it safe for my glass-top induction stove?",
    a: "Yes. Its smooth, glass-like enamel bottom is specifically engineered to be gentler on glass cooktops than raw, textured iron. Pro-Tip: Always lift the pot rather than dragging it.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 bg-card" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Expert Answers
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            The Bestow FAQ.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light">
            Professional clarity for the modern home kitchen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-lg text-foreground text-left hover:text-primary py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground font-light leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
