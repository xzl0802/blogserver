'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller,middlewares } = app;
  const loginAuth = app.middlewares.loginAuth();  //管理端登录验证中间件
   router.get('/', controller.home.index);
  
   router.get('/image',controller.image.imageIndex);  //处理图片获取接口
   router.post('/count/ip',controller.count.countIP); //统计ip 接口
   
   // #####################管理端接口######################
   router.post('/admin/login',controller.login.loginIndex); //登录处理
   router.get('/admin/info',loginAuth,controller.login.getUserInfo);//获取用户信息
};

