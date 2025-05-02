import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react';
import Footer from '@/components/NavInfo'
import BotonWhatsapp from '@/components/BotonWhatsapp'
import Galeria from '@/components/Galeria'
import AliadosCarrusel from '@/components/NuestrosAliados'
import InfoCards from '@/components/infocards'
import NuestraExperiencia from '@/components/NuestraExperiencia'

export default function Home() {
  useEffect(() => {
    document.title = 'Avancemos';
  }, []);
  
  return (
    <>
      <Navbar />
      <Galeria />
      <InfoCards />
      <AliadosCarrusel />
      <BotonWhatsapp />
      <div>
        <Footer />
      </div>
    </>
  );
}

