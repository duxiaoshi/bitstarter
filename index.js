var express = require('express')
var app = express();
var fs = require('fs');

var data = fs.readFileSync('/home/ubuntu/bitstarter/index.html','utf8');
var buf = Buffer(data)

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  response.send(buf.toString('utf8'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
