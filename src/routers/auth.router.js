import { Router } from "express";
import * as auth from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", auth.loginController);
router.post("/singup", auth.singupController);

export default router;
