var mysql = require('mysql');

var db = require('../db');

exports.registerTeacher = function(req, res) {

    var userID = req.body.nombres.substring(0, 2).toUpperCase() + req.body.apellidos.substring(0, 2).toUpperCase() + randomID(10, 99);

    var selectQuery = 'SELECT * FROM profesor WHERE ?? = ?';
    var selectTable = ['correo', req.body.email];
    selectQuery = mysql.format(selectQuery, selectTable);

    var query = "INSERT INTO ?? (id, nombres, apellidos, correo, contraseña) VALUES ( ?, ?, ?, ?, ?)";
    var table = ['profesor', userID, req.body.nombres, req.body.apellidos, req.body.email, req.body.password];
    query = mysql.format(query, table);
    
    console.log(selectQuery);
    console.log(query);

    db.query(selectQuery, function(err,rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing SELECT query", 'error' : err}).status(500);
        } 
        else if(rows.length > 0) {
            res.status(202).json({"Message": "Profesor existente"});
        } else {
            console.log(rows.length);
            db.query(query, function(err, rows){
                if(err) {
                    // validar si el obtuvo el mismo id
                    res.json({"Error" : true, "Message" : "Error executing INSERT query", 'error' : err}).status(500);
                } else {
                    console.log(rows);
                    db.query(selectQuery, function(err, rows){
                        if(err){
                            res.json({"Error" : true, "Message" : "Error executing second SELECT query", 'error' : err}).status(500);
                        }
                        else if(rows.length > 0) {
                            console.log(rows[0])
                            res.status(201).json(rows[0]);
                        }
                    })
                } 
            })
        }
    });
}

exports.updateTeacher = function(req, res) {
    
}

function randomID(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}