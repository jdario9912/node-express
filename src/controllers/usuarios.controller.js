import { Usuario } from "../models/usuarios.model.js";
import bcrypt from "bcrypt";

export const guardarUsuario = async (req, res, next) => {
  const body = req.body;
  try {
    const passwordHash = await bcrypt.hash(body.password, 10);

    const usuario = new Usuario({ ...body, passwordHash, creado: Date.now() });

    const usuarioGuardado = await usuario.save();

    return res.status(200).json({ usuarioGuardado });
  } catch (error) {
    next(error);
  }
};

export const obtenerTodos = async (_, res, next) => {
  try {
    const usuarios = await Usuario.find({});

    return res.status(200).json({
      usuarios: usuarios.sort((a, b) => a.nombre.localeCompare(b.nombre)),
    });
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

export const eliminarPorId = async (req, res, next) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);

    if (!usuarioEliminado)
      return res.status(501).json({ mensaje: "No se pudo borrar el usuario." });

    if (usuarioEliminado.deletedCount === 0)
      return res
        .status(500)
        .json({ mensaje: "No se pudo eliminar el usuario." });

    return res.status(204).send(null);
  } catch (error) {
    next(error);
  }
};

export const actualizarPorId = async (req, res, next) => {
  try {
    const actualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!actualizado)
      return res
        .status(501)
        .json({ mensaje: "No se pudo actualizar el usuario." });
    return res.status(200).json({ usuarioActualizado: actualizado });
  } catch (error) {
    next(error);
  }
};
