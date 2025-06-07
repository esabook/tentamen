import express from "express";
import env from 'dotenv'
import apiRoutes from "./routes/index.js"

import { connectDB } from "./libs/db.js";

env.config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Backend running localhost:" + PORT);
    connectDB();
});

app.use(express.json());
app.use("/api", apiRoutes)