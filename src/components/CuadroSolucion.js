// CuadroSolucion.js
import React from 'react';
import CrearSoluciones from '../components/CrearSoluciones'; // Cambia el nombre de la importación

const CuadroSolucion = ({ datos }) => {
  if (!datos || !Array.isArray(datos)) {
    return null;
  }

  return (
    <div className="crear-soluciones-container">
      {datos.map((solucion, index) => (
        <CrearSoluciones key={index} {...solucion} />
      ))}
    </div>
  );
};

export default CuadroSolucion;
