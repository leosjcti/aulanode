var app = require('./config/server');
//var rotaHome = require('./app/routes/home'); rotaHome(app);
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaFormAddNoticias = require('./app/routes/formulario_inclusao_noticia')(app);


app.listen(3000, function(){
	console.log('Servidor On');
});