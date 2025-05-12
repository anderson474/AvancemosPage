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

