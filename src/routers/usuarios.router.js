import { Router } from "express";
import {
  actualizarPorId,
  eliminarPorId,
  guardarUsuario,
  obtenerPorId,
  obtenerTodos,
} from "../controllers/usuarios.controller.js";

const usuariosRouter = Router();

usuariosRouter.post("/", guardarUsuario);
usuariosRouter.get("/", obtenerTodos);
usuariosRouter.get("/:id", obtenerPorId);
usuariosRouter.delete("/:id", eliminarPorId);
usuariosRouter.patch("/:id", actualizarPorId);

export default usuariosRouter;
