
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
<<<<<<< HEAD
import Services from './pages/Services';
=======
import AboutUs from './pages/AboutUs';
>>>>>>> 0a48f785929dbcd5745926668e343601aaa7c06b

const MainLayout = ()=>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element:<MainLayout />,
    children:[
      {path:"/",element:<Home />},
<<<<<<< HEAD
      {path:"/services",element:<Services />}
=======
      {path:"/about",element:<AboutUs/>}
>>>>>>> 0a48f785929dbcd5745926668e343601aaa7c06b
    ]
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
