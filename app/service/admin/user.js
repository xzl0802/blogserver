/*
 * @Author: xzl 
 * @Date: 2019-07-19 14:18:14 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-26 16:23:37
 */
const Service = require('egg').Service;
class UserService extends Service {
    async getUserInfo(username, id) {
        const userInfo = await this.app.mysql.select('user', 
        {where:{code: username, id: id},
         columns: ['name', 'role_code'],
         limit: 1, // 返回数据量
         offset: 0,})
        return JSON.stringify(userInfo);
    }
}

module.exports = UserService;