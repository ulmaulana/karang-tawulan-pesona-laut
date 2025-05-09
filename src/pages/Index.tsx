
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import TourPackages from "@/components/home/TourPackages";
import ProductPreview from "@/components/home/ProductPreview";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <FeaturedDestinations />
      <TourPackages />
      <ProductPreview />
      <Testimonials />
    </div>
  );
};

export default Index;
