const Service = require('egg').Service;

class articleService extends Service {
    async getAllArticleList(params) { //获取所有的文章列表
        let sql = `
        select  COUNT(*) AS total from article ;
       `
        let all = await this.app.mysql.query(sql);

        let results = await this.app.mysql.query(
            'SELECT a.*,(SELECT GROUP_CONCAT(article_label_fun.label_name)  ' +
            'FROM article_label_fun WHERE article_label_fun.article_id  = a.id) As labelName from   article  as  a' , [params.start,(params.limit)]);
           return { 'total': all[0].total, 'data': results }

    }
    async  getAllLabels(){  //获取所用的标签

        let results = await this.app.mysql.select('label');
        return JSON.stringify(results);
    }

}

module.exports = articleService;