var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// var billRoutes = require('./routes/billRoutes')(Bill);
// app.use('/api/bills', billRoutes);

app.use(express.static(__dirname + '/app'));
app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen(port, function () {
    console.log('listening on port: ' + port);
});
