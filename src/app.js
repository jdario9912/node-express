import express from "express";
import cors from "cors";
import { routeDefaultMiddleware } from "./middlewares/route.default.middleware.js";
import * as errors from "./middlewares/errors.middleware.js";
import usuariosRouter from "./routers/usuarios.router.js";
import morgan from "morgan";
import authRouter from "./routers/auth.router.js";
// import { cookieMiddleware } from "./middlewares/cookie.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.disable("x-powered-by");

app.use("/api/auth", authRouter);

app.use("/api/usuarios", usuariosRouter);

app.use(routeDefaultMiddleware);
app.use(errors.namedErrorHandler);
app.use(errors.defaultErrorHandler);

export default app;
