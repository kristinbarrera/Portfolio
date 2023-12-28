import React, { useState, useEffect } from 'react';
import CuadroConTexto from '../components/CuadroConTexto';
import '../styles/skills.css';

const Skills = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize(); // Verificar el tamaño inicial
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const textos = [
    'UI Design',
    'Accesibilidad UX',
    'Diseño Responsivo',
    'Design System',
    'Ilustración',
    'Prototipado',
  ];

  const cuadrosPorFila = isSmallScreen ? 2 : 3;
  const grupos = [];
  for (let i = 0; i < textos.length; i += cuadrosPorFila) {
    grupos.push(textos.slice(i, i + cuadrosPorFila));
  }

  return (
    <div id="skills" className="skills">
      <div className="skills-titulo">Skills</div>

      <div className="skills-cuadros-container">
        {grupos.map((grupo, index) => (
          <div className="skills-cuadros-group" key={index}>
            {grupo.map((texto, subIndex) => (
              <CuadroConTexto key={subIndex} texto={texto} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
