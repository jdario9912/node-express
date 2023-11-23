export const namedErrorHandler = (error, req, res, next) => {
  switch (error.name) {
    case "CastError":
      return res.status(400).json({ mensaje: "Formato incorrecto" });

    case "TokenExpiredError":
      return res.status(401).json({ mensaje: "La token expiro." });

    default:
      next(error);
  }
};

export const defaultErrorHandler = (error, req, res) =>
  res.status(501).json({ mensaje: error.message });