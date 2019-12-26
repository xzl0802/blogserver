/*
 * @Author: xzl 
 * @Date: 2019-12-26 13:13:13 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-26 16:28:33
 */
const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class UserController extends Controller{
      //获取用户信息
      async getUserInfo() {
        const { ctx } = this;
        let userToken = ctx.request.header['authorization'];
        let decoded;
        decoded = jwt.verify(userToken, ctx.app.config.secrets) ;
        let  userInfo = await ctx.service.admin.user.getUserInfo(decoded.user_name,decoded.user_id);
        let  data =JSON.parse(userInfo)[0];
        ctx.helper.success({ctx, data});
    }
}

module.exports = UserController;