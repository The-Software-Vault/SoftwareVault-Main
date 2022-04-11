const pool = require('../connection')

module.exports = function message(app, logger) {

    // GET /message/getChat
    app.get('/message/getChat', (req, res) => {
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var userId = req.query.userId
                var doctorId = req.query.doctorId
                // if there's no issue obtaining a connection, execute query & release connection
                connection.query("SELECT * FROM `swvault`.`messages` m WHERE m.userId = 1 AND m.doctorId = 4", [userId, doctorId], (err, rows) => {
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


    // POST /user/register
    app.post('/message/addMessage', (req, res) => {
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var userId = req.body.userId
                var doctorId = req.body.doctorId
                var message = req.body.message
                console.log(message)
                console.log(doctorId)
                console.log(userId)
                // if there's no issue obtaining a connection, execute query & release connection
                connection.query("INSERT INTO `swvault`.`messages` (userId, doctorId, message, sentDate) VALUES (?,?,?,CURRENT_TIMESTAMP)", [userId, doctorId, message], (err, rows) => {
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
}
