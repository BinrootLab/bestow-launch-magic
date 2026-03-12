import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface ProductProps {
  images: string[];
  title: string;
  price: number;
  sizes: string[];
  colors: { name: string; value: string }[];
}

const ProductCard = ({ images, title, price, sizes, colors }: ProductProps) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [currentImage, setCurrentImage] = useState(0);

  const handleAddToCart = () => {
    toast.success(`${title} (${selectedSize}, ${selectedColor}) added to cart`);
  };

  const handleBuyNow = () => {
    toast.success(`Proceeding to checkout for ${title}`);
  };

  const prevImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      {/* Image Carousel */}
      <div className="aspect-square overflow-hidden bg-secondary mb-5 relative">
        <img
          src={images[currentImage]}
          alt={`${title} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {images.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronLeft size={14} className="text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronRight size={14} className="text-foreground" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImage ? "bg-foreground w-3" : "bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <h3 className="font-display text-xl text-foreground mb-1">{title}</h3>
      <p className="font-body text-sm text-muted-foreground mb-4">₹{price.toLocaleString("en-IN")}</p>

      {/* Size selector */}
      <div className="mb-3">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Size</p>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1.5 font-body text-xs border transition-colors ${
                selectedSize === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color swatches */}
      <div className="mb-5">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Color</p>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-7 h-7 rounded-full border-2 transition-all ${
                selectedColor === color.name ? "border-primary scale-110" : "border-transparent"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-1.5 px-2 py-3 border border-primary text-primary font-body text-[10px] tracking-[0.1em] uppercase whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ShoppingBag size={12} />
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 px-2 py-3 bg-primary text-primary-foreground font-body text-[10px] tracking-[0.1em] uppercase whitespace-nowrap hover:bg-primary/90 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
