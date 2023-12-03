import { Button } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropsTypes from "prop-types";
import { eliminarContactoQuery } from "../libs/contactos-querys";

const EliminarContacto = ({ id }) => {
  const queryClient = useQueryClient();

  const mutacion = useMutation({
    mutationFn: eliminarContactoQuery,
    onError: (error) => console.log(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["contactos"] }),
  });

  const eliminar_contacto = () => {
    mutacion.mutate(id);
  };

  return (
    <Button color="danger" onClick={() => eliminar_contacto()}>
      eliminar
    </Button>
  );
};

EliminarContacto.propTypes = {
  id: PropsTypes.number,
};

export default EliminarContacto;
