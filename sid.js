const request = require('request');
const TelegramBot = require('node-telegram-bot-api');
const token = '6299922380:AAFSFWYBbHdLfB8ICSsn3T8Cw6amGNA2xhA';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', function(mg){
    bot.sendMessage(mg.chat.id,"Welcome to Phone number validation bot");
    bot.sendMessage(mg.chat.id,"This bot helps you to check whether a mobile num is valid");
    request('https://phonevalidation.abstractapi.com/v1/?api_key=f91385481d054ac388bc98d31598e89b&phone='+mg.text, function (error, response, body) {
      const phone = JSON.parse(body).phone;
      const valid = JSON.parse(body).valid;
      const international = JSON.parse(body).format.international;
      const local = JSON.parse(body).format.local;
      const code = JSON.parse(body).country.code;
      const name = JSON.parse(body).country.name;
      const prefix = JSON.parse(body).country.prefix;
      const location = JSON.parse(body).location;
      const type = JSON.parse(body).type;
      const carrier = JSON.parse(body).carrier;
      const message = "Phone: "+phone+"\nValid: "+valid+"\nFormat: International: "+international+" Local: "+local+"\ncountry: code: "+code+"  Name: "+name+"  Prefix: "+prefix+"\nLocation: "+location+"\nType: "+type+"\nCarrier: "+carrier;
      if(valid==true){
      bot.sendMessage(mg.chat.id,message);
      }
      else{
        bot.sendMessage(mg.chat.id,"Please enter a valid phone number");
      }
})    
});





