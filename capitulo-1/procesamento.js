var https = require('https');
var fs = require('fs');
var leituraAsync = require('./leitura_async.js');
var leituraSync = require('./leitura_sync');

var arquivo = "./node-v18.3.0-x64.msi";
var stream = fs.createWriteStream(arquivo);
var download = "https://nodejs.org/dist/latest/node-v18.3.0-x64.msi";

https.get(download, function (res) {
    console.log("Fazendo download do node.js");
    res.on('data', function (data) {
        stream.write(data);
    });
    res.on('end', function () {
        stream.end();
        console.log("Download finalizado");
        leituraAsync(arquivo);
        leituraSync(arquivo);

    });
})
