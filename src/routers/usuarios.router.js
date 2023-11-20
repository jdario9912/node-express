import { Router } from "express";
import {
  actualizar,
  eliminar,
  guardarUsuario,
  obtenerPorId,
  obtenerTodos,
} from "../controllers/usuarios.controller.js";

const usuariosRouter = Router();

usuariosRouter.post("/", guardarUsuario);
usuariosRouter.get("/", obtenerTodos);
usuariosRouter.get("/:id", obtenerPorId);
usuariosRouter.delete('/:id', eliminar)
usuariosRouter.patch('/:id', actualizar)

export default usuariosRouter;
