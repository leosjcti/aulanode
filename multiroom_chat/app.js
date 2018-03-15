//Importar as configurações do servidor
var app = require('./config/server.js');

//Parametrizar a porta de escuta
app.listen(80, function(){
    console.log("servidor online");
});

