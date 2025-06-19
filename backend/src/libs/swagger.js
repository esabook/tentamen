
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CBT Tentamen API',
      version: '1.0.0',
      description: 'API documentation for CBT Tentamen backend.<br/>To use this page you sould fill the <b>Authorize</b> with JWT from <code>/auth/signin</code> response.',
      contact: {
        name: 'CBT Tentamen Team',
        email: 'esa_book@outlook.com',
        url: 'https://github.com/esabook/tentamen'
      },
      license: {
        name: 'License MIT',
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

export const swaggerSetup = swaggerUi.setup(swaggerSpec, {
  swaggerOptions: {
    docExpansion: 'none', // Collapse all by default
    layout: "StandaloneLayout"
  },
  customSiteTitle: 'CBT Tentamen API Docs',
  customCss: '.swagger-ui .topbar { display: none } /* Hide the top bar */',

  customfavIcon: '/favicon.ico'
});

export const swaggerUiServe = swaggerUi.serve;