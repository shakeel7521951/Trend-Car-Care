
import Header from "../components/home/Header";
import WhyUs from "../components/home/WhyUs";
import Services from "../components/home/Services";
import BookOnline from "../components/home/BookOnline";
import Offers from "../components/home/Offers";
import Contact from "../components/home/Contact";
import QualityGranteed from "../components/home/QualityGranteed";

const Home =()=>{
  return(
    <>
      <Header />
      <Services />
      <BookOnline />
      <Offers />
      <WhyUs />
      <Contact />
      <QualityGranteed />
    </>
  );
};

export default Home;
