import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
//import logo from '/logo.ico';
//import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 right-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        {/* Logo (opcional) */}
        <div>
            <img src="/logo.ico" alt="Logo" className="h-20 w-20 object-contain" />
        </div>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-6 p-4" style={{ color: 'rgb(45, 168, 54)' }}>
            <ul className="flex space-x-6"> {/* Aseguramos que sea una lista ordenada */}
                <li><a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Inicio</a></li>
                <li><a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Pagos</a></li>
                <li><a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Avancemos Virtual</a></li>
                <li><a href="#" style={{ color: 'rgb(45, 168, 54)' }}>conócenos</a></li>
                <li><a href="#" style={{ color: 'rgb(45, 168, 54)' }}>portafolio</a></li>
                <li><a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Resultados</a></li>
                <li><a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Blog</a></li>
            </ul>
        </div>

        {/* Botón hamburguesa en pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-3 rounded-xl bg-green-50 shadow-md shadow-green-200 hover:shadow-green-300 transition">
            {isOpen ? <X className="w-6 h-6" style={{ color: 'rgb(45, 168, 54)' }} /> : <Menu className="w-6 h-6" style={{ color: 'rgb(45, 168, 54)' }} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
      <div className="md:hidden mt-4 flex flex-col items-end space-y-2 text-gray-700">
        <a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Inicio</a>
        <a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Pagos</a>
        <a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Avancemos Virtual</a>
        <a href="#" style={{ color: 'rgb(45, 168, 54)' }}>conócenos</a>
        <a href="#" style={{ color: 'rgb(45, 168, 54)' }}>portafolio</a>
        <a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Resultados</a>
        <a href="#" style={{ color: 'rgb(45, 168, 54)' }}>Blog</a>
      </div>
      )}
    </nav>
  );
};

export default Navbar;

