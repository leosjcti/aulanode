module.exports = function(app){
    
    app.get('/noticias', function(req, res){
        var mysql = require('mysql');
        var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db_node'
        });


        conn.query('select * from noticias', function(error, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });
};

