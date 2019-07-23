/*
 * @Author: xzl 
 * @Date: 2019-07-22 14:05:18 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-07-23 15:39:13
 */
  // 管理端登录验证
  const jwt = require('jsonwebtoken');
  module.exports =options=>{
   return async function(ctx,next){
  if(ctx.request.header['authorization']){  //当处于·登录状态时
    let userToken = ctx.request.header['authorization'];
    let decoded;

    next();
 }
 else{
    //401 代表当前用户为登录
    ctx.helper.failure({ctx, code :500010 , message:'当前用户未登录'})
 } 
 
   }
  }
   