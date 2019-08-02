
'use strict';

const Controller = require('egg').Controller;

class countController extends Controller {
  async countIP() {     //统计前端界面访问Ip
    let { ctx } = this;
    let payload = ctx.request.body || {}
    // 调用 Service 进行业务处理
    let res = await this.service.count.create(payload);

    // 设置响应内容和响应状态码
    ctx.helper.success({ctx})
  } 
  //分页获取访问数据
   async getCountIpByPagination(){
   let { ctx }  =this;
   let payload   = ctx.request.body || {};
   let page  =payload.page - 1;
   let start  = limit +1;
   let limit = payload.limit + page * limit;  
   let res = await this.service.count.getCountIpByPagination(payload);

   }
}

module.exports = countController;
