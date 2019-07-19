'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  
   router.get('/', controller.home.index);
   router.post('/admin/login',controller.login.loginIndex); //登录处理
   router.get('/image',controller.image.imageIndex);  //处理图片获取接口
   router.post('/count/ip',controller.count.countIP); //统计ip 接口
};

