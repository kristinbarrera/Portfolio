import React from 'react';
import NavBar from './components/NavBar';
import Portada from './components/Portada';
import Quiensoy from './components/Quiensoy';
import Skills from './components/Skills';
import Softwares from './components/CuadroSoftware';
import CrearSoluciones from './components/CrearSoluciones';
import UltimosProyectos from './components/UltimoProyecto';
import Fondo from './components/Fondo';

function App() {
  return (
    <div className="App">
      <Fondo />
      <div className="content-over-background">
        <NavBar />
        <Portada />
        <Quiensoy />
        <Skills />
        <Softwares />
        <CrearSoluciones />
        <UltimosProyectos />
      </div>
    </div>
  );
}

export default App;
