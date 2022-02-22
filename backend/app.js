var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mysql = require('mysql')

var app = express();

//Connect to local mysql Database
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mobileUltrasound"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post("/register", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var password = req.body.password;
  var isDoctor = req.body.isDoctor;
  db.query("INSERT INTO Users (Email, Password, FirstName, LastName, IsDoctor) VALUES (?,?,?,?,?)", [email, password, firstName, lastName, isDoctor], (err, result) => {
    if (err) console.log(err);
    if(isDoctor){
      var specialty = req.body.specialty;
      db.query("INSERT INTO Doctors (UserId, Specialty) VALUES (?,?)", [result.insertId, specialty], (err, result) => {
        if (err) console.log(err);
      });
    }else{
      var sex = req.body.sex;
      db.query("INSERT INTO Patients (UserId, Sex) VALUES (?,?)", [result.insertId, specialty], (err, result) => {
        if (err) console.log(err);
      });
    }
    res.send(JSON.stringify(result));
  });
});

app.delete("/deregister", (req, res) => {
  var email = req.body.email;
  db.query("DELETE FROM Users WHERE Email=?", [email], (err, result) => {
    if (err) console.log(err);
    res.end(JSON.stringify(result));
  });
});

app.get("/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  db.query("SELECT * FROM Users WHERE Email=? AND Password=?", [email, password], (err, result) => {
    if(err) console.log(err);
    res.end(JSON.stringify(result));
  });
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const listener = app.listen("5000", () => {
  console.log("The API is listening on port 5000");
});

module.exports = app;