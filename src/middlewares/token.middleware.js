import { decodificarToken } from "../libs/jsonwebtoken";
import Usuario from "../models/usuarios.model.js";

export const tokenMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["x-acces-token"];

    if (!token) return res.status(403).json({ mensaje: "La sesion expiro." });

    const decodificado = decodificarToken(token);

    const usuario = await Usuario.findById(decodificado.id, {
      passwordHash: 0,
    });

    if (!usuario) return res.status(404).json("Usuario no encontrado.");

    req.idUsuario = decodificado.id;

    next();
  } catch (error) {
    return res.status(401).json({ mensaje: "No estas autorizado." });
  }
};
