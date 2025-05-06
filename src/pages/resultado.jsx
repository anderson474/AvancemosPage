// ConocenosPage.js
import React from 'react';
import Layout from '@/components/layout';
import RegionesGrid from '@/components/resultados/bloquesDepartamentos'


export default function resultado() {
  return (
    <div>
      <Layout >
        <RegionesGrid/>
      </Layout>
    </div>
  );
}