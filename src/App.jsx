import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import WashContact from "./pages/Contact";
import ScrollToTop from './ScrollToTop';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/contact-us", element: <WashContact /> },
    ],
  },
]);

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router}>
        <ScrollToTop /> {/* Ensure ScrollToTop is placed here */}
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
