import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombre: String,
  email: String,
  admin: Boolean,
  creado: Date,
  actualizado: Date,
});

export const Usuario = model("Usuarios", usuarioSchema);
