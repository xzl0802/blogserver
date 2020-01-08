/*
 * @Author: xzl 
 * @Date: 2020-01-03 15:36:22 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-08 14:13:49
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
      await this.app.mysql.insert('label',{"name":params.name,"description":params.description,"createdUser":params.loginUser})      

    }

    async  selectSingleLabel (params){  //判断当前标签是否重复

      let  data  = await this.app.mysql.query('select * from  label  where name = ? AND id != ?', [params.name,(params.id)])
  
      return JSON.stringify(data);

    }

    async  updateLabel(params){
      const row = {
        id: params.id,
        name:  params.name,
        description: params.description,
        updatedUser:params.loginUser
      };
      await this.app.mysql.update('label', row); // 更新 label 表中的记录
    }

    async deleteLabel(params){ //根据ID 删除label
      const result = await this.app.mysql.delete('label', {
        id: params.id,
      }); 
    }
}

 
module.exports =labelService;