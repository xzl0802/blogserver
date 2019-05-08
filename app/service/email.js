/*
 * @Author: xzl 
 * @Date: 2019-05-08 14:47:18 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-05-08 15:05:03
 */
  //邮件发送设置
const Service = require('egg').Service;
const nodemailer = require('nodemailer');
const user_email = 'example@qq.com';
const auth_code = 'xxxxxx';

const transporter = nodemailer.createTransport({
  service: 'qq',
  secureConnection: true,
  port: 465,
  auth: {
    user: user_email, // 账号
    pass: auth_code, // 授权码

  },
});

class ToolService extends Service {
  async sendMail(email, subject, text, html,filename,path) {
    const mailOptions = {
      from: user_email, // 发送者,与上面的user一致
      to: email,   // 接收者,可以同时发送多个,以逗号隔开
      subject,   // 标题
      text,   // 文本
      html,
      attachments:[
        {
          filename : filename,  //要发送附件的名称
          path: path            //要发送附件的地址
        },
      
      ]
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      return false;
    }
  }

}

module.exports = ToolService;

