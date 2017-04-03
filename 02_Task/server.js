var express = require('express')
    , app = express()
    , port = 3000;
const assert = require('assert');

function test(a, b)
{
    assert.equal(typeof a,"string", "аргумент a должен быть числом");
    assert.equal(typeof b,"string", "аргумент b должен быть числом");
}


app.get('/api/a/:a/b/:b',function(req,res){
    test(req.params.a,req.params.b);

    var mult = req.params.a*req.params.b;
    res.json({mult:mult});
    });




app.listen(port, function () {
    console.log('http://localhost:3000')
});