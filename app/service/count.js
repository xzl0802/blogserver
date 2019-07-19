/*
 * @Author: xzl 
 * @Date: 2019-07-18 15:12:48 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-07-19 14:18:05
 */
const Service = require('egg').Service;

class countService extends Service {
    async create(payload) {
     await this.app.mysql.insert('ip_count', { 
         ip: payload.cip,
         cid:payload.cid,
         city:payload.cname
    });  
      }
}

module.exports = countService;