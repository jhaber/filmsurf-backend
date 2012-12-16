var express = require('express');

var router = express();
require('filmsurf-routes').bind(router);

var port = process.env.PORT || 8000;
router.listen(port);

console.log("Server running at http://localhost:" + port);
