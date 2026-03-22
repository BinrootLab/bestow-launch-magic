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
    bestSeller: true,
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
    bestSeller: true,
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

const CollectionIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collection" className="py-24 md:py-40 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Find Your Bestow
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Timeless cast iron. Vibrant design. 100% toxin-free enamel.
          </h2>
          <p className="font-body text-base text-muted-foreground font-light mt-2">
            From Tramontina — Trusted Worldwide Since 1911
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground">
            Discover the Bestow Collection..
          </h3>
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

export default CollectionIntro;
