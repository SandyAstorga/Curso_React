/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import '../styles/Boton.css';

const Boton = (props) => {

    const esOperador = (valor) => {
        return  isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </button>
    )
};

export default Boton
