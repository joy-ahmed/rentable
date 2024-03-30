import Hero from "../../components/Hero";
import PropertiesListByCity from "../../components/PropertiesListByCity";
import PropertyCardList from "../../components/PropertyCardList";
import Features from "../../components/Features";
import Testimonial from "../../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PropertiesListByCity />
      <PropertyCardList />
      <Features />
      <Testimonial />
    </div>
  );
};

export default HomePage;
