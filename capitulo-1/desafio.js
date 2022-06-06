var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer((request,response)=>{   
    if(request.url == '/'){  
        console.log(request.url.pathname);
        if(fs.existsSync(__dirname + '/artigos.html')){
            fs.readFile(__dirname + '/artigos.html', (erro, html)=>{  
                response.writeHead(200, {"Content-Type":"text/html"});         
                response.end(html);            
            })
        }else{
            response.end("<h1>Arquivo artigo indisponivel</h1>")
        }              
    }else if(request.url == '/artigos'){
        if(fs.existsSync(__dirname + '/artigos.html')){ 
        fs.readFile(__dirname + '/artigos.html', (erro, html)=>{  
            response.writeHead(200, {"Content-Type":"text/html"});         
            response.end(html);            
        })
    }else{
        response.end("<h1>Arquivo artigo indisponivel</h1>")
    }     
    }else if(request.url == '/contato'){
        if(fs.existsSync(__dirname + '/contato.html')){
        fs.readFile(__dirname + '/contato.html', (erro, html)=>{  
            response.writeHead(200, {"Content-Type":"text/html"});         
            response.end(html);  
        })       
        }else{
            response.end("<h1>Arquivo contato indisponivel</h1>")
        }       
    }else{
        fs.readFile(__dirname + '/erro.html', (erro, html)=>{  
            response.writeHead(200, {"Content-Type":"text/html"});         
            response.end(html);            
        })         
    }
}).listen(3000, ()=>{
    console.log("rodando na 3000");
})