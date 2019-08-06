/*
 * @Author: xzl 
 * @Date: 2019-07-18 15:12:48 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-08-06 11:20:12
 */
const Service = require('egg').Service;

class countService extends Service {
    async create(payload) {
     await this.app.mysql.insert('ip_count', { 
         ip: payload.cip,
         cid:payload.cid,
         city:payload.cname
    });  
      };
   async getCountIp(payload){
      let  sql =`
       select  * from ip_count  LIMIT ${payload.start}, ${payload.limit}   
      `  
      let row = await this.app.mysql.query(sql);
      
      return { row };
      
   }
    }


module.exports = countService;