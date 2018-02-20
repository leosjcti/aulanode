module.exports = function(){

    this.getNoticias = function(connection, callback) {
        connection.query('SELECT * from noticias', callback );
    }

    this.getNoticia = function(connection, callback) {
        connection.query('SELECT * from noticias where id_noticia = 2', callback); 
    }

    this.salvarNoticia = function(noticia, connection, callback) {
        connection.query('INSERT INTO noticias set ? ', noticia, callback);
    }
    
    return this;
}