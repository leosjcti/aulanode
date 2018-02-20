module.exports = function(application){
   
    application.get('/formulario_add_noticia', function(req, res){
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        
        //Executa a função retornada no arquivo db.js.
        var connection = application.config.db();
        var noticiasModel =application.app.models.noticiasModel;
        
        noticiasModel.salvarNoticia(noticia, connection, function(error, result){
            res.redirect('/noticias');
        });

    });
}
