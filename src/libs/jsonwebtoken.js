import jwt from "jsonwebtoken";
import { jwtSecret } from "../config.js";
import { serializarCookieAuth } from "./cookie.js";

export const tokenGenerador = (idUsuario = "", expiresIn = 0) => {
  const dataToken = { id: idUsuario };

  const token = jwt.sign(dataToken, jwtSecret, { expiresIn });

  return { serializado: serializarCookieAuth("authToken", token), token };
};
