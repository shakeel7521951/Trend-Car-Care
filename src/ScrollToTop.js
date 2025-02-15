import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  console.log("location....",location)

  useEffect(() => {
    console.log("Location changed", location);
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
