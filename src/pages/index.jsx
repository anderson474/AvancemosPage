//import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react';
import Footer from '@/components/NavInfo'
//import BotonWhatsapp from '@/components/BotonWhatsapp'
import Galeria from '@/components/Galeria'
import AliadosCarrusel from '@/components/NuestrosAliados'
import InfoCards from '@/components/infocards'
//import SocialButtons from "@/components/SocialButtons";
import NuestraExperiencia from '@/components/NuestraExperiencia'
import Layout from '@/components/layout'

export default function Home() {
  useEffect(() => {
    document.title = 'Avancemos';
  }, []);
  
  return (
    <>
      <Layout className='w-full'>
        <Galeria />
        <InfoCards />
        <NuestraExperiencia/>
        <AliadosCarrusel />
      </Layout>
      
    </>
  );
}

