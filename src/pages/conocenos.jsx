// ConocenosPage.js
import React from 'react';
import Layout from '@/components/layout';
import LineaDelTiempo from '@/components/conocenos/lineadeltiempo'




export default function Conocenos() {
  return (
      <div >
        <Layout className="grayscale bg-gray-100">
            <LineaDelTiempo />
        </Layout>
        
      </div>
  );
}
