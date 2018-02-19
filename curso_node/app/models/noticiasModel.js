module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('SELECT * from noticias', callback );
    }

    this.getNoticia = function(connection, callback){
        connection.query('SELECT * from noticias where id_noticia = 4', callback); 
    }
    
    return this;
}