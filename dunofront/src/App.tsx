import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage";
import PropertiesList from "./routes/propertiesListing/PropertiesList";
import Layout from "./routes/layout/Layout";
import LoginPage from "./routes/login/LoginPage";
import RegisterPage from "./routes/register/RegisterPage";
import PropertyView from "./routes/propertyView/PropertyView";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "properties/:id",
          element: <PropertyView />,
        },
      ],
    },
    {
      path: "/properties",
      element: <PropertiesList />,
    },
  ]);
  return (
    // <>
    //   <Navbar />
    //   <Hero />
    //   <PropertiesListByCity/>
    //   <PropertyCardList />
    //   <Features />
    //   <Testimonial />
    //   <Footer />
    // </>
    <RouterProvider router={router} />
  );
}

export default App;
