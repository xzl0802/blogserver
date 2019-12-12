'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller,middlewares } = app;
  const loginAuth = app.middlewares.loginAuth();  //管理端登录验证中间件
   router.get('/', controller.home.index);
  
   router.get('/image',controller.image.imageIndex);  //处理图片获取接口
   router.post('/count/ip',controller.client.count.countIP); //统计ip 接口
   
   // #####################管理端接口######################
   router.post('/admin/login',controller.admin.login.loginIndex); //登录处理
   router.get('/admin/info',loginAuth,controller.admin.login.getUserInfo);//获取用户信息
   router.post('/admin/count/ip',loginAuth,controller.client.count.getCountIpByPagination); //获取所有访问的Ip
   router.get('/admin/log',loginAuth,controller.admin.log.logQuery);//后台日志查询接口
};

