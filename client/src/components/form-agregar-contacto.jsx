import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { nuevoContactoQuery } from "../libs/contactos-querys";

const FormAgregarContacto = () => {
  const [contacto, setContacto] = useState({
    nombre: "",
    tel: "",
    best: false,
  });
  const queryClient = useQueryClient();
  const mutacion = useMutation({
    mutationFn: nuevoContactoQuery,
    onSuccess: () => {
      setContacto({
        nombre: "",
        tel: "",
        best: false,
      });
      queryClient.invalidateQueries({ queryKey: ["contactos"] });
    },
    onError: (error) => console.log(error),
  });

  const agregar_contacto = (e) => {
    e.preventDefault();
    mutacion.mutate(contacto);
  };

  const onChangeHandler = (name, value) =>
    setContacto({ ...contacto, [name]: value });

  return (
    <div className="container m-4">
      <form
        onSubmit={agregar_contacto}
        className="max-w-sm bg-blue-200 p-4 mx-auto flex flex-col gap-3 rounded-md"
      >
        <Input
          name="nombre"
          label="nombre"
          id="nombre"
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
        />

        <Input
          label="telefono"
          type="number"
          name="tel"
          id="tel"
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
        />

        <Checkbox
          name="best"
          onChange={(e) => onChangeHandler(e.target.name, e.target.checked)}
        >
          mejor amigo
        </Checkbox>

        <Button color="primary">
          <button className="w-full">agregar</button>
        </Button>
      </form>
    </div>
  );
};

export default FormAgregarContacto;
