const pool = require('../connection')

module.exports = function appointment(app, logger) {

    // GET /appointments/getAllAppointments for this userId
    app.get('/appointments/getAppointments', (req, res) => {
        console.log("UserID: " + req.query.userId + " AppointmentID: " + req.query.appointmentId)
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
                connection.query("SELECT * FROM `swvault`.`appointments` m WHERE m.userId = ? AND m.doctorId = ?", [userId, doctorId], (err, rows) => {
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

    // GET /message/getChat
    app.get('/appointments/getAppointments', (req, res) => {
        console.log("UserID: " + req.query.userId + " DoctorID: " + req.query.doctorId + " AppointmentID: " + req.query.appointmentId)
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
                connection.query("SELECT * FROM `swvault`.`messages` m WHERE m.userId = ? AND m.doctorId = ?", [userId, doctorId], (err, rows) => {
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


    // POST /message/addMessage
    app.post('/appointments/addAppointment', (req, res) => {
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
