/*
 * @Author: xzl 
 * @Date: 2019-07-18 15:13:43 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-07-22 16:35:49
 */
const moment = require('moment')

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
exports.failure =(ctx, message)=>{
ctx.body={
  code:1,
  message
}
ctx.status =200
}