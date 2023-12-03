import PropsTypes from "prop-types";
import { Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editarContactoQuery } from "../libs/contactos-querys";

const ActualizarBest = ({ id, best, nombre, tel }) => {
  const [contacto, setContacto] = useState({
    best,
    nombre,
    tel,
  });
  const queryClient = useQueryClient();
  const mutacion = useMutation({
    mutationFn: editarContactoQuery,
    onSuccess: () => queryClient.invalidateQueries(["contactos"]),
  });

  const handlerCheckado = (e) => {
    setContacto({...contacto, best: e.target.checked})
    mutacion.mutate(id, contacto);
  };

  return (
    <Checkbox isSelected={contacto.best} onChange={(e) => handlerCheckado(e)}>
      best
    </Checkbox>
  );
};

ActualizarBest.propTypes = {
  tel: PropsTypes.string,
  nombre: PropsTypes.string,
  best: PropsTypes.bool,
  id: PropsTypes.number,
};

export default ActualizarBest;
