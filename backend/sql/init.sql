USE mobileUltrasound;

#drop table Doctors;
#drop table Patients;
#drop table Users;

CREATE TABLE IF NOT EXISTS Users (
UserId int PRIMARY KEY AUTO_INCREMENT,
IsDoctor boolean,
FirstName varchar(100),
LastName varchar(100),
Email varchar(100),
password varchar(100)
);

CREATE TABLE IF NOT EXISTS Doctors (
UserId int,
Specialty varchar(100),
FOREIGN KEY(UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Patients (
UserId int,
Sex varchar(100),
FOREIGN KEY(UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

select * from Users JOIN Doctors ON Users.UserId=Doctors.UserId;