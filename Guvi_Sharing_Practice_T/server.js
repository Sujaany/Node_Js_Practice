var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, { 'context-Type': 'text/html' });
    var pth = __dirname + '\\index.html';

    fs.readFile(pth, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    })
}
http.createServer(onRequest).listen(8000);