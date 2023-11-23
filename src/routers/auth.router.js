import { Router } from "express";
import * as auth from "../controllers/auth.controller.js";

const router = Router();

router.post("/singup", auth.singupController);
router.post("/login", auth.loginController);
router.post("/logout", auth.logoutController);

export default router;
