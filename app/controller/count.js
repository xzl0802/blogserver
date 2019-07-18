
'use strict';

const Controller = require('egg').Controller;

class countController extends Controller {
  async countIP() {     //统计前端界面访问Ip
    const { ctx } = this;
    const payload = ctx.request.body || {}
    // 调用 Service 进行业务处理
    const res = await this.service.count.create(payload);

    // 设置响应内容和响应状态码
    ctx.helper.success({ctx})
  }
}

module.exports = countController;
