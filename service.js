var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var ejs = require('ejs');
var app = express();
var fd = require("./dbwork.js");
var md = require("./Helperservices");
var ss = require("./EatOutServices");

var dateTime = require('node-datetime');

app.listen((process.env.PORT || 8000));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.get("/home", function (req, res) {
    res.render('trial');

});

app.get("/test", function (req, res) {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
  var s = md.getRand();
  console.log(formatted);

});

app.post("/home", function (req, res) {

    var s = -1;
    var t = -1;
    var m = -1;

    var phonenumber = req.body.phonenumber;
    var review =  req.body.review;
    console.log(phonenumber);
    fd.insertreview(phonenumber,review).then(function(v) {

        if(v=="1") {
            console.log("Your review has been inserted successfully");


            s = md.getRand();
            console.log("Unique number is",s);

            fd.checkifuniquenumberexists(s).then(function(u){
               if(u!="1"){
                   console.log("Unique number doesnt exist");
                   fd.inserttoken(s,phonenumber).then(function (p) {
                       if(p=="1") {

                           console.log("Token has been inserted successfully");
                           res.status(200).json({token: s});
                       }
                   })
               }
            });


        }
    });


    });
app.get("/cardbalance",function(req,res){
   res.render('payments');
});


app.post("/cardbalance", function (req, res) {
console.log("entered");
console.log(req.body);
    var cardno = req.body.cardno;
    var cvv =  req.body.cvv;
    var expiryyear =  req.body.expiryyear;
    var expirymonth =  req.body.expirymonth;
    var pin =  req.body.pin;
    var trxreference =  req.body.trxreference;
ss.cardbal(cardno,cvv,expiryyear,expirymonth,pin,trxreference).then(function (v) {

    var obj = JSON.parse(v);

res.status(200).json({responsecode: obj.data.responsecode,responsemessage:obj.data.responsemessage,
chargetoken:obj.data.chargetoken,transactionref:obj.data.transactionref,otpref:obj.data.otpref});

})






});

app.post("/validateotp", function (req, res) {
    console.log("entered");
    console.log(req.body);
     var otp = req.body.otp;
     var otpref = req.body.otptransactionidentifier;
     var trxreference = req.body.trxreference;
     var accountnum = req.body.accountnum;
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');

    ss.otpvalidate(otp,otpref,trxreference).then(function (v) {

        var obj = JSON.parse(v);

        res.status(200).json({responsecode: obj.data.responsecode,responsemessage:obj.data.responsemessage,
            chargetoken:obj.data.chargetoken,transactionref:obj.data.transactionref,otpref:obj.data.otpref,balance:obj.data.balance});
        if(data.otptransactionidentifier.length>5 && data.otpreferencenumber.length>5){
              fd.insertpaymenttoken(otpref,trxreference,formatted,obj.data.balance,accountnum).then(function (u) {
                console.log(u);

              })

        }
    })






});