
var exp = require('express');
var bp = require('body-parser')
var path=require("path");
var app = exp();
app.use(bp.urlencoded({extended: false}))
app.use()
app.use(express.static(path.join(__dirname,'public')));
app.listen(9000, function () {
    console.log("Server Started");
})

app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html");
})

app.post('/logincheck', function (req, res) {
    if (req.body.uid == "object" && req.body.pwd == "knowit") 
        res.send("<h2>Login Done</h2>");
     else 
        res.send("<h2>Login failed</h2>");
    
});
app.all('*', function (req, res) {
    res.send("Invalid URL"); 
});

var exp = require('express');
var bp = require('body-parser')

var app = exp();
app.use(bp.urlencoded({extended: false}))

app.listen(9000, function () {
    console.log("Server Started");
})

app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html");
})

app.post('/logincheck', function (req, res) {
    if (req.body.uid == "object" && req.body.pwd == "knowit") 
        res.send("<h2>Login Done</h2>");
     else 
        res.send("<h2>Login failed</h2>");
    
});
app.all('*', function (req, res) {
    res.send("Invalid URL"); 
});
