// pages/blog/nivelacion-academica.jsx

import Head from 'next/head';
import Layout from '@/components/layout';



export default function NivelacionAcademica() {
  return (
    <>
      <Head>
        <title>¿Qué es la nivelación académica? | Fundación Avancemos</title>
        <meta name="description" content="Descubre cómo nuestros programas de nivelación ayudan a niños y jóvenes a superar sus retos académicos." />
      </Head>
      <Layout>
        <article className="prose mx-auto px-4 py-8 mt-100 text-black">
          <h1>¿Qué es la nivelación académica y por qué es vital para el éxito escolar?</h1>
          <p>
            La nivelación académica es un proceso educativo que busca ayudar a estudiantes con dificultades escolares a ponerse al día con sus pares, fortaleciendo sus habilidades y conocimientos básicos...
          </p>
          {/* Resto del contenido */}
        </article>
      </Layout>
    </>
  );
}
