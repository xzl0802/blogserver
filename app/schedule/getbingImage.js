/*
 * @Author: xzl 
 * @Date: 2019-04-28 15:59:30 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-04-29 13:55:51
 */
 //获取bing 每日图片

 module.exports = {
    schedule: {
      interval: '1h', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
    console.log(ctx,'12')
    },
  };