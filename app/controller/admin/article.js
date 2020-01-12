/*
 * @Author: xzl 
 * @Date: 2020-01-09 11:05:56 
 * @Last Modified by: xzl
 * @Last Modified time: 2020-01-09 15:34:50
 */
const Cotroller = require('egg').Controller;

class articleController extends Cotroller {

    async getAllArticle() { //获取所有的文章列表
        let { ctx } = this;
        let payload = ctx.request.body || {};
        let page = payload.page - 1;
        let start = payload.limit * page;
        let limit = payload.limit;
        let data = await ctx.service.admin.article.getAllArticleList(start, limit);
        ctx.helper.success({ ctx, data });
    }

    async  getAllLabelList(){
     let {ctx} = this;
     let  data  =  await  ctx.service.admin.article.getAllLabels();
     ctx.helper.success({ctx,data});

    }

}


module.exports = articleController;