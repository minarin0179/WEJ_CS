const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/app',
    createProxyMiddleware({
      target: 'https://ap-southeast-1.aws.data.mongodb-api.com',
      changeOrigin: true,
    })
  );
};