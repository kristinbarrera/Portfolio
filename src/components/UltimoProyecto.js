import React from 'react';
import Proyecto from './Proyecto';
import journal from '../assets/journal.png';
import blown from '../assets/blown.png';
import cyclism from '../assets/cyclism.png';
import upn from '../assets/upn.png';
import tinne from '../assets/tinne.png';
import surprise from '../assets/surprise.png';

const UltimosProyectos = () => {
    const proyectos = [
        {
            imagenSrc: journal,
            alt: 'Journal Trading',
            titulo: 'Journal Trading',
            descripcion: 'Es una plataforma diseñada específicamente para traders e inversores, proporcionando herramientas esenciales para el seguimiento y análisis exhaustivo de sus operaciones financieras.',
            botonTexto: 'Ver proyecto',
            imagenPosicion: 'derecha',
            enlace: 'https://www.figma.com/file/hYjYwFb791NwhBauJI65aP/JournalTrading?type=design&node-id=6%3A15&mode=design&t=NsA0ZTtPuamo5vcm-1',
        },

        {
            imagenSrc: blown,
            alt: 'BLOWN-TIENDA ROPA',
            titulo: 'BLOWN-TIENDA ROPA',
            descripcion: '"Blown" es una tienda exclusiva que ofrece ropa de marca especialmente diseñada para la tercera edad, combinando estilo y comodidad en cada prenda',
            botonTexto: 'Ver proyecto',
            imagenPosicion: 'izquierda',
            enlace: 'https://www.figma.com/file/2l2aoVcKt8Y7G1kv8BrBfi/Blown-UI?type=design&node-id=1%3A11&mode=design&t=Vy6QqIfdOmebWIgE-1',

        },

        {
            imagenSrc: cyclism,
            alt: 'Cyclism App',
            titulo: 'Cyclism App',
            descripcion: 'Aplicación diseñada para entusiastas del ciclismo, ofreciendo rutas y recorridos personalizados en diversas ciudades',
            botonTexto: 'Ver proyecto',
            imagenPosicion: 'derecha',
            enlace: 'https://www.figma.com/file/2ji9h87TQWl7hjwlttpHLK/Cyclism-App?type=design&node-id=1%3A3&mode=design&t=kDnHoHvM8FoOsuzS-1',

        },

        {
            imagenSrc: upn,
            alt: 'Optimización de la App UPN',
            titulo: 'Optimización de la App UPN',
            descripcion: 'UPN es una aplicación para los estudiantes universitarios de UPN(Universidad Privada del Norte) donde podrás encontrar tus horarios, notas, información de cada uno de tus cursos, entre otros y podrás contactarte con tus docentes y compañeros mediante un mensaje..',
            botonTexto: 'Ver proyecto',
            imagenPosicion: 'izquierda',
            enlace: 'https://www.figma.com/file/ZQIeHisPs4ylDGMPWK0IIW/Resultados-UX?type=design&node-id=1%3A1712&mode=design&t=DrtaUy0khVZeI9sp-1'
        },
        {
            imagenSrc: tinne,
            alt: '“Tinne” Una aplicación de taxi solo para mujeres',
            titulo: 'Tinne - Una aplicación de taxi solo para mujeres',
            descripcion: 'Aplicación de taxi exclusiva para mujeres con enfoque en la seguridad y comodidad de las usuarias. Implementé funciones como la elección de conductoras mujeres, seguimiento de rutas en tiempo real y llamada SOS.',
            botonTexto: 'Ver proyecto',
            imagenPosicion: 'derecha',
            enlace:'https://www.figma.com/file/bvLwy4Zod7KsoTuesbT1yF/%22Tinne%22-una-app-de-taxi-para-mujeres?type=design&node-id=364%3A2344&mode=design&t=WT1P4xl3eLwcgpBL-1'
        },
        {
            imagenSrc: surprise,
            alt: 'Surprise - Gift App',
            titulo: 'Surprise - Gift App',
            descripcion: 'Desarrollé y implementé una estrategia de UX Writing efectiva para una aplicación, mejorando la comunicación y la experiencia del usuario en cada interacción',
            botonTexto: 'Ver proyecto',
            imagenPosicion: 'izquierda',
            enlace:'https://www.figma.com/file/jsmjde3G6fkZFTHEHuC0te/Surprise-App?type=design&node-id=35%3A174&mode=design&t=ACC97n6f2O1whmCB-1'
        },
    ];

    return (

        <div id="experiencia" className="separar">

            <h1 id="experiencia" className="Titulo-proyecto">Experiencia</h1>

            <div id="experiencia" className="proyectos-container">
                {proyectos.map((proyecto, index) => (
                    <Proyecto key={index} {...proyecto} />
                ))}
            </div>
        </div>

    );
};

export default UltimosProyectos;
