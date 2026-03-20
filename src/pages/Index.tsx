import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyBestow from "@/components/WhyBestow";
import GlobalBenchmark from "@/components/GlobalBenchmark";
import CollectionIntro from "@/components/CollectionIntro";
import BrandStory from "@/components/BrandStory";
import LifestyleCooking from "@/components/LifestyleCooking";
import ColorStory from "@/components/ColorStory";
import ComparisonSection from "@/components/ComparisonSection";
import BuyingGuide from "@/components/BuyingGuide";
import ProductShowcase from "@/components/ProductShowcase";
import ReviewWidget from "@/components/ReviewWidget";
import FAQSection from "@/components/FAQSection";
import CareSection from "@/components/CareSection";
import RecipeSection from "@/components/RecipeSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

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
      <FAQSection />
      <CareSection />
      <RecipeSection />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
