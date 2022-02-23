const pool = require('../connection')

module.exports = function user(app, logger) {

    // POST /user/register
    app.post('/user/register', (req, res) => {
        console.log(req.body.email,req.body.password, req.body.first_name, req.body.last_name, req.body.userType_id);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var email = req.body.email
                var password = req.body.password
                var first_name = req.body.first_name
                var last_name = req.body.last_name
                var userType_id = req.body.userType_id
                // if there is no issue obtaining a connection, execute query
                connection.query('INSERT INTO `swvault`.`user` (email, password, first_name, last_name, userType_id) VALUES(?, ?, ?, ?, ?)',[email, password, first_name, last_name, userType_id], function (err, rows, fields) {
                    if (err) { 
                        // if there is an error with the query, release the connection instance and log the error
                        connection.release()
                        logger.error("Error while creating user: \n", err); 
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else{
                        res.status(200).json({
                            "data": rows
                        });
                    }
                });
            }
        });
    });


    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log(req.body.username,req.body.password);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
            // if there is an issue obtaining a connection, release the connection instance and log the error
            logger.error('Problem obtaining MySQL connection',err)
            res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                const email = req.body.email
                const password = req.body.password
                connection.query('SELECT IF(EXISTS(SELECT * FROM `swvault`.`user` u WHERE u.email = ? AND u.password = ?), (SELECT u.email AS result FROM `swvault`.`user` u WHERE u.password = ?), 0) AS result', [email, password, password], function (err, rows, fields) {
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

    // DELETE /user/delete-account
    app.delete('/user/delete-account', (req, res) => {
        console.log(req.body.email);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                var email = req.body.email;
                connection.query("DELETE FROM `user` WHERE `user`.`email` = ?", [email], (err, rows) => {
                    // if there is an error with the query, release the connection instance and log the error
                    connection.release()
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