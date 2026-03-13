import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import FeaturesSection from "@/components/FeaturesSection";
import CraftsmanshipStory from "@/components/CraftsmanshipStory";
import LifestyleCooking from "@/components/LifestyleCooking";
import SocialProof from "@/components/SocialProof";
import CareSection from "@/components/CareSection";
import ColorStory from "@/components/ColorStory";
import ComparisonSection from "@/components/ComparisonSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProductShowcase from "@/components/ProductShowcase";
import BuyingGuide from "@/components/BuyingGuide";
import RecipeSection from "@/components/RecipeSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <FeaturesSection />
      <CraftsmanshipStory />
      <LifestyleCooking />
      <ColorStory />
      <ComparisonSection />
      <BuyingGuide />
      <ProductShowcase />
      <SocialProof />
      <CareSection />
      <AuthoritySection />
      <RecipeSection />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
