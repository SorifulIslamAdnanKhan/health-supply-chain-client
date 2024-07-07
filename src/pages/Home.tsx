import AboutSection from "@/components/AboutSection";
import FAQsSection from "@/components/FAQsSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Organizations from "@/components/Organizations";
import SupplySection from "@/components/SupplySection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SupplySection />
      <GallerySection />
      <TestimonialsSection />
      <TeamSection />
      <Organizations />
      <FAQsSection />
    </>
  );
};

export default Home;
