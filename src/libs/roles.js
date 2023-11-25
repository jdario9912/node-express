import Usuarios from "../models/usuarios.model.js";
import Roles from "../models/roles.model.js";

export const esAdministrador = async (req, res, next) => {
  try {
    const usuario = await Usuarios.findById(req.idUsuario);

    if (!usuario)
      return res.status(404).json({ mensaje: "Usuario no encontrado." });

    const roles = await Roles.find({ _id: { $in: usuario.roles } });

    for (let i = 0; i < roles.length; i++) {
      const rol = roles[i].nombre;

      if (rol === "administrador") next();
    }

    return res
      .status(403)
      .json({ mensaje: "Necesitas permisos de administardor." });
  } catch (error) {
    return res.status(403).json({ mensaje: "No estas autorizado." });
  }
};

export const esModerador = async (req, res, next) => {
  try {
    const usuario = await Usuarios.findById(req.idUsuario);

    if (!usuario)
      return res.status(404).json({ mensaje: "Usuario no encontrado." });

    const roles = await Roles.find({ _id: { $in: usuario.roles } });

    for (let i = 0; i < roles.length; i++) {
      const rol = roles[i].nombre;

      if (rol === "moderador") next();
    }

    return res
      .status(403)
      .json({ mensaje: "Necesitas permisos de moderador." });
  } catch (error) {
    return res.status(403).json({ mensaje: "No estas autorizado." });
  }
};
