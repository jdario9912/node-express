import { Router } from "express";

import * as controller from "../controllers/usuarios.controller.js";
import { tokenMiddleware } from "../middlewares/token.middleware.js";

const router = Router();

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.delete("/:id", tokenMiddleware, controller.eliminarPorId);
router.patch("/:id", tokenMiddleware, controller.actualizarPorId);

export default router;
