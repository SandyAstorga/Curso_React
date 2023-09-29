/* eslint-disable react/prop-types */
import '../styles/Testimonio.css'

const Testimonio = ({nombre, imagen, pais, cargo, empresa, testimonio}) => {

    return (
        <div className="contenedor-testimonio">
          <img className="imagen-testimonio" src={imagen} alt={`foto de ${nombre}`} />
          <div className="contenedor-texto-testimonio">
            <p className="nombre-y-pais-testimonio">
              <strong>{nombre}</strong> en <strong>{pais}</strong>
            </p>
            <p className="cargo-testimonio">
              {cargo} en <strong>{empresa}</strong>
            </p>
            <p className="texto-testimonio">
              &quot;{testimonio}&quot;
            </p>
            {/* utilizamos &quot; para representar las comillas dobles dentro del contenido del elemento <p>. De esta manera, las comillas dobles se mostrarán correctamente en la salida, y el contenido de testimonio se mostrará dentro de comillas dobles en la página. */}
          </div>
        </div>
    )
}


export default Testimonio
