import './App.css';
import Testimonio from "./components/Testimonios/Testimonio"
import datos from "./datos.js"


function App() {

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        {
          datos?.map((d,index) => {
            return (
              <Testimonio    
                key={index}
                nombre={d.nombre}
                pais={d.pais}
                imagen={d.imagen}
                cargo={d.cargo}
                empresa={d.empresa}
                testimonio={d.testimonio}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
