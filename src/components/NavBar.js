// NavBar.js
import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';
import barIcon from '../assets/bar.png';

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 100;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${visible ? '' : 'hidden'}`}>
      {/* Botón de menú para dispositivos móviles */}
      <button className="menu-button" onClick={handleMenuClick}>
        <img src={barIcon} alt="Menu" />
      </button>

      {/* Lista de navegación */}
      {(menuOpen || window.innerWidth > 768) && (
        <ul className="navbar-list visible">
          <li><a href="#portada">Home</a></li>
          <li><a href="#quien">Quién Soy</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#softwares">Softwares</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
        </ul>
      )}
      
    </nav>
  );
}

export default NavBar;
