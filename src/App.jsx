import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

<<<<<<< HEAD
const MainLayout = () => {
  return (
=======
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Pricing from './pages/Pricing';

const MainLayout = ()=>{
  return(
>>>>>>> 83a273e0fdd50fa824946d2f795485fe1042487a
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
<<<<<<< HEAD
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <AboutUs /> },
    ],
  },
]);
=======
    element:<MainLayout />,
    children:[
      {path:"/",element:<Home />},
      {path:"/services",element:<Services />},
      {path:"/services",element:<Services />},
      {path:"/about",element:<AboutUs/>},
      {path:"/pricing",element:<Pricing/>},
    ]
  }
])
>>>>>>> 83a273e0fdd50fa824946d2f795485fe1042487a

function App() {
  return <RouterProvider router={router} />;
}

export default App;
