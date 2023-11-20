import express from "express";
import cors from "cors";
import { defaultController } from "./controllers/default.controller.js";
import { castErrorHandler, defaultErrorHandler } from "./controllers/errors.controller.js";
import usuariosRouter from "./routers/usuarios.router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.disable("x-powered-by");

app.use("/api/usuarios", usuariosRouter);

app.use(defaultController);
app.use(castErrorHandler);
app.use(defaultErrorHandler)

export default app;
