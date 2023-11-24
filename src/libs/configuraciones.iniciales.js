import Roles from "../models/roles.model.js";

export const crearRoles = async () => {
  try {
    const cantidad = await Roles.estimatedDocumentCount();

    if (cantidad > 0) return;

    await Promise.all([
      new Roles({ nombre: "administardor" }).save(),
      new Roles({ nombre: "moderador" }).save(),
      new Roles({ nombre: "usuario" }).save(),
    ]);

    console.log("Se crearon roles.");
  } catch (error) {
    console.log(error);
  }
};
