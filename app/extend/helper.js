/*
 * @Author: xzl 
 * @Date: 2019-07-18 15:13:43 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-07-18 16:05:02
 */
const moment = require('moment')

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' })=> {
  ctx.body = {
    code: 200,
    data: res,
    msg
  }
  ctx.status = 200
}
