var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("<h1>Dados da query string</h1>");
    var result = url.parse(request.url, true);
    console.log(result);
    for(var key in result.query){
        response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
    }
    response.end();
}).listen(3000, ()=>{
    console.log("Rodando na 3000");
})