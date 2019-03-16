'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app } = this;
    // 这里会报错
    await app.api.wx.req();
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
