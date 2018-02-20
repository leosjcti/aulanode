module.exports = function(application){
   
    application.get('/formulario_add_noticia', function(req, res){
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        
        //Validações
        req.assert('titulo','Titulo Obrigatório').notEmpty();
        req.assert('resumo','Resumo Obrigatório').notEmpty();
        req.assert('resumo','Minimo 10 máximo 50').len(10,50);
        req.assert('autor','Autor Obrigatório').notEmpty();
        req.assert('data_noticia','Resumo Obrigatório').notEmpty();

        let erros = req.validationErrors();

        if(erros){
            res.render("admin/form_add_noticia", {validacao: erros});
            return;
        }

        //Executa a função retornada no arquivo db.js.
        var connection = application.config.db();
        var noticiasDAO = new application.app.models.NoticiasDAO(connection);
        
        noticiasDAO.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });

    });
}
