import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyBestow from "@/components/WhyBestow";
import ReviewWidget from "@/components/ReviewWidget";
import GlobalBenchmark from "@/components/GlobalBenchmark";
import CollectionIntro from "@/components/CollectionIntro";
import BrandStory from "@/components/BrandStory";
import LifestyleCooking from "@/components/LifestyleCooking";
import ColorStory from "@/components/ColorStory";
import ComparisonSection from "@/components/ComparisonSection";
import BuyingGuide from "@/components/BuyingGuide";
import ProductShowcase from "@/components/ProductShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import FAQSection from "@/components/FAQSection";
import CareSection from "@/components/CareSection";
import RecipeSection from "@/components/RecipeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyBestow />
      <ReviewWidget />
      <GlobalBenchmark />
      <CollectionIntro />
      <BrandStory />
      <LifestyleCooking />
      <ColorStory />
      <ComparisonSection />
      <BuyingGuide />
      <ProductShowcase />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      {/* Floating widget buttons */}
      <FAQSection />
      <CareSection />
      <RecipeSection />
    </div>
  );
};

export default Index;
