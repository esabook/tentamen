import express from "express";
import env from 'dotenv'
import apiRoutes from "./routes/index.js"
import { logMiddleware, errorLogger } from "./middleware/log.middleware.js";

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import { connectDB } from "./libs/db.js";
import http from 'http';
import { setupWebSocket } from './websocket.js';

env.config();

const app = express();
const PORT = process.env.PORT;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CBT Tentamen API',
      version: '1.0.0',
      description: 'API documentation for CBT Tentamen backend.<br/>To use this page you sould fill the Authorize.jwt with jwt from /auth/signin response.',
      contact: {
        name: 'CBT Tentamen Team',
        email: 'esa_book@outlook.com',
        url: 'https://github.com/esabook/tentamen'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/license/mit/'
      } 
    },
    servers: [
      { url: '/api' }
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'jwt',
          description: 'JWT auth via cookie or header named jwt'
        }
      }
    },
    security: [
      { jwt: [] }
    ]
  },
  apis: ['./src/routes/**/*.js', './src/models/db/*.js'], // Path to the API docs
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);


app.use(express.json());
app.use(logMiddleware);

app.use("/api", apiRoutes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  swaggerOptions: {
    docExpansion: 'none', // Collapse all by default
    layout: "StandaloneLayout"
  },
  customSiteTitle: 'CBT Tentamen API Docs',
  customCss: '.swagger-ui .topbar { display: none } /* Hide the top bar */',

  customfavIcon: '/favicon.ico'
}));

app.use(errorLogger);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Backend running localhost:" + PORT);
    connectDB();
    setupWebSocket(server);
});