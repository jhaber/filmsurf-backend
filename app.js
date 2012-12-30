var express = require('express');

var app = express.createServer();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://filmsurf.herokuapp.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
};

app.configure(function () {
    app.use(allowCrossDomain);
    app.use(app.router);
});

require('filmsurf-routes').bind(app);

var port = process.env.PORT || 8000;
app.listen(port);

console.log("Server running at http://localhost:" + port);
