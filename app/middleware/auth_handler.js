'use strict'

// const jwt = require('jwt-simple');

module.exports = () => {
  // return async (ctx, next) => {
  //   const { request, query, params } = ctx;
  //   let token = (request.body && request.body.access_token) || (query && query.access_token) || ctx.get('x-access-token');
  //   token = (token && jwt.decode(token, ctx.app.config.keys));
  //   if (token.exp > Date.now()) {
  //     ctx.state.userId = token.iss
  //   }
  //   await next()
  // };
};
