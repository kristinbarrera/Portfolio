import React from 'react';
import '../styles/quien.css';
import quien from '../assets/quiensoy.png'

function quiensoy() {
  return (
    <div id="quien" className="acerca-de">
     
        <div  className="imagen-izquierda">
          <img  src={quien} />
        
      </div>

      <div className="contenido-derecha">
        <div className="first">
        <div className="Acerca-mi">
          <div className="linea-acerca-de-mi">
          </div>
          <p>Acerca de mí</p>
        </div>
        <div className="pregunta">
          <h2>¿Quién soy?</h2>
        </div>
        </div>
        <div className="texto-largo">
          <p>Soy diseñadora UX/UI apasionada por mi trabajo y comprometida con mejorar la experiencia del usuario. Me enfoco en entender las necesidades y deseos de los usuarios para diseñar soluciones intuitivas y atractivas. Me encanta ser alegre y escuchar a los demás para poder brindar la mejor experiencia.</p>
        </div>
      
        </div>

       


    </div>
  )
}
export default quiensoy;