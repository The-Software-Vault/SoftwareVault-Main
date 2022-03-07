-- -----------------------------------------------------
-- Initial database rules (init.sql)
-- -----------------------------------------------------

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
-- Create user called `admin` with password `XXXXXX`
CREATE USER 'admin'@'%' IDENTIFIED BY 'Password1!';

-- Give access to admin on db
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
GRANT ALL PRIVILEGES ON `swvault` TO 'admin'@'%';

-- Set password method to native password for mysql workbench access (mysql 8 issue)
ALTER USER 'admin'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Password1!';

-- Flush them privileges
FLUSH PRIVILEGES;
