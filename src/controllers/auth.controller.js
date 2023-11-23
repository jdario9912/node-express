import { Usuario } from "../models/usuarios.model.js";
import { passCompare } from "../libs/pass.compare.js";
import { tokenGenerador } from "../libs/token.js";

export const singupController = async (req, res) => {
  return res.json({ mensaje: "singup" });
};

export const loginController = async (req, res, next) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });

    const passwordOk = passCompare(req.body.password, usuario);

    if (!(passwordOk && usuario))
      return res.status(401).json({ mensaje: "Credenciales incorrectas." });

    const { serializado, token } = tokenGenerador(usuario);

    res.setHeader("Set-Cookie", serializado);
    res.setHeader("Authorization", `Bearer ${token}`);
    res.setHeader("Proxy-Authorization", `Bearer ${token}`);

    return res.status(200).json({
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

export const logoutController = async (req, res) => {
  return res.json({ mensaje: "logout" });
};
