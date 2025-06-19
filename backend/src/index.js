import express from "express";
import env from 'dotenv'
import apiRoutes from "./routes/index.js"
import { logMiddleware, errorLogger } from "./middleware/log.middleware.js";

import { connectDB } from "./libs/db.js";
import http from 'http';
import { setupWebSocket } from './websocket.js';
import { connectCache } from './libs/cache.js';
import { swaggerSetup, swaggerUiServe } from "./libs/swagger.js";

env.config();

const app = express();
const PORT = process.env.PORT;



app.use(express.json());
app.use(logMiddleware);

app.use("/api", apiRoutes);
app.use('/', swaggerUiServe, swaggerSetup);

app.use(errorLogger);

const server = http.createServer(app);

server.listen(PORT, async () => {
    console.log("Backend running localhost:" + PORT);
    connectDB();
    connectCache();
    setupWebSocket(server);
});