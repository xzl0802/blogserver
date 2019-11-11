/*
 * @Author: xzl 
 * @Date: 2019-04-30 10:05:18 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-10-15 15:34:01
 */

const Controller = require('egg').Controller;
const bcrypt = require('bcryptjs');
class LoginController extends Controller {
    async loginIndex() {
            const { ctx } = this;
            let payload = ctx.request.body || {};
            let salt = bcrypt.genSaltSync(10);
            let username = payload.username;
            let password = payload.password;
            //let hash = bcrypt.hashSync(password, salt); //加密前端传回的密码
            // 调用 Service 进行业务处理
            let user = await this.service.user.findbyUserName(username);
            if (!user) {
                ctx.helper.failure({ ctx, message: '用户登录信息不存在!' })
                return;
            }

            let pwdCompare = bcrypt.compareSync(password, user.password); //对比用户密码

            if (pwdCompare) {

                let token = ctx.helper.createToken(user, this.app.config.secrets);
                let res = {
                    token: token
                }
                ctx.session.token = token;
                ctx.helper.success({ ctx, res });
            } else {
                ctx.helper.failure({ ctx, message: '用户名或密码错误!' })
            }
        }
        //获取用户信息·
    async getUserInfo() {
        const { ctx } = this;
        ctx.helper.success({ ctx });
    }
}

module.exports = LoginController;