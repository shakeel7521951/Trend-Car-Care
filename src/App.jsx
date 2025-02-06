
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

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
      {path:"/about",element:<AboutUs/>}
    ]
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
