/*
 * @Author: xzl 
 * @Date: 2020-01-03 15:28:47 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-07 15:14:06
 */
'use strict';

const Controller = require('egg').Controller;

class labelController extends Controller {
 
  //分页获取数据
   async getAllLabel(){
   let { ctx }  =this;
   let payload   = ctx.request.body || {};

   let page  =payload.page - 1;
   let start  = payload.limit*page +1;
   let limit = payload.limit;  
   let data = await this.service.admin.label.getAllLabelByPage({start,limit});
     // 设置响应内容和响应状态码
     ctx.helper.success({ctx,data})
   }

    //添加标签
    async addLabel(){
     let  {ctx} = this;
     let  payload  = ctx.request.body || {};
     let  name  =payload.name;
     let  description  =payload.desc;

    }

}

module.exports = labelController;
