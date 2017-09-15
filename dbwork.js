var mysql = require('mysql');
var ts = require("./Helperservices");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "review"
});

module.exports = {
    insertreview: function (phonenumber, review, callback) {
        var datares;
        return new Promise(function (resolve, reject) {

                console.log("Connected!");
                var post = {"phonenumber": phonenumber, "review": review};
                var query = con.query('INSERT INTO botdata SET ?', post, function (err, result) {
                    // Neat!
                    datares = result;
                    console.log("error", err);
                    console.log("result", result.affectedRows);
                    resolve(result.affectedRows);
                });

            });

    },


    checkifuniquenumberexists: function(num) {
        return new Promise(function (resolve, reject) {

            var query = con.query('select id from uniquereviewtoken where token in (?)', num, function (err, result, fields) {
                // Neat!
                //console.log(query);
                console.log("error", err);
                console.log("result", result.length);
                console.log("fields", fields);
              resolve(result.length);


            });


        });



    },

    getstatementsummary: function(accountnumber) {
        return new Promise(function (resolve, reject) {
           var s=[];
            var query = con.query('select Balance from flutterwavecardenquiry where accountnumber in (?)', accountnumber, function (err, result, fields) {
                // Neat!
                //console.log(query);
                console.log("error", err);
                console.log("result", result.length);
                console.log("fields", fields);
                for (var i in result) {
                    s.push(result[i].Balance);
                    console.log("s", s);
                }
                resolve(s);


            });


        });



    },

    getreview: function(num) {
        return new Promise(function (resolve, reject) {
            var s;
            var d;
            var query = con.query('select phonenumber from uniquereviewtoken where token in (?)', num, function (err, result, fields) {
                // Neat!
                //console.log(query);
                console.log("error", err);
                console.log("result", result);
                console.log("fields", fields);
                for (var i in result) {
                    s = result[i].phonenumber;
                    console.log("s", s);
                }
                var db_query = con.query('select review from botdata where phonenumber in (?)',s, function (err, result, fields) {
                    // Neat!
                    //console.log(query);
                    console.log("error", err);
                    console.log("result", result);
                    console.log("fields", fields);
                    for (var i in result) {
                        d = result[i].review;
                        console.log("d",d);

                    }
                    resolve(d);


                });

            });

        });



    },




    inserttoken:function(num,phonenumber){
        var datares;
        return new Promise(function (resolve, reject) {
                console.log("Connected!");
                var post = {"token": num,"phonenumber": phonenumber};
                var query = con.query('INSERT INTO uniquereviewtoken SET ?', post, function (err, result) {
                    // Neat!
                    datares = result;
                    console.log("error", err);
                    console.log("result", result.affectedRows);
                    resolve(result.affectedRows);
                });

        });

    },

    insertpaymenttoken:function(otpreferencenumber,transactionreferencenumber,date,balance,accountnumber){

        var datares;
        return new Promise(function (resolve, reject) {
            console.log("Connected!");
            var post = {"otpreferencenumber": otpreferencenumber,"transactionreferencenumber": transactionreferencenumber,
            "date":date,"balance":balance,"accountnumber":accountnumber};
            var query = con.query('INSERT INTO flutterwavecardenquiry SET ?', post, function (err, result) {
                // Neat!
                datares = result;
                console.log("error", err);
                console.log("result", result.affectedRows);
                resolve(result.affectedRows);
            });

        });

    }


};



