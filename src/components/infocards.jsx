import React from "react";
import { FaChartBar, FaDesktop, FaMoneyBillWave } from "react-icons/fa";

const cards = [
  {
    title: "RESULTADOS",
    description: "Consulta aquí los resultados de tu institución",
    buttonText: "Consulta aquí",
    icon: <FaChartBar size={40} className="text-blue-800" />,
  },
  {
    title: "PRUEBAS ONLINE",
    description: "realiza tus pruebas aqui",
    buttonText: "Ingresa aquí",
    icon: <FaDesktop size={40} className="text-blue-800" />,
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
  },
];

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pt-8 w-full">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 w-full"
        >
          <div>{card.icon}</div>
          <h3 className="text-blue-800 font-bold text-xl">{card.title}</h3>
          <p className="text-blue-500 font-normal text-base pt-2 pb-7">{card.description}</p>
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded-full w-fit px-4">
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;