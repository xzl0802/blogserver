/*
 * @Author: xzl 
 * @Date: 2020-01-03 15:28:47 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-07 16:19:22
 */
'use strict';

const Controller = require('egg').Controller;

class labelController extends Controller {
  constructor(ctx) {
    super(ctx)

    this.labelCreateTransfer = {
      name: {type: 'string', required: true, allowEmpty: false},
    }
  }
  //分页获取数据
   async getAllLabel(){
   let { ctx }  =this;
   let payload   = ctx.request.body || {};

   let page  =payload.page - 1;
   let start  = payload.limit*page;
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
      ctx.validate(this.labelCreateTransfer);
     let  loginUser = ctx.helper.parsingToken({ctx}).user_name;  
     let  validateSingle  = await this.service.admin.label.selectSingleLabel({name});
      if(!validateSingle){
        return ctx.helper.failure({ ctx, message: '标签不可重复!' })
      }
      await this.service.admin.label.addLabel({name,description,loginUser});
         // 设置响应内容和响应状态码
     ctx.helper.success({ctx})
    }

}

module.exports = labelController;
