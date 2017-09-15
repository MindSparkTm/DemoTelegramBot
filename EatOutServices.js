var bodyParser = require('body-parser');
var request = require('request');
var http = require('http');


module.exports = {
    itemcategory: function(callback) {
        var categories=[];
        return new Promise(function(resolve, reject){
            request('https://588c7dc0.ngrok.io/', { json: true },  function(err,res,body) {

                for(i=0;i<body.categories.length;i++){
                    categories.push(body.categories[i].categories.name);
                }
                resolve(categories);


            });



        });


    },


    categorydata: function(name,callback) {

        var requestdata = {
            "name":name
        };

        return new Promise(function(resolve, reject) {
            request({
                url: 'https://7e7fe1ac.ngrok.io/categorydata',
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(requestdata)
            }, function (error, resp, body) {

                console.log(body);

                resolve(body);


            });
        });







    },

    cardbal:function(cardno,cvv,expiryyear,expirymonth,pin,trxreference){
        var requestdata = {

            "cardno": cardno,
            "cvv":cvv,
            "expiryyear": expiryyear,
            "expirymonth": expirymonth,
            "pin": pin,
            "trxreference": trxreference
        };

            return new Promise(function(resolve, reject) {
                request({
                    url: 'https://7e7fe1ac.ngrok.io/cardenquiry',
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(requestdata)
                }, function (error, resp, body) {

                    console.log(body);

                    resolve(body);


                });
            });


    },

    otpvalidate:function(otp,otptransactionidentifier,trxreference){
        var requestdata = {

            "otp": otp,
            "otptransactionidentifer":otptransactionidentifier,
            "trxreference": trxreference
        };

        return new Promise(function(resolve, reject) {
            request({
                url: 'https://7e7fe1ac.ngrok.io/validateotp',
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(requestdata)
            }, function (error, resp, body) {

                console.log(body);

                resolve(body);


            });
        });


    }

}


