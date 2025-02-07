import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


import buffing from '../assets/Aboutimg/best.jpeg';
import buff from '../assets/Aboutimg/buff.jfif';
import wash from '../assets/Aboutimg/wash.jfif';
import washing from '../assets/Aboutimg/washing.jfif';
import wash3 from '../assets/Aboutimg/lhr.jpg';
import clean from '../assets/Aboutimg/clean.png';
import AboutDescr from './AboutDescr';

export default function AboutUs() {
  const images = [buff, washing, buffing, wash, wash3, clean];

  return (
    <div className="w-full h-[40vh] sm:h-[90vh] mx-auto">
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
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <AboutDescr/>
    </div>
  );
}
