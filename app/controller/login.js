/*
 * @Author: xzl 
 * @Date: 2019-04-30 10:05:18 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-07-19 14:29:17
 */

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginIndex() {
    const { ctx } = this;
    let payload = ctx.request.body || {};
    
    ctx.body = 'hi, egg';
  }
}

module.exports = LoginController;
