/*
 * @Author: xzl 
 * @Date: 2019-07-19 14:18:14 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-10-15 15:32:20
 */
const Service = require('egg').Service;
class UserService  extends Service{
    async findbyUserName(username,role){   //根据用户名 和 角色查询信息
        const user  = await this.app.mysql.get('user',{user_id:username,role_code:role});
        return  user ;
    }
    //登录验证
    async  findbyUserByIdAndName(username,id){
        const verificationUser   =  await this.app.mysql.get('user',{user_id:username,id:id});
        return verificationUser;
    }
}

module.exports = UserService;