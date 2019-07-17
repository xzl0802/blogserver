
'use strict';

const Controller = require('egg').Controller;

class countController extends Controller {
  async countIP() {     //统计前端界面访问Ip
    const { ctx } = this;
     console.log(ctx);
     
    ctx.body = 'hi, egg';
  }
}

module.exports = countController;
