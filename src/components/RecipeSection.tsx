import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Flame } from "lucide-react";
import recipeBiryani from "@/assets/recipe-biryani.jpg";
import recipeButterChicken from "@/assets/recipe-butterchicken.jpg";
import recipeBread from "@/assets/recipe-bread.jpg";

const recipes = [
  {
    image: recipeBiryani,
    title: "The Signature Biryani",
    time: "90 min",
    difficulty: "Medium",
    desc: "Perfectly even heat distribution for the ultimate bottom-crust (tahdig). Every grain separate, every bite flavourful.",
  },
  {
    image: recipeButterChicken,
    title: "The 5-Hour Braise",
    time: "5 hours",
    difficulty: "Easy",
    desc: "Experience the magic of nutrient-lock walls and fall-apart tenderness. Slow-cooked to perfection in your Bestow.",
  },
  {
    image: recipeBread,
    title: "The Artisan Loaf",
    time: "45 min + overnight",
    difficulty: "Easy",
    desc: "Turn your oven into a professional bakery with 500°F heat resilience. A crackling golden crust, every time.",
  },
];

const RecipeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Culinary Inspiration
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Master the Art of the Slow Simmer.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light max-w-xl mx-auto">
            High-performance cooking made simple. Explore our collection of signature recipes for the modern healthy kitchen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, i) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center gap-1.5 font-body text-xs text-muted-foreground">
                  <Clock size={12} /> {recipe.time}
                </span>
                <span className="flex items-center gap-1.5 font-body text-xs text-muted-foreground">
                  <Flame size={12} /> {recipe.difficulty}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{recipe.title}</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{recipe.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Explore the Recipes
          </a>
          <p className="font-body text-xs text-muted-foreground mt-4 italic">
            Professional Mastery. Crafted for Your Kitchen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RecipeSection;
