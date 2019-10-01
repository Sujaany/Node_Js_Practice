var express = require ('express');
var app =express();

logger =function(req,res,next){
    console.log('middleware testing');
    next();
}
app.use (logger);

app.get('/',function(req,res){
    res.send('Middleware checked');
});

app.listen(7000);
console.log('Magic happens on port');



