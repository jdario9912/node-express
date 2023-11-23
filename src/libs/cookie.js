import { serialize } from "cookie";
import { nodeEnv } from "../config";

export const serializarCookieAuth = (nombre = "", token = "") => {
  const configSerialice = {
    httpOnly: true,
    secure: nodeEnv === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  };
  return serialize(nombre, token, configSerialice);
};
