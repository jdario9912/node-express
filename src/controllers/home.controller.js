import pkg from "../../package.json";

export const homeController = (req, res) => {
  return res.status(200).json({
    autor: pkg.author,
    nombre: pkg.name,
    version: pkg.version,
    descripcion: pkg.description,
  });
};
