import Hero from "../../components/Hero";
import PropertiesListByCity from "../../components/PropertiesListByCity";
import PropertyCardList from "../../components/PropertyCardList";
import Features from "../../components/Features";
import Testimonial from "../../components/Testimonial";
import SmoothScrolling from "../../lib/SmoothScroll";


const HomePage = () => {
  return (
    <SmoothScrolling>
    <div>
      <Hero />
      <PropertiesListByCity />
      <PropertyCardList />
      <Features />
      <Testimonial />
    </div>
    </SmoothScrolling>
  );
};

export default HomePage;
