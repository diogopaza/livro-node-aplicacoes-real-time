var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("<h1>Hello World Senior</h1>");
    response.end;
}).listen("3000",function(){
    console.log("Servidor HTTP NODE rodando");
});
