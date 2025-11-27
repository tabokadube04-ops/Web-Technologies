const port  = 4500;

var http = require('http');

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Welcome to the world of Node JS\n');
}).listen(port);


console.log('Server running at http:// localhost:' + port + '/');

