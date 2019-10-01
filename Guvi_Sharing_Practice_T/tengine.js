var express =require ('express');
var app =express();
var bodyparser =require('body-parser');
var path =require('path');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"))

app.get('/',function(req,res){
    res.render("index");
})

app.listen(7000);
console.log('magic happend on port' + 7000);