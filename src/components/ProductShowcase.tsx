import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import productNavy from "@/assets/product-navy-dutch-oven.jpg";
import productRedSkillet from "@/assets/product-red-skillet.jpg";
import productBlack from "@/assets/product-black-casserole.jpg";
import productRed from "@/assets/product-red-dutch-oven.jpg";

const products = [
  {
    image: productRed,
    title: "Bestow Round Dutch Oven",
    price: 12999,
    sizes: ["20cm", "24cm", "28cm"],
    colors: [
      { name: "Deep Red", value: "#7A1B1B" },
      { name: "Navy", value: "#1B2D5A" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    image: productNavy,
    title: "Bestow Oval Dutch Oven",
    price: 14999,
    sizes: ["25cm", "29cm", "33cm"],
    colors: [
      { name: "Navy", value: "#1B2D5A" },
      { name: "Deep Red", value: "#7A1B1B" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    image: productRedSkillet,
    title: "Bestow Enameled Skillet",
    price: 8999,
    sizes: ["23cm", "26cm", "30cm"],
    colors: [
      { name: "Deep Red", value: "#7A1B1B" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    image: productBlack,
    title: "Bestow Casserole Dish",
    price: 10999,
    sizes: ["22cm", "26cm"],
    colors: [
      { name: "Matte Black", value: "#2A2A2A" },
      { name: "Navy", value: "#1B2D5A" },
      { name: "Deep Red", value: "#7A1B1B" },
    ],
  },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="shop" className="py-24 md:py-40 bg-brand-warm" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Shop Bestow
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
