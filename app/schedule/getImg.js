/*
 * @Author: xzl 
 * @Date: 2019-05-08 10:16:30 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-05-31 10:46:59
 */
 const puppeteer  = require("puppeteer");
 const cheerio  = require("cheerio");
 const fs =require('fs'); 
 const moment = require('moment');
 module.exports = {
    schedule: {
<<<<<<< HEAD
     interval: '30d',
=======
     interval: '30s',
>>>>>>> 75473574eda27547eca51b348e0fd9b2722a5533
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
<<<<<<< HEAD
    
     await page.goto('http://www.baidu.com');  //371
     let content = await page.content();
     let dTitleHandle = await page.$('.mainArea'); 
     let dTitle = await page.evaluate(dTitle => dTitle.innerHTML, dTitleHandle); 
     let $ =cheerio.load(dTitle);
=======
     var  url;
      for (let index =536384; index < 759650; index++) {
        url = 'http://www.wjlibw.space/mvtke_'+index+'.html'
        await page.goto(url);  //371
        let content = await page.content();
        console.log(content);
      }
   

>>>>>>> 75473574eda27547eca51b348e0fd9b2722a5533
//    $("li a ").each(function(i, e) {
//        let url = $(e).attr("href");
//     console.log($(e).text());
// });
    // await page.waitFor(2500); //爬取等待
    }
  };
  