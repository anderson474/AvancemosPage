// Galeria.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import Image from 'next/image';

const Galeria = () => {
  return (
    <div className="w-full mt-20 bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        lazy={true}
        className="rounded-xl"
      >
        <SwiperSlide>
          <div className="relative w-full h-auto">
            <div className="swiper-lazy-preloader"></div>
            <Image
              src="/galeria/Banner-educacion-inclusiva.png"
              alt="Foto 1"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl swiper-lazy"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-auto">
            <Image
              src="/galeria/Banner-formacion-bilingue-02.png"
              alt="Foto 2"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl swiper-lazy"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-auto">
            <Image
              src="/galeria/Banner-formacion-continua.png"
              alt="Foto 3"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl swiper-lazy"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-auto">
            <Image
              src="/galeria/Banner-sistemas-de-evaluacion-03.png"
              alt="Foto 4"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl swiper-lazy"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-auto">
            <Image
              src="/galeria/Banners-evento-diplomado-02-1.png"
              alt="Foto 5"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl swiper-lazy"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Galeria;


