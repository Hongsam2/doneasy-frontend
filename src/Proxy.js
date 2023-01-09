const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '/kapi.kakao.com',
      changeOrigin: true,
    })
  );
};