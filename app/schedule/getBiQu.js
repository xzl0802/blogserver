/*
 * @Author: xzl 
 * @Date: 2019-05-08 10:16:30 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-05-08 11:08:49
 */
 const puppeteer  = require("puppeteer");
 const request  = require("superagent");
 const fs =require('fs'); 
 const moment = require('moment');
 module.exports = {
    schedule: {
     interval: '30m',
      type:'all'
    },
    async task(ctx) {
    // console.log(request('http://www.xbiquge.la'))   
    const browser = await (puppeteer.launch({
        timeout:150000,
        ignoreHTTPSErrors:false,
        devtools:false,
        headless:true
    }))
    let page = await browser.newPage();
    let dTitleHandle = await page.$('#newscontent');  // 使用css selector格式查找商品名称，返回
    let dTitle = await page.evaluate(dTitle => dTitle.innerHTML, dTitleHandle); // 获取dom innerHTML
    console.log(dTitle);
    // await page.waitFor(2500); //爬取等待
    },
  };