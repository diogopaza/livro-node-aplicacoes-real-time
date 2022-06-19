module.exports = (app)=>{
    var home = app.controllers.home;
    app.get('/', home.index);
    app.get('/sair', home.logout);
    app.post('/entrar',home.login);
}

//meu modulo para retorno
/*
module.exports = (app)=>{
    console.log("indo para controllers");
    var home = app.controllers.home;
    app.get('/', (req,res)=>{
        home.index(app,req,res);
    }); 
};*/