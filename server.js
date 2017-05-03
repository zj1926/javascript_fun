"use strict";
const path = require('path');
const express = require('express');
const app = express();

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.set('x-powered-by', false);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.sendFile('./public/main/index.html',{
    root: __dirname
  });
});

app.get('/node', (req,res) => {
  res.sendFile('./public/main/node.html',{
    root: __dirname
  });
});

app.get('/library', (req,res) => {
  res.sendFile('./public/main/library.html',{
    root: __dirname
  });
});

app.get('/site', (req,res) => {
  res.sendFile('./public/site/index.html',{
    root: __dirname
  });
});

app.get('/demo', (req,res) => {
  res.sendFile('./public/demo/index.html',{
    root: __dirname
  });
});

app.get('/*', (req,res) => {
  res.redirect('/');
});


app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ": " + server_port + ' ...' );
});
