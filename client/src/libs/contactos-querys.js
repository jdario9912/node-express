import axios from "axios";

const contactosApi = axios.create({
  baseURL: "http://localhost:3300/contactos",
});

const getContactosQuery = async () =>  (await contactosApi.get("/")).data

const nuevoContactoQuery = async (contacto) =>
  await contactosApi.post("/", contacto);

const eliminarContactoQuery = async (id) => await contactosApi.delete(`/${id}`);

const editarContactoQuery = async (id, data) =>{
console.log(data);
  await contactosApi.put(`/${id}`, data);
}

export {
  getContactosQuery,
  nuevoContactoQuery,
  eliminarContactoQuery,
  editarContactoQuery,
};
