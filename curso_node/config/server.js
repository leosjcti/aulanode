var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
//Define o gerador de view
app.set('view engine', 'ejs');
//Seta o diretorio das views
app.set('views', './app/views');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));

//Configura as rotas automaticamente e inclui na aplicação. 
consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(app);

module.exports = app;