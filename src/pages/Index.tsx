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

import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
      
      <FinalCTA />
      <WidgetBar />
      <Footer />
      
    </div>
  );
};

export default Index;
