/*
 * @Author: xzl 
 * @Date: 2019-05-08 10:16:30 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-05-08 14:37:33
 */
 const puppeteer  = require("puppeteer");
 const cheerio  = require("cheerio");
 const fs =require('fs'); 
 const moment = require('moment');
 module.exports = {
    schedule: {
     interval: '30d',
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
    await page.goto('http://www.wjlibw.space/gxew_6.html');  //371
    let content = await page.content();
     let dTitleHandle = await page.$('.mainArea');  // 使用css selector格式查找商品名称，返回
     let dTitle = await page.evaluate(dTitle => dTitle.innerHTML, dTitleHandle); // 获取dom innerHTML
 
    let $ =cheerio.load(dTitle);
//    $("li a ").each(function(i, e) {
//        let url = $(e).attr("href");
//     console.log($(e).text());
// });
    // await page.waitFor(2500); //爬取等待
    }
  };
  