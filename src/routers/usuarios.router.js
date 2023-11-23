import { Router } from "express";

import * as controller from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.delete("/:id", controller.eliminarPorId);
router.patch("/:id", controller.actualizarPorId);

export default router;
