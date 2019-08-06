/*
 * @Author: xzl 
 * @Date: 2019-07-18 15:13:43 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-08-06 10:32:21
 */
const moment = require('moment')
const jwt  =   require('jsonwebtoken');
// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

// 处理成功响应
exports.success = ({ ctx, res = null, message = '请求成功' })=> {
  ctx.body = {
    code: 200,
    data: res,
    message
  }
  ctx.status = 200
}

//封装操作失败返回
exports.failure =({ctx, code = 1, message = '操作失败'})=>{
ctx.body = {
  code:code,
  message
}
ctx.status =200
}

//封装生成前端token
exports.createToken  = (data,secrets)=>{
   return jwt.sign({
    user_id:data.id,
    user_name: data.name
  }, secrets, {
    expiresIn: '3h' //时间根据自己定，具体可参考jsonwebtoken插件官方说明

})
}