import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import productNavy from "@/assets/product-navy-dutch-oven.jpg";
import productRedSkillet from "@/assets/product-red-skillet.jpg";
import productBlack from "@/assets/product-black-casserole.jpg";
import productRed from "@/assets/product-red-dutch-oven.jpg";
import heroSteam from "@/assets/hero-steam.jpg";
import enamelCloseup from "@/assets/enamel-closeup.jpg";
import lidCondensation from "@/assets/lid-condensation.jpg";
import lifestyleCooking from "@/assets/lifestyle-cooking.jpg";
import lifestyleTable from "@/assets/lifestyle-table.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryPlated from "@/assets/gallery-plated.jpg";

const products = [
  {
    images: [productRed, enamelCloseup, lifestyleCooking, lidCondensation],
    title: "Bestow Round Dutch Oven",
    price: 12999,
    sizes: ["3.3L", "5.2L", "6.6L"],
    colors: [
      { name: "Deep Red", value: "#7A1B1B" },
      { name: "Navy", value: "#1B2D5A" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    images: [productNavy, heroSteam, galleryDetail, lifestyleTable],
    title: "Bestow Oval Dutch Oven",
    price: 14999,
    sizes: ["3.3L", "5.2L", "6.6L"],
    colors: [
      { name: "Navy", value: "#1B2D5A" },
      { name: "Deep Red", value: "#7A1B1B" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    images: [productRedSkillet, galleryKitchen, enamelCloseup, galleryPlated],
    title: "Bestow Enameled Skillet",
    price: 8999,
    sizes: ["23cm", "26cm", "30cm"],
    colors: [
      { name: "Deep Red", value: "#7A1B1B" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    images: [productBlack, lidCondensation, lifestyleTable, heroSteam],
    title: "Bestow Casserole Dish",
    price: 10999,
    sizes: ["3.3L", "5.2L"],
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
    <section id="shop" className="py-24 md:py-40 bg-background" ref={ref}>
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
