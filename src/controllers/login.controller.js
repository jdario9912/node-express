import { Usuario } from "../models/usuarios.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config.js";

export const loginController = async (req, res, next) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });

    const passwordOk =
      usuario === null
        ? false
        : await bcrypt.compare(req.body.password, usuario.passwordHash);

    if (!(passwordOk && usuario))
      return res.status(401).json({ mensaje: "Credenciales incorrectas." });

    const usuarioParaToken = {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
    };

    const token = jwt.sign(usuarioParaToken, jwtSecret, { expiresIn: 60 * 60 });

    res.setHeader("Authorization", `Bearer ${token}`);
    res.setHeader("Proxy-Authorization", `Bearer ${token}`);

    return res.json({
      usuario: {
        id: usuario._id,
        email: req.body.email,
        nombre: usuario.nombre,
      },
    });
  } catch (error) {
    next(error);
  }
};
