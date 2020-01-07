/*
 * @Author: xzl 
 * @Date: 2019-11-11 14:40:11 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-07 16:19:35
 */
'use strict';

const Controller = require('egg').Controller;
const fs   =   require("fs-extra");

class logController extends Controller {
  async logQuery() {     //后台日志查询接口
    let { ctx } = this;
        
  }
  //分页获取访问数据
   async getCountIpByPagination(){
   let { ctx }  =this;
   let payload   = ctx.request.body || {};

   let page  =payload.page - 1;
   let start  = payload.limit*page;
   let limit = payload.limit;  
   let data = await this.service.admin.count.getCountIp({start,limit});
     // 设置响应内容和响应状态码
     ctx.helper.success({ctx,data})
   }
}

module.exports = logController;
