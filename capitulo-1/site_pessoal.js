var http= require('http');
var fs = require('fs');

var server = http.createServer((request,response)=>{
    console.log("Diretorio " + __dirname);
    fs.readFile(__dirname + '/index.html', (erro, html)=>{
        response.writeHeader(200, {'Content-Type': 'text/html'});
        response.write(html);
        response.end();
    })
}).listen(3000, ()=>{
    console.log("Servidor rodando");
})