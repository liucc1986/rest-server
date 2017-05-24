'use strict';

module.exports = {
  success (data) {
    this.body = data;
    this.status = 200;
    this.set('Content-Type', 'application/json');
  }
}