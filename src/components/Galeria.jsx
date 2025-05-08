// Galeria.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Galeria = () => {
  return (
    <div className="w-full mt-49 bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-xl"
      >
        <SwiperSlide>
          <img src="/galeria/Banner-educacion-inclusiva.png" alt="Foto 1" className="w-full h-auto rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/galeria/Banner-formacion-bilingue-02.png" alt="Foto 2" className="w-full h-auto rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/galeria/Banner-formacion-continua.png" alt="Foto 3" className="w-full h-auto rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/galeria/Banner-sistemas-de-evaluacion-03.png" alt="Foto 3" className="w-full h-auto rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/galeria/Banners-evento-diplomado-02-1.png" alt="Foto 3" className="w-full h-auto rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Galeria;
