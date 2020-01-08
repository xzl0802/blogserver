/*
 * @Author: xzl 
 * @Date: 2019-07-18 15:13:43 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-07 15:17:48
 */
const moment = require('moment')
const jwt  =   require('jsonwebtoken');
// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

// 处理成功响应
exports.success = ({ ctx, data})=> {
  ctx.body = {
    code: 200,
    data: data,
    message: '请求成功'
  }
  ctx.status = 200
}

//封装操作失败返回
exports.failure =({ctx, code = 201, message = '操作失败'})=>{
ctx.body = {
  code:code,
  message
}
ctx.status =200
}

//封装生成前端token
exports.createToken  = (data,secrets)=>{
   return jwt.sign({
    user_id:data.id, //用户ID
    user_name: data.code //用户code
  }, secrets, {
    expiresIn: '2h' //时间根据自己定，具体可参考jsonwebtoken插件官方说明

})
}
//权限验证通过后解析前端的token  
exports.parsingToken = ({ctx})=>{
  if(ctx.request.header['authorization']){  //当处于·登录状态时
  let userToken = ctx.request.header['authorization'];
  return jwt.verify(userToken, ctx.app.config.secrets) ;
  }
}