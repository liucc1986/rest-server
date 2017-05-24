'use strict';

exports.index = async (ctx) => {
  ctx.success({hello: 'world'});
}

exports.render = async (ctx) => {
  ctx.success(ctx.state.user)
}

exports.test = async (ctx) => {
  ctx.success({ hello: 'nice' });
}
