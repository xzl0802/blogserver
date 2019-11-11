/*
 * @Author: xzl 
 * @Date: 2019-11-11 14:07:36 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-11-11 14:07:59
 */
//自定义404 界面处理
module.exports = () => {
    return async function notFoundHandler(ctx, next) {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        if (ctx.acceptJSON) {
          ctx.body = { error: 'Not Found' };
        } else {
          ctx.body = '<h1>Page Not Found</h1>';
        }
      }
    };
  };
  