/*
 * @Author: xzl 
 * @Date: 2019-04-30 10:05:18 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-07-22 16:36:18
 */

const Controller = require('egg').Controller;
const bcrypt = require('bcryptjs');
class LoginController extends Controller {
  async loginIndex() {
    const { ctx } = this;
    let payload = ctx.request.body || {};
 
    let username = payload.username;
    let password  = payload.password;
     // 调用 Service 进行业务处理
     let user = await this.service.user.findbyUserName(username,'admin');
     if(!user){
      ctx.helper.failure(ctx,'用户登录信息不存在!')
      return; 
     }
     
    ctx.body = 'hi, egg';
  }
}

module.exports = LoginController;
