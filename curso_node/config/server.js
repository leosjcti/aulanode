var express = require('express');
var app = express();
//Define o gerador de view
app.set('view engine', 'ejs')

//Seta o diretorio das viewa
app.set('views', './app/views')

module.exports = app;