import jwt from "jsonwebtoken";
import { jwtSecret, nodeEnv } from "../config.js";
import { serialize } from "cookie";

export const tokenGenerador = (usuario) => {
  const usuarioParaToken = {
    id: usuario.id,
    nombre: usuario.nombre,
    email: usuario.email,
  };

  const token = jwt.sign(usuarioParaToken, jwtSecret, { expiresIn: 60 * 60 });

  const configSerialice = {
    httpOnly: true,
    secure: nodeEnv === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  };

  return { serializado: serialize("authToken", token, configSerialice), token };
};
