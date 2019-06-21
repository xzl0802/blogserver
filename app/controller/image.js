'use strict';

const Controller = require('egg').Controller;
let moment  = require('moment');
class imageController extends Controller {
  async imageIndex() {     //动态生成背景图
    const { ctx } = this;
    console.log(ctx);
    ctx.sendFile( '../public/image/bing/20190429.png');
  }
}

module.exports = imageController;
