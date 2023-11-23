import mongoose from "mongoose";
import { mongoUri } from "./config.js";

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDb"))
  .catch((e) => console.log(e));