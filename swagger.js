const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'API documentation for Express application',
    },
  },
  apis: ['./routes/*.js'], // 指定包含路由定义的文件路径
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
