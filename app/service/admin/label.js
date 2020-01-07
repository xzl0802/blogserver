/*
 * @Author: xzl 
 * @Date: 2020-01-03 15:36:22 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-07 14:49:30
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

    async  addLabel (params){  //新增标签sql
      await this.app.mysql.insert('label',{"name":params.name,"description":params.description,"createdUser":params.createdUser})      

    }

    async  selectSingleLabel (params){  //判断当前标签是否重复
      let  data  = await this.app.mysql.get('label',{'name':params.name         
      })
  
      return JSON.stringify(data);

    }
}

 
module.exports =labelService;