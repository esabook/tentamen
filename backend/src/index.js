import express from "express";
import env from 'dotenv'
import apiRoutes from "./routes/index.js"
import { logMiddleware, errorLogger } from "./middleware/log.middleware.js";

import { connectDB } from "./libs/db.js";
import http from 'http';
import cors from 'cors';
import { setupWebSocket } from './websocket.js';
import { connectCache } from './libs/cache.js';
import { swaggerSetup, swaggerUiServe } from "./libs/swagger.js";
import { delayMiddleware } from "./middleware/delay.middleware.js";

env.config();

const app = express();
const PORT = process.env.PORT;


app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', ',x-custom-header', 'delay-ms'],
    credentials: true,
}));

app.use(express.json());
app.use(delayMiddleware);
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