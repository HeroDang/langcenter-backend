const controller = require('../controllers/auth.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post('/api/auth/signin', controller.signin);
  app.post('/api/auth/sign-in-web', controller.signInWeb);
  app.post('/api/auth/refreshtoken', controller.refreshToken);
  app.post('/api/auth/send-mail', controller.sendMail);
  app.post('/api/auth/reset-password', controller.resetPassword);
};
