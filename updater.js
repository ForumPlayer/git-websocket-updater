#!/usr/bin/env node

//var WebSocketServer = require('websocket').server;
//var WebSocketClient = require('websocket').client;
//var http = require('http');

var mode = process.env.UPDATER_MODE;

if (mode=="relay" || mode=="server") {
    require('./'+mode+'.js');
}
