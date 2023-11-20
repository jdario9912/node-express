import mongoose from 'mongoose'
import { mongoUri } from './config.js'

mongoose.connect(mongoUri)
    .then(() => console.log("Conectado a MongoDb"))
    .catch((e) => console.log(e))