var http =require ("http")

function request_handler(req,res){
    var body_text ="hello Sujaany";

    res.end(body_text);
}

var svrnm =http.createServer(request_handler);

svrnm.listen(8080);