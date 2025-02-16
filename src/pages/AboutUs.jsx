import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import a from "/services/a.jpg";
import AboutDescr from "./AboutDescr";
import AboutAchiv from "./AboutAchiv";

export default function AboutUs() {
  const images = [
    "/services/car-wash-detailing-station.jpg",
    "/services/wash car.jpg",
    "/services/coating.jpg",
    "/services/detail.jpg",
    a,
    "/services/car-wrapping-with-foil-car-service.jpg",
  ];

  return (
    <div className="min-h-screen flex mt-20 flex-col">
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
