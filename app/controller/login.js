/*
 * @Author: xzl 
 * @Date: 2019-04-30 10:05:18 
 * @Last Modified by:   xzl 
 * @Last Modified time: 2019-04-30 10:05:18 
 */

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
