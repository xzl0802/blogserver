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

  // add your middleware config here
  config.middleware = [];
  //mysql 配置
  config.mysql={
   // 单数据库信息配置
   client: {
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    user: 'blog',
    // 密码
    password: 'LPkFKRxPF4fXRbeE',
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
  return config;
};
