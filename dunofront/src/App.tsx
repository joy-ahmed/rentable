import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PropertiesListByCity from "./components/PropertiesListByCity";
import PropertyCardList from "./components/PropertyCardList";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PropertiesListByCity/>
      <PropertyCardList />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
