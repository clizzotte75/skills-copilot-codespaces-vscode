// create web server
var http = require('http');

// create web server
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p>Comments</p></body></html>');
    res.end();
});

// listen on port 8080
server.listen(8080);