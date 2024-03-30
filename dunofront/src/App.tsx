import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PropertiesListByCity from "./components/PropertiesListByCity";
import PropertyCardList from "./components/PropertyCardList";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PropertiesListByCity/>
      <PropertyCardList />
    </>
  );
}

export default App;
