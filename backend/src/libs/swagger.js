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
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT Authorization header using the Bearer scheme. Example: "Authorization: Bearer {token}". <br/>Fill this field with <code>token</code> only without "Bearer" prefix.',
        }
      }
    },
    security: [
      { bearerAuth: [] }
    ]
  },
  apis: ['./src/routes/**/*.js', './src/models/db/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Sort tags by name/title ascending
if (swaggerSpec.tags) {
  swaggerSpec.tags.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
}

export const swaggerSetup = swaggerUi.setup(swaggerSpec, {
  swaggerOptions: {
    docExpansion: 'none', // Collapse all by default
    layout: "StandaloneLayout",
    // Enable "Export" (curl, Postman, etc) in Swagger UI
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'trace'],
    tryItOutEnabled: true,
    displayRequestDuration: true,
    showExtensions: true,
    showCommonExtensions: true,
    // Enable "Copy as curl" and "Export" buttons
    requestSnippetsEnabled: true,
    requestSnippets: [
      {
        label: 'HTTP',
        syntax: 'http',
      },
      {
        label: 'JavaScript (fetch)',
        syntax: 'javascript',
      },
      {
        label: 'Python (requests)',
        syntax: 'python',
      },
      {
        label: 'Java (OkHttp)',
        syntax: 'java',
      },
      {
        label: 'C# (.NET HttpClient)',
        syntax: 'csharp',
      },
      {
        label: 'cURL',
        syntax: 'curl',
      },
      {
        label: 'Postman',
        syntax: 'postman',
      },
    ],
  },
  customSiteTitle: 'CBT Tentamen API Docs',
  customCss: '.swagger-ui .topbar { display: none } /* Hide the top bar */',
  customfavIcon: '/favicon.ico'
});

export const swaggerUiServe = swaggerUi.serve;