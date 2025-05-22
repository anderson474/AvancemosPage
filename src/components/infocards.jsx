import React from "react";
import { FaChartBar, FaDesktop, FaMoneyBillWave } from "react-icons/fa";
import { useRouter } from "next/router";

const InfoCards = () => {
  const router = useRouter();

  const cards = [
    {
      title: "RESULTADOS",
      description: "Consulta aquí los resultados de tu institución",
      buttonText: "Consulta aquí",
      icon: <FaChartBar size={40} className="text-blue-800" />,
      action: () => router.push("/resultado"),
    },
    {
      title: "PRUEBAS ONLINE",
      description: "realiza tus pruebas aquí",
      buttonText: "Ingresa aquí",
      icon: <FaDesktop size={40} className="text-blue-800" />,
      action: () =>
        window.open(
          "https://app.evaluateok.com/eo/index.html?parametro_css=avancemos",
          "_blank"
        ),
    },
    {
      title: "PAGOS",
      description: (
        <>
          Tus transacciones de manera <strong className="font-bold">fácil y rápida</strong>
        </>
      ),
      buttonText: "Pagar",
      icon: <FaMoneyBillWave size={40} className="text-blue-800" />,
      action: () => alert("Funcionalidad de pagos en construcción"),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-40 mb-20 mt-20 pt-8 w-full">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="group relative bg-white/80 rounded-xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 w-full overflow-hidden"
        >
          {/* Contenido con efecto blur al hacer hover */}
          <div className="transition-all duration-300 group-hover:blur-sm">
            {card.icon}
            <h3 className="text-blue-800 font-bold text-xl">{card.title}</h3>
            <p className="text-blue-500 font-normal text-base pt-2 pb-7">{card.description}</p>
          </div>

          {/* Botón oculto, aparece al hacer hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded-full px-4"
              onClick={card.action}
            >
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>

  );
};

export default InfoCards;
