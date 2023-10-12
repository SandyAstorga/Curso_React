/* eslint-disable react/prop-types */
import '../styles/BotonClear.css'

const BotonClear = (props) => {

    return (
        <div className="boton-clear" 
            onClick={props.manejarClear}> 
            {props.children}
        </div>
    )
};

export default BotonClear
