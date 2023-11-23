import Usuario from "../models/usuarios.model.js";
import * as jwtLibs from "../libs/jsonwebtoken.js";

export const singupController = async (req, res) => {
  const { nombre, email, password } = req.body;

  const nuevoUsuario = new Usuario({
    nombre,
    email,
    passwordHash: await Usuario.bcryptPass(password),
  });

  await nuevoUsuario.save();

  const { serializado } = jwtLibs.tokenGenerador(nuevoUsuario._id, 86400);

  return res.json({ token: serializado });
};

export const loginController = async (req, res, next) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });

    // aca falta el compare password que esta en usuarioModel
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
