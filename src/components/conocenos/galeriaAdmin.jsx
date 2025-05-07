import React from 'react';

export default function GallerySection() {
    const team = [
        {
          role: "CEO",
          name: "Walter Enrique Aldana Romero",
          image: "/conocenos/WalterAldana.png",
          description:
            "Economista especializado en contratación pública, cuenta con más de 30 años de experiencia en el sector empresarial privado y público.",
        },
        {
            role: "Directora Comercial",
            name: "Liliana María Duque",
            image: "/conocenos/LilianaDuque.png",
            description:
              "Administradora de empresas con más de 30 años de experiencia en el sector editorial y educativo.",
          },
        {
          role: "Dir. General y Estratégico",
          name: "Luis Alberto Marulanda Saldarriaga",
          image: "/conocenos/LuisMarulanda.png",
          description:
            "Licenciado en Filosofía y Educación Religiosa, especialista en Gerencia Educativa, Magíster en MBA.",
        },
        {
            role: "Directora Académica",
            name: "Aura Barreto Olmos",
            image: "/conocenos/AuraBarreto.png",
            description:
              "Licenciada en español y literatura, especialista en administración de la informática educativa, Master en gestión de las tecnologías educativas, con más de 22 años de experiencia.",
          },
      ];
      

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
  {team.map((person, index) => (
    <div key={index}>
      <h3 className="text-lg font-bold text-blue-800 mb-2">{person.role}</h3>
      <div className="w-80 h-80 mx-auto border-4 border-blue-800 rounded-full overflow-hidden mb-4">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-semibold text-blue-900 text-xl">{person.name}</p>
      <p className="text-sm text-gray-600 px-4 mt-2">{person.description}</p>
    </div>
  ))}
</div>

  );
}
