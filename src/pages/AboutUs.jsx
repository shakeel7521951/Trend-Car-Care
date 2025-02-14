import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import buffing from "../assets/Aboutimg/best.jpeg";
import wash from "../assets/Aboutimg/wash.jfif";
import washing from "../assets/Aboutimg/washing.jfif";
import wash3 from "../assets/Aboutimg/lhr.jpg";
import clean from "../assets/Aboutimg/clean.png";
import AboutDescr from "./AboutDescr";
import AboutAchiv from "./AboutAchiv";

export default function AboutUs() {
  const images = [buffing, washing, wash, wash3, clean];

  return (
    <div className="min-h-screen flex flex-col">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[90vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <main className="flex-grow">
        <AboutDescr />
        <AboutAchiv />
      </main>
    </div>
  );
}
