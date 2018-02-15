const restify = require('restify');
const errs = require('restify-errors');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'db_node'
    }
  });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());



server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});


//Faz uma chamada Get na rota padrão
server.get('/', restify.plugins.serveStatic({
    directory: './dist',
    file: 'index.html'
  }));



//Faz uma chamada Get na rota padrão
server.get('/read', function (req, res, next) {
    
    //Pega os dados da tabela rest e coloca na variavel dados
    knex('rest').then((dados)=>{
        //Retorna os dados do Bd em formato json
        res.send(dados);
    }, next);
    
    return next();
});


//Faz uma chamada Post na rota padrão
server.post('/create', function (req, res, next) {
    
    //Pega os dados da tabela rest e coloca na variavel dados
    knex('rest')
    
    .insert(req.body)

    .then((dados)=>{
        //Retorna os dados do Bd em formato json
        res.send(dados);
    }, next);
    
    return next();
});


//Faz uma chamada Get na rota padrão
server.get('/show/:id', function (req, res, next) {
    
    const{ id } = req.params;
    
    //Pega os dados da tabela rest e coloca na variavel dados
    knex('rest')
    
    .where('id', id)
    .first()
    
    .then((dados)=>{

        if(!dados)
            res.send(new errs.BadRequestError('Nada Foi encontrado'));
        //Retorna os dados do Bd em formato json
        res.send(dados);
    }, next);
});


//Faz uma chamada Get na rota padrão
server.put('/update/:id', function (req, res, next) {
    
    const{ id } = req.params;
    
    //Pega os dados da tabela rest e coloca na variavel dados
    knex('rest')
    
    .where('id', id)

    .update(req.body)
    
    .then((dados)=>{

        if(!dados)
            res.send(new errs.BadRequestError('Nada Foi encontrado'));
        //Retorna os dados do Bd em formato json
        res.send("Registro atualizado");
    }, next);
});


server.del('/delete/:id', function (req, res, next) {
    
    const{ id } = req.params;
    
    //Pega os dados da tabela rest e coloca na variavel dados
    knex('rest')
    
    .where('id', id)

    .delete()
    
    .then((dados)=>{

        if(!dados)
            res.send(new errs.BadRequestError('Nada Foi encontrado'));
        //Retorna os dados do Bd em formato json
        res.send("Registro atualizado");
    }, next);
});

