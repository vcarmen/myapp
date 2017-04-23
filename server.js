var http = require("http");
var url = require("url");

function startServer(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+ pathname + "acepted");
		response.writeHead(200, {"Content-Type": "text/html"});
				
		var content = route(handle, pathname);
	  	response.write(content);
	  	response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Starting server");

}

exports.startServer = startServer;