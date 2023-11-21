import { Router } from "express";
import { loginController } from "../controllers/login.controller.js";

const loignRouter = Router();

loignRouter.post("/", loginController);

export default loignRouter;
