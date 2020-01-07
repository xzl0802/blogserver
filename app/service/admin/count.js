/*
 * @Author: xzl 
 * @Date: 2019-07-18 15:12:48 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-07 16:19:28
 */
const Service = require('egg').Service;

class countService extends Service {
    async create(payload) {
     await this.app.mysql.insert('ip_count', { 
         cip: payload.cip,
         cid:payload.cid,
         cname:payload.cname
    });  
      };
      
   async getCountIp(payload){
      let  sql =`
       select  COUNT(*) AS total from ip_count ;
      `  
      let all = await this.app.mysql.query(sql);
    
      let results = await this.app.mysql.select('ip_count', { // 搜索 post 表
        orders: [['createdTime','desc']], // 排序方式
        limit: payload.limit, // 返回数据量
        offset: payload.start, // 数据偏移量
      });
      return {'total':all[0].total,'data':results}
   }
    }


module.exports = countService;