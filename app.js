var express = require('express');

var app = express.createServer();

var allowCrossDomain = function(req, res, next) {
    if (req.xhr) {
        res.header("Access-Control-Allow-Origin", req.header('origin'));
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
    }
    next();
};

app.configure(function () {
    app.use(allowCrossDomain);
    app.use(app.router);
});

require('filmsurf-routes').bind(app);

var port = process.env.PORT || 8000;
app.listen(port);

console.log("Server running at http://localhost:" + port);
