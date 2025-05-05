function obtenerSaludo() {
    const hora = new Date().getHours();
    if (hora < 12) return 'Buenos días';
    if (hora < 18) return 'Buenas tardes';
    return 'Buenas noches';
  }
  
  export default function Bienvenida({ nombre }) {
    return (
      <div className="fixed top-1 right-1 text-1xl font-bold text-green-700">
        {obtenerSaludo()}, {nombre} 👋
      </div>
    )
  }

