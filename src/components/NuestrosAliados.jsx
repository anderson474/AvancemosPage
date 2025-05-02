import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const AliadosCarrusel = () => {
  const aliados = [
    { nombre: 'Aliado 1', logo: '/NuestrosAliados/litorugir.png' },
    { nombre: 'Aliado 2', logo: '/NuestrosAliados/escudo_UAntioquia.jpeg' },
    { nombre: 'Aliado 3', logo: '/NuestrosAliados/ASTMECO_Mesa-de-trabajo-1.png' },
    { nombre: 'Aliado 4', logo: '/NuestrosAliados/LOGO-EDITORIAL_Mesa-de-trabajo-1.png' },
    // Puedes duplicar estos para mejorar el efecto
  ];

  // Duplicamos los slides para evitar espacios en el loop
  const aliadosDoblados = [...aliados, ...aliados];

  return (
    <div className="w-full overflow-hidden bg-white mt-20">
      <h2 className="text-4xl font-bold text-center mb-6 text-[rgba(45,168,54,1)]">Nuestros Aliados</h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={5000} // Más velocidad para simular marquee
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={4}
        spaceBetween={0}
        allowTouchMove={false} // Desactiva el arrastre manual
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {aliadosDoblados.map((aliado, index) => (
          <SwiperSlide key={index}>
            <img
              src={aliado.logo}
              alt={aliado.nombre}
              className="w-40 h-40 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AliadosCarrusel;


