//var db = require('../../config/db');

module.exports = function(application){
       
    application.get('/noticias', function(req, res){
        
        //Executa a função retornada no arquivo db.js.
        var conn = application.config.db();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(conn, function(error, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });
  
};

