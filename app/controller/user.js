'use strict';

const createRule = {
  username: 'string',
  password: 'string'
};

exports.login = async (ctx) => {
  // 校验 `ctx.request.body` 是否符合我们预期的格式
  // 如果参数校验未通过，将会抛出一个 status = 422 的异常
  ctx.validate(createRule);
  // 调用 Service 进行业务处理
  const res = await ctx.service.user.login(ctx.request.body);
  // 设置响应体和状态码
  ctx.success(res);
};

exports.get = async (ctx) => {
  let users = await ctx.model.User.find({});
  ctx.success(users);
}
