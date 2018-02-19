
var mysql = require('mysql');

var connMySql = function(){
    console.log("Conexão estabelecida");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_node'
    });
}

module.exports = function(){
    console.log("O autoload carregou o modulo de conexao com o banco");
    return connMySql;
}
