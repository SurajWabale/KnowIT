var wel = require('express')
//var bp = require('body-parser')

var app = wel();
//app.use(bp.urlencoded({extended: false}))  //populates req.body object

app.listen(9000,function(){
    console.log("Server Start at 9000");
})

app.get('/home',function(req,res){
    // res.write(" Welcome To Web App");
    // res.end();
	res.sendFile(__dirname+"/Welcome.html");
})