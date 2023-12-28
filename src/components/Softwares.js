import React from 'react';
import CuadroSoftware from '../components/CuadroSoftware';


const Softwares = ({ datos }) => {
 
  if (!datos || !Array.isArray(datos)) {
    return null; 
  }

  return (
    <div  className="softwares-container">
      {datos.map((software, index) => (
        <CuadroSoftware key={index} {...software} />
      ))}
    </div>
  );
};

export default Softwares;