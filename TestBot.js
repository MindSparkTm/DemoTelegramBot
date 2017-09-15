var TelegramBot = require('node-telegram-bot-api');
var request = require('request');
var http = require('http');
var express = require("express");
var app = express();

var fd = require("./EatoutServices.js");
var md = require("./dbwork.js");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const TOKEN = process.env.TELEGRAM_TOKEN || '330503809:AAFCnzrWmB3OaRDLTyPf7DCW3eV7J8aim9I';
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello, world! [helloworld sample;');
}).listen(3009);


telegram = new TelegramBot(TOKEN, { polling: true });
telegram.on("text",function (message,req,res) {

    var messagetext = message.text;
    var receiver = message.chat.id; //the user receiving the response from the bot
    var timestamp = message.date; //timestamp
    var msgid = message.message_id;//message id
    var sender = message.from.id; //id of the telegram bot
    console.log("message",messagetext);
    messagetext = messagetext.toLowerCase();


    if(messagetext.includes("tk-")) {
        telegram.sendMessage(sender, "Wow finally worked");
        var token = messagetext.substr(3,messagetext.length);
        console.log("token",token);

        md.getreview(token).then(function(v){
            console.log("v",v);
            telegram.sendMessage(sender, "Here are your review"+"||"+v);
        })


    }
    if(messagetext.includes("ac-") ){
        var accntnum = messagetext.substr(3,messagetext.length);
        console.log("accnt",accntnum);

        md.getstatementsummary(accntnum).then(function(v){
            console.log("v",v);
            if(v.length>0) {

                telegram.sendMessage(sender, "Here are your account balance");
                for(var i=0;i<v.length;i++){
                    telegram.sendMessage(sender,"Account Balance for account number :"+accntnum+"  "+ "is"+v[i]);
                }
            }
            else
            {
                telegram.sendMessage(sender, "This Account Number is not Valid");

            }
        })


    }


    if(messagetext==='menu'){
        var menu =["Nightclub","Parks","Restaurants","Telecom","Internet","Feedback","Payment","AccountSummary"];



        var options = {
            reply_markup: JSON.stringify({
                inline_keyboard: menu.map((x, xi) => ([{
                    text: x,
                    callback_data: String(x),
                }])),
            }),
        };


        telegram.sendMessage(sender, "Here are some of the menus", options);

    }

   if(messagetext==='feedback'){
        telegram.sendMessage(sender,"Sorry Incorrect Query, Please provide me feedback");




    }





});

telegram.on('callback_query', function (msg) {
    console.log(msg); // msg.data refers to the callback_data
    switch(msg.data){
        case 'Nightclub':
            fd.categorydata("Nightclub").then(function(v) {
                var obj = JSON.parse(v);

                var s = obj.info.nightclub;

                var options = {
                    reply_markup: JSON.stringify({
                        inline_keyboard: s.map((x, xi) => ([{
                            text: x,
                            callback_data: String(x),
                        }])),
                    }),
                };
                telegram.sendMessage(msg.from.id, "Here are some of the best night clubs in Nairobi", options);

                telegram.answerCallbackQuery(msg.id);


            });

            break;

        case 'Parks':

            fd.categorydata("Parks").then(function(v){
                var obj = JSON.parse(v);

                var s = obj.info.parks;


                var options = {
                    reply_markup: JSON.stringify({
                        inline_keyboard: s.map((x, xi) => ([{
                            text: x,
                            callback_data: String(x),
                        }])),
                    }),
                };
                telegram.sendMessage(msg.from.id, "Here are some of the best Parks in Nairobi", options);

                telegram.answerCallbackQuery(msg.id);





            });

            break;

        case 'Restaurants':
            fd.categorydata("restaurants").then(function(v){
                var  obj = JSON.parse(v)

                var s = obj.info.restaurants;
                var options = {
                    reply_markup: JSON.stringify({
                        inline_keyboard: s.map((x, xi) => ([{
                            text: x,
                            callback_data: String(x),
                        }])),
                    }),
                };
                telegram.sendMessage(msg.from.id, "Here are some of the best Restaurants in Nairobi", options);
                telegram.answerCallbackQuery(msg.id);




            });
            break;

        case 'Telecom':
            fd.categorydata("telecomprovider").then(function(v){
                var  obj = JSON.parse(v);

                var s = obj.info.telecom;
                var options = {
                    reply_markup: JSON.stringify({
                        inline_keyboard: s.map((x, xi) => ([{
                            text: x,
                            callback_data: String(x),
                        }])),
                    }),
                };
                telegram.sendMessage(msg.from.id, "Here are some of the best Telecom providers in Nairobi", options);
                telegram.answerCallbackQuery(msg.id);





            });
            break;

        case 'Internet':
            fd.categorydata("internet").then(function(v){
                var  obj = JSON.parse(v)

                var s = obj.info.internet;
                var options = {
                    reply_markup: JSON.stringify({
                        inline_keyboard: s.map((x, xi) => ([{
                            text: x,
                            callback_data: String(x),
                        }])),
                    }),
                };
                telegram.sendMessage(msg.from.id, "Here are some of the best Internet Providers in Nairobi", options);
                telegram.answerCallbackQuery(msg.id);





            });
            break;

        case 'Feedback':

            var options = {
                reply_markup: JSON.stringify({
                    inline_keyboard: [[{
                        text: 'Feedback',
                        url: 'https://26d2e168.ngrok.io/home?sender='+msg.from.id,
                        callback_data: 'feedbackbtn',

                    }]],
                }),
            };




            telegram.sendMessage(msg.from.id, "Feedback", options);
            telegram.answerCallbackQuery(msg.id);

            break;

        case 'Payment':

            var options = {
                reply_markup: JSON.stringify({
                    inline_keyboard: [[{
                        text: 'Payment',
                        url: 'https://26d2e168.ngrok.io/cardbalance?sender='+msg.from.id,
                        callback_data: 'paymentbtn',

                    }]],
                }),
            };




            telegram.sendMessage(msg.from.id, "Payment", options);
            telegram.answerCallbackQuery(msg.id);

            break;

        case 'AccountSummary':
            telegram.sendMessage(msg.from.id,"Please enter your account number below with keyword AC-");
            telegram.answerCallbackQuery(msg.id);



            break;
        default:

            telegram.sendMessage(msg.from.id,"I am not yet Activated. Please Wait for more development. Check Menu above to see more information");
            var menu =["Nightclub","Parks","Restaurants","Telecom","Internet","Feedback","Payment","AccountSummary"];



            var options = {
                reply_markup: JSON.stringify({
                    inline_keyboard: menu.map((x, xi) => ([{
                        text: x,
                        callback_data: String(x),
                    }])),
                }),
            };






            telegram.sendMessage(msg.from.id, "Here are some of the menus", options);

            telegram.answerCallbackQuery(msg.id);


            break;

    }
    if(msg.data==='first'){
        console.log("Yayyyyy");
        telegram.sendMessage(msg.from.id,"Yayy");
    }
});






