var express = require('express')
    , app = express()
    , port = process.env.PORT || 3000;
const assert = require('assert');

app.get('/api/a/:a/b/:b',function(req,res){
    test(req.params.a,req.params.b);

    var mult = req.params.a*req.params.b;
    res.json({mult:mult});
    exports(mult)
});

app.all('/app',function(req,res){
    res.send(req.params)
    //var mult = req.params.a*req.params.b;
    //res.json({mult:mult});
    //exports(mult)
});


app.listen(port, function () {
    console.log('http://localhost:3000')
});