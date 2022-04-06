const pool = require('../connection')
const bcrypt = require('bcrypt')

module.exports = function user(app, logger) {

    // GET /user/
    app.get('/user/', (req, res) => {
        console.log(req.query.username)
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var username = req.query.username
                // if there is no issue obtaining a connection, execute query and release connection
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
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var userID = req.params.userID
                // if there is no issue obtaining a connection, execute query and release connection
                connection.query('SELECT * FROM `swvault`.`user` u WHERE u.id = ?', [userID], function (err, rows, fields) {
                    // if there is an error with the query, release the connection instance and log the error
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
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var username = req.body.username
                var first_name = req.body.first_name
                var last_name = req.body.last_name
                var email = req.body.email
                var hashpass = req.body.hashpass

                // Hash password
                const saltRounds = 10;
                bcrypt.hash(hashpass, saltRounds, function(err, hash) {
                    connection.query('INSERT INTO `swvault`.`user` (username, first_name, last_name, email, hashpass) VALUES(?, ?, ?, ?, ?)',[username, first_name, last_name, email, hash], function (err, rows, fields) {
                        if (err) { 
                            // if there's an error w/ the query, release the connection instance & log the error
                            connection.release()
                            logger.error("Error while creating user: \n", err); 
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
                
                
/*
                // if there is no issue obtaining a connection, execute query
                connection.query('INSERT INTO `swvault`.`user` (username, first_name, last_name, email, hashpass) VALUES(?, ?, ?, ?, ?)',[username, first_name, last_name, email, hashpass], function (err, rows, fields) {
                    if (err) { 
                        // if there is an error with the query, release the connection instance and log the error
                        connection.release()
                        logger.error("Error while creating user: \n", err); 
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
                */
            }
        });
    });

    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log(req.body.username, req.body.hashpass);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
            // if there is an issue obtaining a connection, release the connection instance and log the error
            logger.error('Problem obtaining MySQL connection',err)
            res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                const username = req.body.username
                const hashpass = req.body.hashpass
                // Hash password
                const saltRounds = 10;
                //bcrypt.hash(hashpass, saltRounds, function(err, hash) {
                // connection.query('SELECT IF(EXISTS(SELECT * FROM `swvault`.`user` u WHERE u.username = ?), 0) AS result', [username], function (err, rows, fields)
                connection.query('SELECT u.hashpass, u.id FROM `swvault`.`user` u WHERE u.username = ?', [username], function (err, rows, fields) {
                        if (err) { 
                            // if there's an error w/ the query, release the connection instance & log the error
                            connection.release()
                            logger.error("Error while creating user: \n", err); 
                            res.status(400).json({
                                "data": [],
                                "error": "MySQL error"
                            })
                        } else {
                            //const ress = await bcrypt.compare(hashpass, rows[0].hashpass)
                            //console.log("Comparing: ", hashpass, ' >>> ', ress)
                            bcrypt.compare(hashpass, rows[0].hashpass, function (err, result) {
                                console.log("Username:", username, "\tPassword:", hashpass, "\nSavedHash:", rows[0].hashpass)
                                if(result){
                                    console.log("Correct! Hash matches w/ plain text")
                                    res.status(201).json(rows[0].id)
                                }
                                else {
                                    res.status(400).json({
                                        "data": [],
                                        "error": "MySQL error"
                                        //message: "Wrong Credentials!"
                                    })
                                    //res.send({message: "Wrong Credentials"})
                                }
                            })
                            //console.log("hashpass: ", rows[0].hashpass)
                            //res.status(201).json({
                                //"data": rows
                            //});
                        }
                    });
                //})
            }
        });
    });




/*
    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log(req.body.username, req.body.hashpass);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
            // if there is an issue obtaining a connection, release the connection instance and log the error
            logger.error('Problem obtaining MySQL connection',err)
            res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                const username = req.body.username
                const hashpass = req.body.hashpass
                // Hash password
                const saltRounds = 10;
                bcrypt.hash(hashpass, saltRounds, function(err, hash) {
                    connection.query('SELECT IF(EXISTS(SELECT * FROM `swvault`.`user` u WHERE u.username = ?), 0) AS result', [username, hash, hash], function (err, rows, fields) {
                        if (err) { 
                            // if there's an error w/ the query, release the connection instance & log the error
                            connection.release()
                            logger.error("Error while creating user: \n", err); 
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
                connection.query('SELECT IF(EXISTS(SELECT * FROM `swvault`.`user` u WHERE u.email = ? AND u.hashpass = ?), (SELECT u.email AS result FROM `swvault`.`user` u WHERE u.hashpass = ?), 0) AS result', [email, hashpass, hashpass], function (err, rows, fields) {
                    // if there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while executing Query");
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).send(rows[0].result);
                    }
                });
            }
        });
    });
*/

    // DELETE /user/delete-account
    app.delete('/user/delete-account', (req, res) => {
        console.log(req.body.email, req.body.hashpass);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                var email = req.body.email;
                var hashpass = req.body.hashpass
                connection.query("DELETE FROM `user` u WHERE u.email = ? AND u.hashpass = ?", [email, hashpass], (err, rows) => {
                    // if there is an error with the query, release the connection instance and log the error
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
}
