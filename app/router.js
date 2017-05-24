'use strict';

module.exports = app => {
  app.get('/home', app.jwt, 'home.test');
  app.get('/', 'home.index');
  app.get('/render', app.jwt, 'home.render');
  app.post('login', '/api/login', 'user.login');
  app.get('user', '/api/user', 'user.get');
};
