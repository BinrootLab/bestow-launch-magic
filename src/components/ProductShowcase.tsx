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
      { name: "Gradated Red", value: "#7A1B1B" },
      { name: "Medium Blue", value: "#1B2D5A" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    images: [productNavy, heroSteam, galleryDetail, lifestyleTable],
    title: "Bestow Oval Dutch Oven",
    price: 14999,
    sizes: ["3.3L", "5.2L", "6.6L"],
    colors: [
      { name: "Medium Blue", value: "#1B2D5A" },
      { name: "Gradated Red", value: "#7A1B1B" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    images: [productRedSkillet, galleryKitchen, enamelCloseup, galleryPlated],
    title: "Bestow Enameled Skillet",
    price: 8999,
    sizes: ["25cm", "30cm"],
    colors: [
      { name: "Gradated Red", value: "#7A1B1B" },
      { name: "Matte Black", value: "#2A2A2A" },
    ],
  },
  {
    images: [productBlack, lidCondensation, lifestyleTable, heroSteam],
    title: "Bestow Braiser",
    price: 10999,
    sizes: ["3.8L"],
    colors: [
      { name: "Matte Black", value: "#2A2A2A" },
      { name: "Medium Blue", value: "#1B2D5A" },
      { name: "Gradated Red", value: "#7A1B1B" },
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
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-olive mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Shop the Bestow Collection
          </h2>
          <p className="font-display text-lg md:text-xl text-muted-foreground font-light italic">
            Designed for everyday cooking. Made for moments that matter.
          </p>
          <p className="font-body text-sm text-muted-foreground font-light mt-3">
            Limited imports. Available in small batches.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrollable product strip */}
      <div className="max-w-7xl mx-auto pl-6 lg:pl-12">
        <div
          className="flex gap-6 md:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.title}
              className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[calc(25%-1.5rem)] snap-start"
            >
              <ProductCard {...product} />
            </div>
          ))}
          {/* Spacer for the partial peek on the right */}
          <div className="flex-shrink-0 w-6 lg:w-12" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
