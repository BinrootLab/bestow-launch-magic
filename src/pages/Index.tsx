import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import FeaturesSection from "@/components/FeaturesSection";
import LifestyleGallery from "@/components/LifestyleGallery";
import ProductShowcase from "@/components/ProductShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <FeaturesSection />
      <LifestyleGallery />
      <ProductShowcase />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
