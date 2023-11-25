import Usuario from "../models/usuarios.model.js";
import Roles from "../models/roles.model.js";
import * as jwtLibs from "../libs/jsonwebtoken.js";

export const singupController = async (req, res, next) => {
  const { nombre, email, password, roles } = req.body;

  try {
    let nuevoUsuario = new Usuario({
      nombre,
      email,
      passwordHash: await Usuario.bcryptPass(password),
    });

    if (roles) {
      const rolesEncontrados = await Roles.find({ nombre: { $in: roles } });
      nuevoUsuario.roles = rolesEncontrados.map((rol) => rol._id.toString());
    } else {
      const rolEncontrado = await Roles.findOne({ nombre: "usuario" });
      nuevoUsuario.roles = [rolEncontrado._id.toString()];
    }

    const usuarioCreado = await nuevoUsuario.save();

    const { serializado, token } = jwtLibs.tokenGenerador(
      usuarioCreado._id,
      86400
    );

    res.setHeader("Set-Cookie", serializado);
    res.setHeader("Authorization", `Bearer ${token}`);
    res.setHeader("Proxy-Authorization", `Bearer ${token}`);
    return res.json({ token });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email }).populate(
      "roles"
    );

    if (!usuario)
      return res.status(404).json({ mensaje: "Usuario no existe." });

    const match = await Usuario.comparePass(
      req.body.password,
      usuario.passwordHash
    );

    if (!match)
      return res.status(400).json({ mensaje: "Credenciales incorrectas" });

    const { serializado, token } = jwtLibs.tokenGenerador(usuario._id, 86400);

    res.setHeader("Set-Cookie", serializado);
    res.setHeader("Authorization", `Bearer ${token}`);
    res.setHeader("Proxy-Authorization", `Bearer ${token}`);

    return res.status(200).json({
      token,
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
