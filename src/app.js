import express from "express";
import cors from "cors";
import { defaultController } from "./controllers/default.controller.js";
import {
  castErrorHandler,
  defaultErrorHandler,
} from "./controllers/errors.controller.js";
import usuariosRouter from "./routers/usuarios.router.js";
import morgan from "morgan";
import loignRouter from "./routers/login.router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.disable("x-powered-by");

app.use("/api/usuarios", usuariosRouter);

app.use("/api/login", loignRouter);

app.use(defaultController);
app.use(castErrorHandler);
app.use(defaultErrorHandler);

export default app;
