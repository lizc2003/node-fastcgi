node-fastcgi
============

FastCGI implemented in node.js

Hello World

    var fastcgi = require('fastcgi');

    fastcgi.createServer(function(req, res) {
        res.writeHead(200);
        res.write('Hello World\n');
        res.end();
    }).listen(9000, '127.0.0.1');


Notes

   fastcgi_parser.js come from[https://github.com/billywhizz/node-fastcgi-parser]
