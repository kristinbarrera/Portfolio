// CrearSoluciones.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/crearsol.css';
import CrearSolucione from '../components/CrearSoluciones';
import ux from '../assets/ux.svg';
import writting from '../assets/writting.svg';
import app from '../assets/app.svg';
import web from '../assets/web.svg';

const CrearSoluciones = ({ imagenSrc, alt, titulo, subtitulo }) => {
    return (
        <div className="CrearSoluciones">
            <div className="Acerca-mi">
                <div className="linea-acerca-de-mi">
                </div>
                <p>¿Que puedo hacer?</p>
            </div>

            <div className="sol-titulo">
                Crear Soluciones
            </div>
            <div className="solucion-items">
                <div className="solucion-items-horizontal">
                    <div className="solucion-item">
                        <div className="solucion-contenido">
                            <img src={ux} alt={alt} className="ux" loading="lazy" />
                        </div>
                        <div className="titulo-solucion">
                            <div className="titulo-sol">{titulo}UX/UI Design</div>
                        </div>

                        <div className="subtitulo-solucion">
                            <div className="sub-sol">{subtitulo}Realizo investigaciones para comprender las necesidades del usuario y crear interfaces fáciles de usar</div>
                        </div>

                    </div>
                    <div className="solucion-item">
                        <div className="solucion-contenido">
                            <img src={writting} alt={alt} className="ux" loading="lazy" />
                        </div>
                        <div className="titulo-solucion">
                            <div className="titulo-sol">{titulo}UX Writing</div>
                        </div>

                        <div className="subtitulo-solucion">
                            <div className="sub-sol">{subtitulo}Escribir mensajes claros que guíen al usuario a través de las interfaces acorde a la voz y tono de la marca</div>
                        </div>
                    </div>
                </div>

                <div className="solucion-items-horizontal">
                    <div className="solucion-item">
                        <div className="solucion-contenido">
                            <img src={ux} alt={alt} className="ux" loading="lazy" />
                        </div>
                        <div className="titulo-solucion">
                            <div className="titulo-sol">{titulo}App Design</div>
                        </div>

                        <div className="subtitulo-solucion">
                            <div className="sub-sol">{subtitulo}Diseño interfaces intuitivas para aplicaciones moviles centradas en las necesidades y deseos de los usuarios.</div>
                        </div>

                    </div>
                    <div className="solucion-item">
                        <div className="solucion-contenido">
                            <img src={ux} alt={alt} className="ux" loading="lazy" />
                        </div>
                        <div className="titulo-solucion">
                            <div className="titulo-sol">{titulo}Web Design</div>
                        </div>

                        <div className="subtitulo-solucion">
                            <div className="sub-sol">{subtitulo}Diseño sitios web que combinen estética y funcionalidad de manera óptima.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CrearSoluciones.propTypes = {
    imagenSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
};

export default CrearSoluciones;
