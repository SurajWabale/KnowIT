var exp = require('express');
var cors = require('cors');
var mysql = require('mysql2');
var bp = require('body-parser');
const { createConnection } = require('mysql2');

 var app=exp();
 app.use(cors())
 app.use(bp.json());

 var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Suraj@123",
        database:"dac"
 })
 con.connect(function(err){
    if(!err)
    {
        console.log("DataBase Connected")
    }
    else
    {
        console.log("DataBase Connection Failed")
    }
 })
 app.listen(9000,function(){
    console.log("Server Started At 9000");
 })
 app.get('/emp',function(req,res){
    con.query('select * from emp', function (err, result) {
        //res.send("<h2>Employee Table Details</h2>")
        if (! err) {
            console.log(result.length);
            res.json(result);
        }
    })
 })

 app.post('/inemp',function(req,res){
    var empno = req.body.empno;
    var ename = req.body.ename;
    var deptno = req.body.deptno;
    var sal = req.body.sal;

    console.log(empno,ename,deptno,sal);
    var query = "insert into emp(EMPNO,ENAME,DEPTNO,SAL) values(?,?,?,?)";

    con.query(query,[empno,ename,deptno,sal],function(err){
        if(!err){
            res.send("Insertion SuccessFull")
        }
        else
        {
            res.send("Insertion Failed")
        }
    })
 });
 app.all('*',function(req,res){
	res.send("URL incorrect")
});

