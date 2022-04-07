const pool = require('../connection')
const bcrypt = require('bcrypt')

module.exports = function user(app, logger) {

    // GET /user/
    app.get('/user/', (req, res) => {
        console.log(req.query.username)
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var username = req.query.username
                // if there's no issue obtaining a connection, execute query & release connection
                connection.query("SELECT * FROM `swvault`.`user` u WHERE u.username = ?", [username], (err, rows) => {
                    connection.release();
                    if (err) {
                        logger.error("Error while fetching values: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).json(rows)
                    }
                });
            }
        });
    });


    // GET /user/:userID
    app.get('/user/:userID', (req, res) => {
        console.log(req.params.userID)
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var userID = req.params.userID
                // if there's no issue obtaining a connection, execute query & release connection
                connection.query('SELECT * FROM `swvault`.`user` u WHERE u.id = ?', [userID], function (err, rows, fields) {
                    // if there's an error with the query, release the connection instance & log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while fetching values: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "Error obtaining values"
                        })
                    } else {
                        res.status(200).json({
                            "data": rows
                        });
                    }
                });
            }
        });
    });


    // POST /user/register
    app.post('/user/register', (req, res) => {
        console.log(req.body.username, req.body.first_name, req.body.last_name, req.body.email, req.body.hashpass);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var username = req.body.username
                var first_name = req.body.first_name
                var last_name = req.body.last_name
                var email = req.body.email
                var hashpass = req.body.hashpass

                // Hash the password
                const saltRounds = 10;
                bcrypt.hash(hashpass, saltRounds, function(err, hash) {
                    connection.query('INSERT INTO `swvault`.`user` (username, first_name, last_name, email, hashpass) VALUES(?, ?, ?, ?, ?)',[username, first_name, last_name, email, hash], function (err, rows, fields) {
                        if (err) { 
                            // if there's an error w/ the query, release the connection instance & log the error
                            connection.release()
                            logger.error("Error while logging in w/ user: \n", err); 
                            res.status(400).json({
                                "data": [],
                                "error": "MySQL error"
                            })
                        } else{
                            res.status(201).json({
                                "data": rows
                            });
                        }
                    });
                })
            }
        });
    });


    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log(req.body.username, req.body.hashpass);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
            // if there's an issue obtaining a connection, release the connection instance & log the error
            logger.error('Problem obtaining MySQL connection',err)
            res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there's no issue obtaining a connection, execute query & release connection
                const username = req.body.username
                const hashpass = req.body.hashpass

                // Hash password
                const saltRounds = 10;
                connection.query('SELECT u.hashpass, u.id FROM `swvault`.`user` u WHERE u.username = ?', [username], function (err, rows, fields) {
                        if (err) { 
                            // if there's an error w/ the query, release the connection instance & log the error
                            connection.release()
                            res.status(400).json({
                                "data": [],
                                "error": "MySQL error"
                            })
                        } else {
                            bcrypt.compare(hashpass, rows[0].hashpass, function (err, result) {
                                console.log("Username:", username, "\tPassword:", hashpass, "\nSavedHash:", rows[0].hashpass)
                                if(result){
                                    console.log("Correct! Hash matches w/ plain text")
                                    res.status(201).json(rows[0].id)
                                }
                                else {
                                    logger.error("Error while logging in w/ user: \n", err); 
                                    //res.status(400).json({message: "Wrong Credentials"})
                                    res.status(400).json({
                                        "data": [],
                                        "error": "MySQL error"
                                        //message: "Wrong Credentials!"
                                    })
                                    //res.send({message: "Wrong Credentials"})
                                }
                            })
                        }
                    });
            }
        });
    });


    // DELETE /user/delete-account
    app.delete('/user/delete-account', (req, res) => {
        console.log(req.body.email, req.body.hashpass);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there's no issue obtaining a connection, execute query & release connection
                var email = req.body.email;
                var hashpass = req.body.hashpass
                connection.query("DELETE FROM `user` u WHERE u.email = ? AND u.hashpass = ?", [email, hashpass], (err, rows) => {
                    // if there's an error with the query, release the connection instance & log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while executing Query: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(204).json(rows)
                    }
                });
            }
        });
    });

    // PUT /user/updateInsurance
    app.put('/user/updateInsurance', (req, res) => {
        console.log(req.body.id, req.body.healthPlan, req.body.memberID, req.body.groupID, req.body.relation);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var id = req.body.id
                var healthPlan = req.body.healthPlan
                var memberID = req.body.memberID
                var groupID = req.body.groupID
                var relation = req.body.relation
                // if there's no issue obtaining a connection, execute query & release connection
                connection.query("UPDATE `swvault`.`patientInfo` u SET u.healthPlan = ?, u.memberID = ?, u.groupID = ?, u.relation = ? WHERE u.patientID = ?", [healthPlan, memberID, groupID, relation, id], (err, rows) => {
                    connection.release();
                    if (err) {
                        logger.error("Error while executing Query: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).json(rows)
                    }
                });
            }
        });
    });

    // PUT /user/updateEMC
    app.put('/user/updateEMC', (req, res) => {
        console.log(req.body.id, req.body.ecn, req.body.relation, req.body.cell, req.body.work);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var id = req.body.id
                var ecn = req.body.ecn
                var relation = req.body.relation
                var cell = req.body.cell
                var work = req.body.work
                // if there's no issue obtaining a connection, execute query & release connection
                connection.query("UPDATE `swvault`.`patientInfo` u SET u.ecn = ?, u.relation = ?, u.cell = ?, u.work = ? WHERE u.patientID = ?", [ecn, relation, cell, work, id], (err, rows) => {
                    connection.release();
                    if (err) {
                        logger.error("Error while executing Query: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).json(rows)
                    }
                });
            }
        });
    });

    // PUT /user/updateMH
    app.put('/user/updateMH', (req, res) => {
        console.log(req.body.id, req.body.age, req.body.weight, req.body.height, req.body.med, req.body.allergies);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var id = req.body.id
                var age = req.body.age
                var weight = req.body.weight
                var height = req.body.height
                var med = req.body.med
                var allergies = req.body.allergies
                // if there's no issue obtaining a connection, execute query & release connection
                connection.query("UPDATE `swvault`.`patientInfo` u SET u.age = ?, u.weight = ?, u.height = ?, u.med = ?, u.allergies = ? WHERE u.patientID = ?", [age, weight, height, med, allergies, id], (err, rows) => {
                    connection.release();
                    if (err) {
                        logger.error("Error while executing Query: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).json(rows)
                    }
                });
            }
        });
    });
}
