module.exports = function(application){
       
    application.get('/noticia', function(req, res){
                
        //Executa a função retornada no arquivo db.js.
        var connection = application.config.db();
        var noticiasModel =application.app.models.noticiasModel;
        
        noticiasModel.getNoticia(connection, function(error, result){
            res.render('noticias/noticia', {noticia: result});
        });
    });
};

