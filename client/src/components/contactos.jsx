import { useQuery } from "@tanstack/react-query";
import { getContactosQuery } from "../libs/contactos-querys";
import CardContacto from "./card-contacto";

const Contactos = () => {
  const {
    data: contactos,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["contactos"],
    queryFn: getContactosQuery,
    select: (contactos) => contactos.sort((a, b) => b.nombre - b.nombre),
  });

  if (isError) return <span>{error.message}</span>;

  if (isLoading) return <span>cargando...</span>;

  return (
    <ul>
      {contactos.map(({ id, nombre, tel, best }) => (
        <CardContacto key={id} id={id} nombre={nombre} tel={tel} best={best} />
      ))}
    </ul>
  );
};

export default Contactos;
