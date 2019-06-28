/*
 * @Author: xzl 
 * @Date: 2019-05-08 10:16:30 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-06-28 16:35:56
 */
const puppeteer  = require("puppeteer");
const cheerio  = require("cheerio");
const fs =require('fs'); 
const moment = require('moment');
module.exports = {
   schedule: {
    cron: '0 0 */1 * * *',
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
   await page.goto('https://free-ss.site/');  //371
   let imgName = moment().format('YYYYMMDDHHMMSS')+'vps';
   await page.waitFor(200000);
   let createPath = './app/public/image/vps/' + imgName+'.png';
   await page.screenshot({path: createPath})
//    $("li a ").each(function(i, e) {
//        let url = $(e).attr("href");
//     console.log($(e).text());
// });
   // await page.waitFor(2500); //爬取等待
   }
 };