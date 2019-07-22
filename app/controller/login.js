/*
 * @Author: xzl 
 * @Date: 2019-04-30 10:05:18 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-07-22 16:51:44
 */

const Controller = require('egg').Controller;
const bcrypt = require('bcryptjs');
class LoginController extends Controller {
  async loginIndex() {
    const { ctx } = this;
    let payload = ctx.request.body || {};
    let salt = bcrypt.genSaltSync(10);
    let username = payload.username;
    let password  = payload.password;
    let hash = bcrypt.hashSync(password,salt);  //加密前端传回的密码
     // 调用 Service 进行业务处理
     let user = await this.service.user.findbyUserName(username,'admin');
     if(!user){
      ctx.helper.failure(ctx,'用户登录信息不存在!')
      return; 
     }
     let pwdCompare= bcrypt.compareSync(hash, user.password); //对比用户密码
     if(pwdCompare){
      ctx.helper.failure(ctx,'用户名或密码错误!')
     }
     else{
      ctx.helper.failure(ctx,'用户名或密码错误!')
     }
  }
}

module.exports = LoginController;

//https://blog.csdn.net/JiangYuXuan1994/article/details/80196090