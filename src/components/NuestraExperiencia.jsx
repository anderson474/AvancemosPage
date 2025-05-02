import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const NuestraExperiencia = () => {
  const aliados = [
    { nombre: 'Aliado 1', logo: '/NuestrosAliados/litorugir.png' },
    { nombre: 'Aliado 2', logo: '/NuestrosAliados/escudo_UAntioquia.jpeg' },
    { nombre: 'Aliado 3', logo: '/NuestrosAliados/ASTMECO_Mesa-de-trabajo-1.png' },
    { nombre: 'Aliado 4', logo: '/NuestrosAliados/LOGO-EDITORIAL_Mesa-de-trabajo-1.png' },
    { nombre: 'Aliado 5', logo: '/NuestrosAliados/logo5.png' },
    { nombre: 'Aliado 6', logo: '/NuestrosAliados/logo6.png' },
    { nombre: 'Aliado 7', logo: '/NuestrosAliados/logo7.png' },
    { nombre: 'Aliado 8', logo: '/NuestrosAliados/logo8.png' },
    { nombre: 'Aliado 9', logo: '/NuestrosAliados/logo9.png' },
    { nombre: 'Aliado 10', logo: '/NuestrosAliados/logo10.png' },
    { nombre: 'Aliado 11', logo: '/NuestrosAliados/logo11.png' },
  ];

  // Para cada fila: sacamos los elementos escalonados
  const filas = [0, 1, 2].map((offset) =>
    aliados.filter((_, index) => index % 3 === offset)
  );

  const delays = [0, 1000, 2000]; // para que no se muevan al mismo tiempo

  return (
    <div className="w-full bg-gray-100 py-10 border-y-4 border-gray-300">
      <h2 className="text-5xl font-bold text-center mb-6 text-[rgba(45,168,54,1)]">
        Nuestra Experiencia
      </h2>

      <div className="grid grid-rows-3 gap-8 px-10">
        {filas.map((fila, filaIndex) => (
          <Swiper
            key={filaIndex}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: delays[filaIndex], // diferenciar la animación
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1000}
            slidesPerView={3}
            spaceBetween={30}
            allowTouchMove={false}
          >
            {fila.concat(fila).map((aliado, index) => ( // duplicar para looping fluido
              <SwiperSlide key={index}>
                <div className="grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                  <img
                    src={aliado.logo}
                    alt={aliado.nombre}
                    className="w-40 h-40 object-contain mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </div>
  );
};

export default NuestraExperiencia;

