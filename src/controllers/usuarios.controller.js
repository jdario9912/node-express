import { Usuario } from "../models/usuarios.js";

export const guardarUsuario = async (req, res, next) => {
  try {
    const usuario = new Usuario(req.body);

    const usuarioGuardado = await usuario.save();

    return res.status(200).json({ usuarioGuardado });
  } catch (error) {
    next(error);
  }
};

export const obtenerTodos = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find({});

    return res.status(200).json({ usuarios });
  } catch (error) {
    next(error);
  }
};

export const obtenerPorId = async (req, res, next) => {
  const id = req.params.id;

  try {
    const usuario = await Usuario.findById(id).exec();

    if (!usuario)
      return res.status(404).json({ mensaje: "Usuario no encontrado" });

    return res.status(200).json({ usuario });
  } catch (error) {
    next(error);
  }
};

export const eliminar = async (req, res, next) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);

    if (usuarioEliminado.deletedCount == 0)
      throw new Error("No se pudo borrar el usuario.");

    return res.status(204).send(null);
  } catch (error) {
    next(error);
  }
};

export const actualizar = async (req, res, next) => {
  try {
    // seguir aca
  } catch (error) {
    next(error);
  }
};
