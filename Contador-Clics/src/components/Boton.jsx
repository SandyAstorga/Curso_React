/* eslint-disable react/prop-types */
import '../style/Boton.css'

const Boton = ({ texto, botonClic, manejarClic}) => {
    return (
        <div>
            <button 
                className={ botonClic ? 'botonClic' : 'botonReiniciar' }
                onClick={manejarClic}>
                {texto}
            </button>
        </div>
    )
}

export default Boton;
