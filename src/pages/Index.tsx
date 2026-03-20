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
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WidgetBar from "@/components/WidgetBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyBestow />
      <GlobalBenchmark />
      <CollectionIntro />
      <BrandStory />
      <LifestyleCooking />
      <ColorStory />
      <ComparisonSection />
      <BuyingGuide />
      <ProductShowcase />
      <FinalCTA />
      <WidgetBar />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
