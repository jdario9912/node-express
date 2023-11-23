import dotenv from "dotenv";

dotenv.config();

const portServer = process.env.PORT_SERVER;
const mongoUri = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;
const nodeEnv = process.env.NODE_ENV;

export { portServer, mongoUri, jwtSecret, nodeEnv };
