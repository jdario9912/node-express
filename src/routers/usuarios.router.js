import { Router } from "express";

import * as controller from "../controllers/usuarios.controller.js";
import { tokenMiddleware } from "../middlewares/token.middleware.js";
import * as roles from "../libs/roles.js";

const router = Router();

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.delete(
  "/:id",
  [tokenMiddleware, roles.esAdministrador],
  controller.eliminarPorId
);
router.patch(
  "/:id",
  [tokenMiddleware, roles.esModerador],
  controller.actualizarPorId
);

export default router;
