'use strict';

// had enabled by egg
// exports.static = true;
exports.validate = {
  enable: true,
  package: 'egg-validate'
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};
