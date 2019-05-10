/*
 * @Author: xzl 
 * @Date: 2019-04-30 10:05:18 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-05-10 14:22:55
 */

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginIndex() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = LoginController;
