let express = require("express");
let http = express();

// set up a route to redirect http to https
http.get('*', function(req, res) {
    res.redirect('http://' + req.headers.host + req.url);
})

http.listen(5000);