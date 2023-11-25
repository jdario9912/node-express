import { Router } from "express";
import * as auth from "../controllers/auth.controller.js";

const router = Router();

router.post("/singup", auth.singupController);
router.post("/login", auth.loginController);
router.post("/logout", auth.logoutController);

export default router;

// me falta hacer un middleware para comprobar si el email ya esta registrado en la ruta singup
// comprobar si los middleware de roles funcionan bien
