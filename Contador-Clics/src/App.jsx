/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logo from '/images/logo.png'

function App() {
  const [ numClics, setNumClics ] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className="freecodecamp-logo-contenedor">
        <img src={logo} className='freecodecamp-logo' alt="logo" />
      </div>
      <div className="contenedor-principal">
        <Contador 
            numClics={numClics}
        />
        <Boton
            texto='Clic'
            botonClic={true}
            manejarClic={manejarClic}
        />
        <Boton 
            texto='Reiniciar'
            botonClic={false}
            manejarClic={reiniciarContador}
        />
      </div>
    </div>
  )
}

export default App;
