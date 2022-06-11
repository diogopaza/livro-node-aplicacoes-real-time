var fs = require('fs');

var lerDiretorio = ()=>{
    fs.readdir(__dirname, (erro, diretorio)=>{
        if(erro) return erro;
        diretorio.forEach((arquivo)=>{
            ler(arquivo);
        });
    });
};

var ler = (arquivo)=>{
    var path='./'+arquivo;
    fs.stat(path, (erro,stat)=>{
        if(erro) return erro;
        if(stat.isFile()){
            console.log('%s %d bytes', arquivo, stat.sizes);
        }
    })
}

lerDiretorio();