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
  config.middleware = ['notfoundHandler'];
  //mysql 配置
  config.mysql={
   // 单数据库信息配置
   client: {
    // host
    host: '106.13.177.99',
    // 端口号
    port: '3306',
    // 用户名
    user: 'blog',
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
  domainWhiteList: ['http://localhost:8080','https://xzl0802.top','https://www.xzl0802.top'] //跨域白名单
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
config.onerror= {
  all(err, ctx) {
    // 在此处定义针对所有响应类型的错误处理方法
    // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
    ctx.body = 'error';
    ctx.status = 500;
  },
  html(err, ctx) {
    // html hander
    ctx.body = '<h3>error</h3>';
    ctx.status = 500;
  },
  json(err, ctx) {
    // json hander
    ctx.body = { message: 'error' };
    ctx.status = 500;
  },
  jsonp(err, ctx) {
    // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
  },
}
  return config;
};
