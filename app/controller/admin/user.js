/*
 * @Author: xzl 
 * @Date: 2019-12-26 13:13:13 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-26 13:22:02
 */
const Controller = require('egg').Controller;

class UserController extends Controller{
      //获取用户信息
      async getUserInfo() {
        const { ctx } = this;
        ctx.helper.success({ ctx });
    }
}

module.exports = UserController;