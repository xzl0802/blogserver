/*
 * @Author: xzl 
 * @Date: 2019-05-08 10:16:30 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-05-08 15:06:37
 */
 const puppeteer  = require("puppeteer");
 const cheerio  = require("cheerio");
 const fs =require('fs'); 
 const moment = require('moment');
 module.exports = {
    schedule: {
     interval: '30s',
      type:'all'
    },
    async task(ctx) {

    const browser = await (puppeteer.launch({
        timeout:150000,
        ignoreHTTPSErrors:false,
        devtools:false,
        headless:true
    }))
     
     let page = await browser.newPage();
     var  url;
      for (let index =536384; index < 759650; index++) {
        url = 'http://www.wjlibw.space/mvtke_'+index+'.html'
        await page.goto(url);  //371
        let content = await page.content();
        console.log(content);
      }
   

//    $("li a ").each(function(i, e) {
//        let url = $(e).attr("href");
//     console.log($(e).text());
// });
    // await page.waitFor(2500); //爬取等待
    }
  };
  