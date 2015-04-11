/*
 * Hooky
 *
 * Copyright 2015, Baptiste Jamin
 * Author: Baptiste Jamin <baptiste@jamin.me>
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyparser = bodyParser.urlencoded();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var redis = require("redis");
var sub = redis.createClient();
var db;
var url = 'mongodb://localhost:27017/media';
MongoClient.connect(url, function (err, _db) {
    db = _db;
});

sub.subscribe("article:inserted");

sub.on("message", function (channel, json) {
    console.log(json);
    io.sockets.emit('article:inserted', json);
});

app.get('/articles/', bodyparser, function (req, res) {

    var collection = db.collection('articles');


    collection.find({}).limit(100).sort({time: -1}).toArray(function (err, articles) {
        res.send(200, articles);
    });

    return;
});

app.get('/article/:id', bodyparser, function (req, res) {

    console.log(req.params.id);

    var collection = db.collection('articles');

    new ObjectId(req.params.id)

    collection.findOne({_id: new ObjectId(req.params.id)}, function (err, article) {
        console.log(err);
        console.log(article);
        res.send(200, article);
    });

    return;
});

server.listen(8080, function () {
    console.log('Server ready.');
});
