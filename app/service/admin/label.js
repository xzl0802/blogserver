/*
 * @Author: xzl 
 * @Date: 2020-01-03 15:36:22 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-03 16:06:49
 */


const Service = require('egg').Service;


class labelService extends Service {

    async getAllLabelByPage(params){  //根据参数获取标签
        let  sql =`
        select  COUNT(*) AS total from label ;
       `  
       let all = await this.app.mysql.query(sql);
     
       let results = await this.app.mysql.select('label', { // 搜索 post 表
         orders: [['id','desc']], // 排序方式
         limit: params.limit, // 返回数据量
         offset: params.start, // 数据偏移量
       });
       return {'total':all[0].total,'data':results}
    }
}

 
module.exports =labelService;