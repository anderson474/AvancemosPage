export default function StatsSection() {
    const stats = [
      {
        icon: "👥",
        value: "500",
        label: "Clientes Felices",
      },
      {
        icon: "🎓",
        value: "50,000",
        label: "Estudiantes Asesorados",
      },
      {
        icon: "⏱️",
        value: "20",
        label: "Años de Experiencia",
      },
    ];
  
    return (
      <div className="bg-white text-white py-20 flex justify-center gap-12 flex-wrap">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-60 h-60 bg-lime-500 text-blue-900 rounded-xl shadow-2xl transform transition-transform duration-500 hover:rotate-y-180 [transform-style:preserve-3d] flex flex-col items-center justify-center text-center"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="text-lg font-semibold mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  }
  