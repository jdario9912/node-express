import PropsTypes from "prop-types";
import EliminarContacto from "./eliminar-contacto";
import ActualizarBest from "./actualizar-best";

const CardContacto = ({ id, nombre, tel, best }) => {

  return (
    <li className="flex justify-between p-3 bg-blue-500 mt-2 rounded-md">
      <div>
        <h3>{nombre}</h3>
        <p>{tel}</p>
      </div>
      <div className="flex flex-col">
        <ActualizarBest id={id} best={best} nombre={nombre} tel={tel} />
        <EliminarContacto id={id} />
      </div>
    </li>
  );
};

CardContacto.propTypes = {
  nombre: PropsTypes.string,
  tel: PropsTypes.string,
  best: PropsTypes.bool,
  id: PropsTypes.number,
};

export default CardContacto;
