/*
 * @Author: xzl 
 * @Date: 2019-04-28 15:59:30 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-06-20 09:58:04
 */
 //获取bing 每日图片
 const WonderfulBingWallpaper = require('wonderful-bing-wallpaper');
 const request  = require("superagent");
 const fs =require('fs'); 
 const moment = require('moment');
 module.exports = {
    schedule: {
      cron: '0 * */6 * * *',
      type:'all'
    },
    async task(ctx) {
        let resolutions = WonderfulBingWallpaper.resolutions
        let options ={  size: 8,
            day: 7,
            resolution: resolutions[2],  
            host: 'www.bing.com',
            local: 'en-US',};    
        let wbw = new WonderfulBingWallpaper(options);
        wbw.getWallpapers().then(wallpaperJSON => {
         let imgName = moment().format('YYYYMMDD');
         let imgObj= wbw.humanizeWallpapers(wallpaperJSON[0]);
         let createPath = './app/public/image/bing/' + imgName+'.png';
         request(imgObj.defaultUrl).pipe(fs.createWriteStream()); 
        //  fs.stat(createPath,(err,stats)=>{
        //    if(err){
         
        //    }
      
        //  })
         
     
})
    },
  };