import { Router } from "express";

import * as controller from "../controllers/usuarios.controller.js";
import { cookieMiddleware } from "../middlewares/token.middleware.js";

const router = Router();

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.delete("/:id", cookieMiddleware, controller.eliminarPorId);
router.patch("/:id", controller.actualizarPorId);

export default router;
