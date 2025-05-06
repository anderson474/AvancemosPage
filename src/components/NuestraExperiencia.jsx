import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const AliadosCarrusel = () => {
  const aliados = [
    { nombre: 'Aliado 1', logo: '/NuestraExperiencia/+.webp' },
    { nombre: 'Aliado 2', logo: '/NuestraExperiencia/arquidioscesana-03.webp' },
    { nombre: 'Aliado 3', logo: '/NuestraExperiencia/Cole-chester-palmer-school.webp' },
    { nombre: 'Aliado 4', logo: '/NuestraExperiencia/Colegi-la-salle-bello.webp' },
    { nombre: 'Aliado 5', logo: '/NuestraExperiencia/Colegio-botero.webp' },
    { nombre: 'Aliado 6', logo: '/NuestraExperiencia/Colegio-corazon-de-cristo.webp' },
    { nombre: 'Aliado 7', logo: '/NuestraExperiencia/COLEGIO-DE-LA-PRESENTACION-SANTA-TERESA-CUCUTA-02-300x300.png' },
    { nombre: 'Aliado 8', logo: '/NuestraExperiencia/COLEGIO-LA-SALLE-BELLO-02-300x300.png' },
    { nombre: 'Aliado 9', logo: '/NuestraExperiencia/COLEGIO-MILITAR-JOSE-MARIA-CORDOBA-03-300x300.png' },
    { nombre: 'Aliado 10', logo: '/NuestraExperiencia/COLEGIO-PANAMERICANO-COLOMBO-SUECO-06-300x300.png' },
    { nombre: 'Aliado 11', logo: '/NuestraExperiencia/COLEGIO-PARROQUIAL-CARMELITANO-05-300x300.png' },
    { nombre: 'Aliado 12', logo: '/NuestraExperiencia/COLEGIO-SAGRADO-CORAZON-MONTEMAYOR-ENVIGADO-02-300x300.png' },
    { nombre: 'Aliado 13', logo: '/NuestraExperiencia/Colegio-salazar-herrera.webp' },
    { nombre: 'Aliado 14', logo: '/NuestraExperiencia/COLEGIO-SAN-JOSE-DE-LA-SALLE_san-jose.png' },
    { nombre: 'Aliado 15', logo: '/NuestraExperiencia/GIMNASIO-INTEGRAL-SANTA-ANA-05-300x300.png' },
    { nombre: 'Aliado 16', logo: '/NuestraExperiencia/I.E.-CELESTIN-FREINET-03-300x300.png' },
    { nombre: 'Aliado 17', logo: '/NuestraExperiencia/I.E.-NUESTRA-SENORA-DEL-ROSARIO-04-300x300.png' },
    { nombre: 'Aliado 18', logo: '/NuestraExperiencia/JESUS-DE-LA-BUENA-ESPERANZA-BELLO-06-300x300.png' },
    { nombre: 'Aliado 19', logo: '/NuestraExperiencia/la-salle-norandino.webp' },
    { nombre: 'Aliado 20', logo: '/NuestraExperiencia/LA-SALLE-SAN-CARLOS-04-300x300.png' },
    { nombre: 'Aliado 21', logo: '/NuestraExperiencia/LICEO-SAN-RAFAEL-02-300x300.png' },
    { nombre: 'Aliado 22', logo: '/NuestraExperiencia/logos-de-colegio- panamericano.webp' },
    { nombre: 'Aliado 23', logo: '/NuestraExperiencia/logos-de-colegio-militar.webp' },
    { nombre: 'Aliado 24', logo: '/NuestraExperiencia/mpoy.webp' },
    { nombre: 'Aliado 25', logo: '/NuestraExperiencia/pontificia-bolivariana.webp' },
    { nombre: 'Aliado 26', logo: '/NuestraExperiencia/santa-maria-del-rosario.webp' },
    // Puedes duplicar estos para mejorar el efecto
  ];

  // Duplicamos los slides para evitar espacios en el loop
  const aliadosDoblados = [...aliados, ...aliados];

  return (
    <div className="w-full overflow-hidden bg-white mt-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-[rgba(45,168,54,1)]">Nuestra Experiencia</h2>
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
              className="w-40 h-40 object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AliadosCarrusel;

