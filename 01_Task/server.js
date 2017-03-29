var express = require('express')
    , app = express()
    , port = process.env.PORT || 3000

app.get('/api/a/:a/b/:b', function(request, response){
    var mult = req.params.a*req.params.b;
    res.send('Mult ' + mult);

});

app.listen(port, function () {
    console.log('Listening on port ', port)
})