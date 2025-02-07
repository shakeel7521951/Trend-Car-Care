
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';

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
      {path:"/services",element:<Services />}
    ]
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
