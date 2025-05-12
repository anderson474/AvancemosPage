import Head from 'next/head';
import React, { useEffect } from 'react';
import Galeria from '@/components/Galeria';
import AliadosCarrusel from '@/components/NuestrosAliados';
import InfoCards from '@/components/infocards';
import NuestraExperiencia from '@/components/NuestraExperiencia';
import Layout from '@/components/layout';

export default function Home() {
  useEffect(() => {
    document.title = 'Avancemos';
  }, []);

  return (
    <>
      <Head>
        <title>Avancemos</title>
        <link rel="icon" href="/LOGO.png" />
        {/* Título para buscadores y pestañas */}
        <title>Avancemos - Fundación Educativa</title>
        <meta name="description" content="Avancemos es una fundación educativa que impulsa el desarrollo integral de niños y jóvenes a través de programas de formación y apoyo escolar." />

        {/* SEO básico */}
        <meta name="keywords" content="fundación educativa, educación, apoyo escolar, niños, jóvenes, Colombia, desarrollo social, pre-icfes, preicfes, examen-evaluación estudiantil, educate para el saber-preparación ICFES en colombiafundación educativa, programas de nivelación, orientación vocacional, bilingüismo, formación docente, educación superior, Colombia" />
        <meta name="author" content="Fundación Avancemos" />

        {/* Favicon */}
        <link rel="icon" href="/LOGO.png" />

        {/* Open Graph (para Facebook y redes sociales) */}
        <meta property="og:title" content="Avancemos - Fundación Educativa" />
        <meta property="og:description" content="Conoce nuestros programas educativos y cómo transformamos vidas a través de la educación." />
        <meta property="og:image" content="/login/FotoCoorporativa.jpeg" /> {/* Usa una imagen de portada representativa */}
        <meta property="og:url" content="https://www.avancemos.edu.co" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avancemos - Fundación Educativa" />
        <meta name="twitter:description" content="Transformando vidas a través de la educación." />
        <meta name="twitter:image" content="/login/FotoCoorporativa.jpeg" />

        {/* Viewport para responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout className="w-full">
        <Galeria />
        <InfoCards />
        <NuestraExperiencia />
        <AliadosCarrusel />
      </Layout>
    </>
  );
}

