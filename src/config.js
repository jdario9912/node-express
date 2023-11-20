import dotenv from "dotenv";

dotenv.config();

const portServer = process.env.PORT_SERVER;
const mongoUri = process.env.MONGO_URI

export { portServer, mongoUri };
