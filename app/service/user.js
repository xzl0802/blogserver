/*
 * @Author: xzl 
 * @Date: 2019-07-19 14:18:14 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-07-22 16:30:39
 */
const Service = require('egg').Service;
class UserService  extends Service{
    async findbyUserName(username,role){   //根据用户名 和 角色查询信息
        const user  = await this.app.mysql.get('user',{name:username,role:role});
        return  user ;
    }
}

module.exports = UserService;