/*
 * @Author: xzl 
 * @Date: 2019-07-22 14:05:18 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-03 11:28:48
 */
  // 管理端登录验证
  const jwt = require('jsonwebtoken');
  module.exports = options=>{
   return async function(ctx,next){
  if(ctx.request.header['authorization']){  //当处于·登录状态时
    let userToken = ctx.request.header['authorization'];
    let decoded;
     //验证token 是否为非法token
     try {
      decoded = jwt.verify(userToken, ctx.app.config.secrets) ;
      let  verifyResult = await ctx.service.user.findbyUserByIdAndName(decoded.user_name,decoded.user_id);
      if(!verifyResult){
         ctx.helper.failure({ctx, code :50014 , message:'非法Token'});
         return;
      }
      
     } catch (error) {
     
      if (error.name === 'TokenExpiredError') {  //token 令牌过期
   
      
      ctx.helper.failure({ctx, code :50012 , message:'登录过期'})
      return;
      }

      if (error.name === 'JsonWebTokenError') {  //token 解析错误  为非法token
      ctx.helper.failure({ctx, code :50014 , message:'非法Token'})
      return;
      }
     }
   
     await next();
 }
 else{
    //401 代表当前用户为登录
    ctx.helper.failure({ctx, code :500010 , message:'当前用户未登录'})
    return;
 } 
 

   }
  }
   