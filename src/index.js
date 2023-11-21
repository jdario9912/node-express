import app from "./app.js";
import { portServer } from "./config.js";
import "./db.js";

app.listen(portServer, () =>
  console.log("Servidor corriendo en puerto", portServer)
);
