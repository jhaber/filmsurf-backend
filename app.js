var journey = require('journey');

var router = new(journey.Router);
require('filmsurf-routes').bind(router);

var port = process.env.PORT || 8000;

require('http').createServer(function (request, response) {
	var body = "";

    request.addListener('data', function (chunk) { body += chunk });
    request.addListener('end', function () {
        router.handle(request, body, function (result) {
            response.writeHead(result.status, result.headers);
            response.end(result.body);
        });
    });
}).listen(port);

console.log("Server running at http://localhost:" + port);
