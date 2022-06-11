var fs = require('fs');

for (var i = 1; i <= 5; i++) {
    var fileName = "sync-txt" + i + ".txt";
    fs.writeFile(fileName, function(out){
        console.log(fileName, "Hello Node.js!");
    })
    console.log("executando");
}

