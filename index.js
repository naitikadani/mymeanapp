/**
 * Created with JetBrains WebStorm.
 * User: naitik
 * Date: 20/1/16
 * Time: 11:48 AM
 * To change this template use File | Settings | File Templates.
 */

var express = require("express");
var app = express();
var http = require("http");
var mongodb = require("mongodb");
var mongoClient = require("mongodb").MongoClient

app.use(express.static(__dirname + "/public"));

var url = 'mongodb://localhost:27017/mymeanapp';
var db;
mongoClient.connect(url,function(err,database){
    if(err){
        console.log("Mongo connection failed");
    }
    else{
        console.log("Mongo Connected to server");
        db = database;
        //db.close();
    }
})

app.listen(5050,function(){
    console.log("App running on port 5050");
})

app.get('/test',function(req,res){
    res.send('Server is running');
});

app.get('/submit',function(req,res){
    console.log(req.query);
    var formdata = req.query;
    db.collection('users').insert(formdata,function(err,result){
        if(err){
          res.send(err);
        }
        else{
            res.send(result);
        }
    })

})

app.get('/getdata', function(req,res){
    db.collection('users').find().toArray(function(err,result){
        if(!err){
            res.send({result:result});
        }
        else{
            console.log("error in getting data");
        }
    })
})

app.get('/delete', function(req,res){
    var params = req.query;
    db.collection('users').deleteOne({_id: new mongodb.ObjectID(params._id)},function(err,result){
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
    console.log(req.query);
})



