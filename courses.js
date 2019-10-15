var express = require('express');
var app = express();
var mysql = require('mysql');
const bodyParser=require("body-parser");
app.use(bodyParser.json())
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'navgurukul',
      database: 'saralCourse'
    },
  
});

// Post data...
app.post("/postData", (req,res)=>{
    knex('saralCourses').insert({CourseName: req.body.CourseName,Description: req.body.Description}).then(()=>{
        knex.select("*").from("saralCourses").then((data)=>{
            res.send(data)
        })
    }).catch(()=>{
        console.log("ERROR-----------------")
    })
});

// Get data by Id...
app.get("/getData/:id",(req,res)=>{
    var id = req.params.id;
    knex.select('*').from('saralCourses').where('id',id).then((data)=>{
        res.send(data)
    })
});


// Update data by Id...
app.put("/putData/:id",(req,res)=>{
    var id = req.params.id;
    knex("saralCourses").where("id",id).update({CourseName: req.body.CourseName, Description: req.body.Description}
    ).then((data)=>{
        return res.end(JSON.stringify("Updated data"))
    }).catch((err)=>{
        console.log("ERROR-------------");
    })
});


// Delete data by Id...
app.delete("/delete/:id",function(req,res){
    knex("saralCourses").where("id",req.params.id).del().then((data)=>{
        return res.end(JSON.stringify("Deleted"))
    }).catch((err)=>{
        console.log("ERROR-----------");
    })
});

app.listen(6000, function () {
    console.log('Express server is listening on port 6000');
});
