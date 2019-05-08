'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};

//登录接口
module.exports =app =>{
  const {router, controller} =app;
  router.get('/login',controller.login.index);
}