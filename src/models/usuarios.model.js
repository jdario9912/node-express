import { Schema, model } from "mongoose";

const usuarioSchema = new Schema(
  {
    nombre: { require: true, type: String },
    email: { require: true, type: String },
    passwordHash: { require: true, type: String },
    creado: { require: true, type: Date },
    roles: [{ ref: "Roles", type: Schema.Types.ObjectId }],
    actualizado: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

usuarioSchema.set("toJSON", {
  transform: (doc, objRetornado) => {
    objRetornado.id = objRetornado._id;

    delete objRetornado._id;
    // delete objRetornado.passwordHash;
  },
});

export const Usuario = model("Usuarios", usuarioSchema);
