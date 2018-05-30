var express = require('express');
var cors = require('cors');
app = express();
port = process.env.PORT || 3000;

app.use(cors())

var routes = require('./api/routes/route')
routes(app);

app.listen(port);

console.log('Currency Conveter RESTful API server started on: ' + port);
