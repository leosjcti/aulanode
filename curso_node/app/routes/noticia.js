module.exports = function(application){
       
    application.get('/noticia', function(req, res){
                
        //Executa a função retornada no arquivo db.js.
        var connection = application.config.db();
        var noticiasDAO = new application.app.models.NoticiasDAO(connection);
        
        noticiasDAO.getNoticia(function(error, result){
            res.render('noticias/noticia', {noticia: result});
        });
    });
};

