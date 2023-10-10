/* eslint-disable react/prop-types */
import '../style/Contador.css'

const Contador = ({ numClics }) => {
    return (
        <div className="contador">
            {numClics}
        </div>
    )
}

export default Contador;
