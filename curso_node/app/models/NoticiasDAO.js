class NoticiasDAO {
    constructor(connection) {
        this._connection = connection;
    }
    
    getNoticias(callback) {
        this._connection.query("select * from noticias", callback);
    }
    
    getNoticia(callback) {
        this._connection.query("select * from noticias where id_noticia = 4", callback);
    }
    
    salvarNoticia(noticia, callback){
        console.log(noticia);
        this._connection.query("insert into noticias set ? ", noticia, callback);
    }
}

module.exports = function(){
    return NoticiasDAO;
}
