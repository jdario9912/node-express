import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombre: { require: true, type: String },
  email: { require: true, type: String },
  passwordHash: { require: true, type: String },
  creado: { require: true, type: Date },
  admin: { default: false, type: Boolean },
  actualizado: Date,
});

usuarioSchema.set("toJSON", {
  transform: (doc, objRetornado) => {
    objRetornado.id = objRetornado._id;

    delete objRetornado.__v;
    delete objRetornado._id;
    // delete objRetornado.passwordHash;
  },
});

export const Usuario = model("Usuarios", usuarioSchema);
