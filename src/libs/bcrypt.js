import bcrypt from "bcrypt";

export const passwordToHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const passCompare = async (password, passwordHash) => {
  return await bcrypt.compare(password, passwordHash);
};
