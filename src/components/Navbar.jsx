import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import Link from 'next/link';
import SlotTextHover from '@/components/slotTextHover';

//import logo from '/logo.ico';
//import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/avancemos-virtual", label: "Avancemos Virtual" },
    { href: "/conocenos", label: "Conócenos" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/resultado", label: "Resultados" },
    { href: "/workUs", label: "Trabaja Con Nosotros" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 right-0 w-full bg-white/80 backdrop-blur shadow-md z-50">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        {/* Logo (opcional) */}
        <div>
            <img src="/logo.png" alt="Logo" className="h-20 w-20 object-contain" />
        </div>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-6 p-4">
      <ul className="flex space-x-6">
        {links.map((item) => (
          <li key={item.href} className="relative">
            <SlotTextHover  href={item.href} label={item.label} />
          </li>
        ))}
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
      <div className="md:hidden mt-4 flex flex-col items-center space-y-2 text-gray-700">
        <Link href="/" style={{ color: 'rgb(45, 168, 54)' }}>Inicio</Link>
        <Link href="/avancemos-virtual" style={{ color: 'rgb(45, 168, 54)' }}>Avancemos Virtual</Link>
        <Link href="/conocenos" style={{ color: 'rgb(45, 168, 54)' }}>Conócenos</Link>
        <Link href="/portafolio" style={{ color: 'rgb(45, 168, 54)' }}>Portafolio</Link>
        <Link href="/resultado" style={{ color: 'rgb(45, 168, 54)' }}>Resultados</Link>
        <Link href="/workUs" style={{ color: 'rgb(45, 168, 54)' }}>Trabaja Con Nosotros</Link>
        <Link href="/blog" style={{ color: 'rgb(45, 168, 54)' }}>Blog</Link>
        
      </div>
      )}
    </nav>
  );
};

export default Navbar;

