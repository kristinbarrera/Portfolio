import React from 'react';
import PropTypes from 'prop-types';
import ps from '../assets/ps.svg';
import figma from '../assets/figma.svg';
import ai from '../assets/ai.svg';
import xd from '../assets/xd.svg';
import '../styles/softwares.css';

const CuadroSoftware = ({ imagenSrc, alt, texto }) => {
    return (

        <div id="softwares" className="software-item">
            <div className="titulo-soft">
                Softwares
            </div>
            <div className="orden-soft">
                <div className="software">
                <div className="software-contenido">
                    <img src={ps} alt={alt} className="photoshop" loading="lazy" />
                </div>
                <div className="texto">
                    <p className="software-texto">{texto} Adobe Photoshop</p>
                </div>
                </div> 

                <div className="software">
                <div className="software-contenido">
                    <img src={figma} alt={alt} className="figma" loading="lazy" />
                </div>
                <div className="texto">
                    <p className="software-texto">{texto} Figma</p>
                </div>
                </div>

                <div className="software">
                <div className="software-contenido">
                    <img src={ai} alt={alt} className="ai" loading="lazy" />
                </div>
                <div className="texto">
                    <p className="software-texto">{texto} Adobe Illustrator</p>
                </div>
                </div>

                <div className="software">
                <div className="software-contenido">
                    <img src={xd} alt={alt} className="xd" loading="lazy" />
                </div>
                <div className="texto">
                    <p className="software-texto">{texto} Adobe XD</p>
                </div>
                </div>
            </div>


        </div>

    );
};

CuadroSoftware.propTypes = {
    imagenSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
};

export default CuadroSoftware;




