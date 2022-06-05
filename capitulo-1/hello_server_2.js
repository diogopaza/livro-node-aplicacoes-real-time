var http = require('http');

var server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type":"text/html"});
    if(request.url == '/'){
        response.write("<h1>estou em /</h1>");
    }else if(request.url == "/bemvindo"){
        response.write("<h1>Bem Vindo </h1>");
    }else{
        response.write("<h1>Página não encontrada </h1>");
    }    
}).listen(3000, ()=>{
    console.log("Rodando na 3000");
})