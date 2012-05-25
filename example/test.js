#!/usr/local/bin/node

var fcgi = require("../lib/fastcgi");

var server = fcgi.createServer(function(req, res) {
	// parse url
	var query = require("url").parse(req.url, true).query;
	if(query['param[]']) {
		query.param = query['param[]'];
		delete query['param[]'];
	}
	req.query = query;
	// parse cookie
	var cookies = {};
	req.headers.cookie && req.headers.cookie.split(';').forEach(function( cookie ) {
		var parts = cookie.split('=');
		cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
	});
	req.cookies = cookies;
	console.log(req);

	res.writeHead(200);
	res.write("Hello World\n");
	res.end();

});
					
server.listen(11111);
