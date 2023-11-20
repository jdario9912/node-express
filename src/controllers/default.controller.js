export const defaultController = (req, res) => {
  res.status(404).json({ error: "Pagina no encontrada" });
};
