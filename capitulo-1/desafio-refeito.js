var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer((request,response)=>{  
    var q = url.parse(request.url, true);
    var caminhoFinal = q.pathname + ".html";    
    if(fs.existsSync(__dirname + caminhoFinal)){
        fs.readFile(__dirname + caminhoFinal, (erro, html)=>{
            response.writeHead(200, {"Content-Type":"text/html"});
            response.end(html);
        })   
    }else{
        response.end("<h1>Arquivo invalido</h1>")
    }
}).listen(3000, ()=>{
    console.log("Rodando desafio refeito");
})

