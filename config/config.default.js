'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1495380399687_5309';

  config.jwt = {
    secret: 'huteming'
  };

  // add your config here
  config.security = {
    csrf: {
      enable: false
    }
  };

  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler' ];
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler ={
    match: '/api'
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017',
    options: {}
  };

  return config;
};
