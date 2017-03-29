var express = require('express')
    , app = express()
    , port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.all('/api', function(request, response){
    var json = request.body;
    var mult = json.a*json.b;
    response.send(JSON.stringify({ mult: mult }));
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');

});

app.listen(port, function () {
    console.log('Listening on port ', port)
});