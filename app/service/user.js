'use strict';

const users = new Map([
  ['aaa', { id: 'a', password: 'aaa' }],
  ['bbb', { id: 'b', password: 'bbb' }],
  ['huteming', { id: 'c', password: 'huteming' }]
]);

module.exports = app => {
  class UserService extends app.Service {
    async login (req) {
      const { ctx, app } = this;
      const { username, password } = req;
      if (!users.has(username)) {
        ctx.throw(400, '无此用户', { data: req })
      }
      let user = users.get(username)
      if (user.password !== password) {
        ctx.throw(400, '密码错误', { data: req })
      }
      const token = app.jwt.sign({
        iss: user.id
      }, app.config.jwt.secret);
      return token
    }
  }
  return UserService;
};