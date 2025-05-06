// ConocenosPage.js
import React from 'react';
import Layout from '@/components/layout';
import LineaDelTiempo from '@/components/conocenos/lineadeltiempo'
import StatsSection from '@/components/conocenos/statSection'
import GallerySection from '@/components/conocenos/galeriaFoto'
import GalleryAdmin from '@/components/conocenos/galeriaAdmin'


export default function Conocenos() {
  return (
    <div>
      <Layout >
      
        <LineaDelTiempo />
        <StatsSection/>
        <GallerySection/>
        <GalleryAdmin/>
      </Layout>
    </div>
  );
}
