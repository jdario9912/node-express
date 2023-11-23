import bcrypt from "bcrypt";

export const passCompare = async (password = null, usuario = null) => {
  return usuario === null
    ? false
    : await bcrypt.compare(password, usuario.passwordHash);
};
