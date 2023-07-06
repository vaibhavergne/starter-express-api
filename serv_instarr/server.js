'use strict';
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 8081 });
const getUniqueID = () => {const s4=()=>Math.floor((1+Math.random())*0x10000).toString(16).substring(1);return s4()+s4()+'-'+s4(); };
wss.on('connection', ((ws) => {
ws.on('message', (message) => {console.log(`received: ${message}`); } );
ws.on('end', () => {console.log('Connection ended...'); } );
ws.send('Hello Client'); } ) );

wss.on('upgrade', (request)=>{
  var userID = getUniqueID();
  console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
  // You can rewrite this part of the code to accept only the requests from allowed origin
  const connection = request.accept(null, request.origin);
  clients[userID] = connection;
  console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))
});