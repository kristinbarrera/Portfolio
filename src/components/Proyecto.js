import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Proyecto.css';


const Proyecto = ({ imagenSrc, alt, titulo, descripcion, botonTexto,  imagenPosicion, enlace }) => {
  return (
    
    <div id="experiencia" className="proyecto">
    
      <div className={`proy ${imagenPosicion === 'izquierda' ? 'proyecto-izquierda' : ''}`}>
      <img src={imagenSrc} alt={alt} className="proyecto-imagen" />
      <div className="proyecto-contenido">  
        <div className="proyect">
          <h2 className="proyecto-titulo">{titulo}</h2>
          <p className="proyecto-descripcion">{descripcion}</p>
        </div>
        <a href={enlace} target="_blank" rel="noopener noreferrer">
  <button className="proyecto-boton">{botonTexto}</button>
</a>

      </div>
      </div>
       </div>
    
  );
};

Proyecto.propTypes = {
  imagenSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  botonTexto: PropTypes.string.isRequired,
  imagenPosicion: PropTypes.oneOf(['derecha', 'izquierda']), 
  enlace: PropTypes.string.isRequired,
};

export default Proyecto;
