import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Flame } from "lucide-react";
import recipeBiryani from "@/assets/recipe-biryani.jpg";
import recipeButterChicken from "@/assets/recipe-butterchicken.jpg";
import recipeBread from "@/assets/recipe-bread.jpg";

const recipes = [
  {
    image: recipeBiryani,
    title: "Hyderabadi Dum Biryani",
    time: "90 min",
    difficulty: "Medium",
    desc: "Layer basmati rice over spiced meat, seal the lid, and let the Bestow Dutch Oven do the work. The heavy lid traps steam for perfect dum — every grain separate, every bite flavourful.",
  },
  {
    image: recipeButterChicken,
    title: "Butter Chicken",
    time: "60 min",
    difficulty: "Easy",
    desc: "Sear chicken directly in the pot, add your makhani gravy, and simmer on low. The even heat means no stirring every 2 minutes — just a rich, creamy curry ready to serve at the table.",
  },
  {
    image: recipeBread,
    title: "No-Knead Artisan Bread",
    time: "45 min + overnight",
    difficulty: "Easy",
    desc: "Drop the dough in, put the lid on, and bake at 230°C. The sealed lid creates bakery-level steam for a crackling golden crust. No fancy equipment needed.",
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
            Cook With Bestow
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            What will you make first?
          </h2>
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
          >
            Get Your Bestow & Start Cooking
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RecipeSection;
