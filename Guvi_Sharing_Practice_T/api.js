var express =require ('express');
var app =express();
var bodyparser =require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var router =express.Router();

router.get('/',function(req,res){
    res.json({message: 'hello sujaany! Welcome to our first api'});
});

router.get('/courses',function(req,res){
    res.json({Course_name:'NodeJs'});
});

app.use('/api',router);

app.listen(7000);
console.log('magic happend on port' + 7000);