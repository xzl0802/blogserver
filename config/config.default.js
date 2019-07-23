/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555057030501_9726';
  config.secrets = '092ac376c3207e0cb083e6f4d4c8ab6c'; //自定义签名盐值 
  // add your middleware config here
  config.middleware = [];
  //mysql 配置
  config.mysql={
   // 单数据库信息配置
   client: {
    // host
    host: 'rm-bp12c1m40v95055tkyo.mysql.rds.aliyuncs.com',
    // 端口号
    port: '3306',
    // 用户名
    user: 'xzl',
    // 密码
    password: 'xzl18896988127XZL',
    // 数据库名
    database: 'blog',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
config.logger = {
  dir: './../log',
};
config.security = {
  csrf: {
    enable: false,
  },
  domainWhiteList: ['http://localhost:8080','https://xzl0802.top','https://www.xzl0802.top']
};
config.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTION'
};
config.session = {
  key: 'EGG_SESS',
  maxAge: 24 * 3600 * 1000, // 1 天
  httpOnly: true,
  encrypt: true,
};
  return config;
};
