import { Schema, model } from "mongoose";
import * as bcpt from "../libs/bcrypt.js";
const usuarioSchema = new Schema(
  {
    nombre: { require: true, type: String },
    email: { require: true, type: String, unique: true },
    passwordHash: { require: true, type: String },
    creado: { require: true, type: Date },
    roles: [{ ref: "Roles", type: Schema.Types.ObjectId }],
    actualizado: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

usuarioSchema.statics.bcryptPass = bcpt.passwordToHash;

usuarioSchema.statics.comparePass = bcpt.passCompare;

// usuarioSchema.set("toJSON", {
//   transform: (doc, objRetornado) => {
//     objRetornado.id = objRetornado._id;

//     delete objRetornado._id;
//     delete objRetornado.passwordHash;
//   },
// });

export default model("Usuarios", usuarioSchema);
