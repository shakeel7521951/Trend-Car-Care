import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import WashContact from "./pages/Contact";

const MainLayout = ()=>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element:<MainLayout />,
    children:[
      {path:"/",element:<Home />},
      {path:"/services",element:<Services />},
      {path:"/services",element:<Services />},
      {path:"/about",element:<AboutUs/>},
      {path:"/pricing",element:<Pricing/>},
      {path:"/contact-us",element:<WashContact/>},
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
