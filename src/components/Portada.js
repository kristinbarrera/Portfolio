import React from 'react';
import '../styles/portada.css';
import wsppIcon from '../assets/wspp.svg';
import foto from '../assets/foto.png';
import linke from '../assets/linked.svg';
import gmail from '../assets/gmail.svg';
import { useState, useEffect } from 'react';

function Portada() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };


        window.addEventListener('resize', handleResize);


        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div id="portada" className="portada-container">
            <div className="container-izq">

                {isSmallScreen ? (
                    <>
                        <div className="Cargo">
                            <div className="linea"></div>
                            <div className="car">
                                <p>Diseñadora UX/UI</p>
                            </div>
                        </div>

                        <div className="nombre-info">
                            <h1>Kristinne</h1>
                            <span>Barrera</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="nombre-info">
                            <h1>Kristinne</h1>
                            <span>Barrera</span>
                        </div>

                        <div className="Cargo">
                            <div className="linea"></div>
                            <div className="car">
                                <p>Diseñadora UX/UI</p>
                            </div>
                        </div>
                    </>
                   )}


                <div className="boton-contacto">
                    <button className="contact-button">
                        <img src={wsppIcon} alt="WhatsApp" className="icono-whatsapp" />
                        
                        <a href="https://wa.link/nw4hsp">Contáctame</a>
                    </button>
                </div>

                <div className="redes">
                    <div className="linkedin">
                        <img src= {linke} alt="linkedin"></img>
                       <a href="https://www.linkedin.com/in/kristinne-barrera-jimenez-a795141ba/">Kristinne Barrera Jimenez</a>
                    </div>
                    <div className="gmail">
                        <img src= {gmail} alt="gmail"></img>
                        <a href="Kristinbarreraj12@gmail.com">kristinbarreraj12@gmail.com</a>
                    </div>
                </div>


            </div>
            <div className="imagen-derecha">
                <img src={foto} alt="Foto" className="foto" />
            </div>
        </div>
    );
}

export default Portada;

