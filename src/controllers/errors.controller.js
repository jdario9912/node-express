export const castErrorHandler = (error, req, res, next) => {
  if (error.name == "CastError")
    return res.status(400).send({ error: "Formato incorrecto" });

  next(error);
};

export const defaultErrorHandler = (error, req, res) =>
  res.status(501).send({ error: error.message });
