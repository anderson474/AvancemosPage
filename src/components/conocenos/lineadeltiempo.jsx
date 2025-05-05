// LineaDelTiempo.js
import React from 'react';

const LineaDelTiempo = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 mt-25">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Quiénes somos</h2>
        <p className="mt-4 text-lg text-center text-gray-700">
          Descubre nuestra historia y nuestro equipo.
        </p>

        <div className="relative mt-12">
          {/* Línea central */}
          <div className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full"></div>

          {/* Evento 1 */}
          <div className="flex items-center justify-start mb-12">
            <div className="order-2 w-1/2 pl-8">
              <img
                className="rounded-lg shadow-lg"
                src="/images/directivo1.jpg"
                alt="Directivo 1"
              />
            </div>
            <div className="order-1 w-1/2 pr-8">
              <h3 className="text-xl font-semibold text-gray-900 hover:text--700 hover:grayscale-0 transition-colors duration-300">¿Quiénes Somos?</h3>
              <p className="mt-2 text-gray-600">
                En 2010 comenzamos con una pequeña idea que rápidamente creció gracias a nuestro equipo.
              </p>
            </div>
          </div>

          {/* Evento 2 */}
          <div className="flex items-center justify-end mb-12">
            <div className="order-1 w-1/2 pr-8">
              <h3 className="text-xl font-semibold text-gray-900">Primer Hito</h3>
              <p className="mt-2 text-gray-600">
                En 2015, logramos expandir nuestras operaciones internacionalmente.
              </p>
            </div>
            <div className="order-2 w-1/2 pl-8">
              <img
                className="rounded-lg shadow-lg"
                src="/images/directivo2.jpg"
                alt="Directivo 2"
              />
            </div>
          </div>

          {/* Evento 3 */}
          <div className="flex items-center justify-start mb-12">
            <div className="order-2 w-1/2 pl-8">
              <img
                className="rounded-lg shadow-lg"
                src="/images/directivo3.jpg"
                alt="Directivo 3"
              />
            </div>
            <div className="order-1 w-1/2 pr-8">
              <h3 className="text-xl font-semibold text-gray-900">Expansión Global</h3>
              <p className="mt-2 text-gray-600">
                En 2020, nos consolidamos como una de las principales plataformas educativas globales.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LineaDelTiempo;
