'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  //mysql
  mysql : {
    enable: true,
    package: 'egg-mysql',
  },
cors :{    //跨域
    enable: true,
    package: 'egg-cors',
  },
  validate : {   //验证插件
    enable: true,
    package: 'egg-validate',
  }
};
