import express from "express";
import 'dotenv/config'
import router from "./router";

import { connectDB } from "./config/db";


const app = express();


connectDB();
/** leer datos */
app.use(express.json());

/** usar router */
app.use('/', router);


export default app;