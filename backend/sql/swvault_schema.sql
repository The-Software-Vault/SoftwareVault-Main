CREATE DATABASE IF NOT EXISTS `swvault`;
USE `swvault`;

-- -----------------------------------------------------
-- Table `swvault`.`user_type`
-- -----------------------------------------------------
CREATE TABLE `swvault`.`user_type` (
    `id`    INT NOT NULL AUTO_INCREMENT,
    `type`  VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO user_type (type) VALUES ('patient'), ('doctor'), ('admin');

-- -----------------------------------------------------
-- Table `swvault`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`user` (
    `id`    INT AUTO_INCREMENT,
    `first_name`    VARCHAR(50) NOT NULL,
    `last_name`     VARCHAR(50) NOT NULL,
    `username`      VARCHAR(50) NOT NULL,
    `email`         VARCHAR(100) NOT NULL,
    `hashpass`      VARCHAR(100) NOT NULL,
    `userType_id`   INT DEFAULT 1,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userType_id`)
                REFERENCES `swvault`.`user_type`(`id`)
        ON UPDATE CASCADE
);

INSERT INTO user (`first_name`, `last_name`, `username`, `email`, `hashpass`, `userType_id`) VALUES
    ('Jane', 'Doe', 'JDoe', 'jdoe@gmail.com','$2b$10$CmrDR3YvdkT7Xpd7XYc/F.eD2MH8NU.mJewWsu7bLXxh1WX4JCXtW', 1),
    ('John', 'Smith', 'JSmith', 'jadoe@yahoo.com', '$2b$10$eN.9Oz3nCnVNB9enqfKgmeZ8KkHAziCZIwFPUKSxBsG8Ye5q5Q9o2', 1),
    ('Sarah', 'Jones', 'SJones', 'svega@med.com', '$2b$10$Xx7ODAIIQjMJVGCURK295eeehZX18pTeZz4Up2L9FTsvo6ivgD9Bu', 1),
    ('Sam', 'Free', 'SFree', 'sfree@aol.com', '$2b$10$IplV67.58Eg7LHDoO6.jBOsIQw5ZkEWylEDzF1jgCM3hpwmh88gj.', 2),
    ('Will', 'Vega', 'WVega', 'wvega@gmail.com', '$2b$10$O4pyMK4HhF61dY4IVqhqiO0wFWR6L4l513K1p40.uw8Ima4GS/Mr6', 3),
    ('Emily', 'Smith', 'ESmith', 'esmith@yahoo.com', '$2b$10$0zrtNGOGJav4gc7ASaEAMO8HZRAL0jwjkgOqZ82ouZhHaJFsWYYaC', 1),
    ('Ryan', 'Jones', 'RJones', 'rjones@hotmail.com', '$2b$10$4D9Yl8VkwjI85QtDQx62Heqfe4jS2OCvducv0Lq.WR7F03d..K97m', 2),
    ('Jack', 'Dop', 'Doctor', 'JDop@gmail.com','$2b$10$CmrDR3YvdkT7Xpd7XYc/F.eD2MH8NU.mJewWsu7bLXxh1WX4JCXtW', 2);

-- -----------------------------------------------------
-- Table `swvault`.`doctor_settings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`doctor_settings` (
    `settingsID`    INT,
    `link`          VARCHAR(300) DEFAULT NULL,
    `instructions`  VARCHAR(300) DEFAULT NULL,
    `meetingPassword` VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (`settingsID`)
);

INSERT INTO doctor_settings (`settingsID`, `link`, `instructions`, `meetingPassword`) VALUES
    (1, 'https://smu.zoom.us/j/99521176990','Join 3 minutes prior!',NULL);

-- -----------------------------------------------------
-- Table `swvault`.`doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`doctor` (
    `id`    INT,
    `specialty`         VARCHAR(100),
    `yearsExperience`   INT DEFAULT NULL,
    `settingsID`        INT DEFAULT NULL,
    FOREIGN KEY(`id`)
            REFERENCES `swvault`.`user`(`id`)
        ON DELETE CASCADE,
    FOREIGN KEY (`settingsID`)
            REFERENCES `swvault`.`doctor_settings`(`settingsID`)
        ON DELETE CASCADE
);

INSERT INTO doctor (`id`, `specialty`, `yearsExperience`, `settingsID`) VALUES
    (4, 'Heart Surgeon', 4, 1),
    (7, 'Pediatrician', 6, NULL);

-- -----------------------------------------------------
-- Table structure for table `insurance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`insurance` (
    `insuranceID` INT,
    `plan` VARCHAR(100) DEFAULT NULL,
    `memberID` VARCHAR(20) DEFAULT NULL,
    `groupID` VARCHAR(20) DEFAULT NULL,
    `relationToHolder` VARCHAR(30) DEFAULT NULL,
    PRIMARY KEY (`insuranceID`)
);

INSERT INTO insurance (`insuranceID`, `plan`, `memberID`, `groupID`, `relationToHolder`) VALUES
    (1,'Health','33333','29982','Parent');

-- -----------------------------------------------------
-- Table `swvault`.`emergency`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`emergency` (
    `emergencyID` INT UNIQUE,
    `contactName` VARCHAR(100) DEFAULT NULL,
    `contactRelationship` VARCHAR(30) DEFAULT NULL,
    `cellPhone` VARCHAR(40) DEFAULT NULL,
    `workPhone` VARCHAR(40) DEFAULT NULL
);

INSERT INTO emergency (`emergencyID`, `contactName`, `contactRelationship`, `cellPhone`, `workPhone`) VALUES
    (1,'Bob Smith','Father','928-222-3392','219-304-2939');

-- -----------------------------------------------------
-- Table `swvault`.`patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`patient` (
    `id`     INT,
    `sex`    VARCHAR(10),
    `weight` INT DEFAULT NULL,
    `height` VARCHAR(20) DEFAULT NULL,
    `allergies` VARCHAR(100) DEFAULT NULL,
    `medication` VARCHAR(100) DEFAULT NULL,
    `insuranceID` INT DEFAULT NULL,
    `emergencyID` INT,
    FOREIGN KEY(`id`)
            REFERENCES `swvault`.`user`(`id`)
        ON DELETE CASCADE,
    FOREIGN KEY(`insuranceID`)
            REFERENCES `swvault`.`insurance`(`insuranceID`)
        ON DELETE CASCADE,
    FOREIGN KEY(`emergencyID`)
            REFERENCES `swvault`.`emergency`(`emergencyID`)
        ON DELETE CASCADE
);

INSERT INTO patient (`id`, `sex`, `weight`, `height`, `allergies`, `medication`, `insuranceID`, `emergencyID`) VALUES
    (1,'female',192,'5''5','None','None',1,1),
    (2,'male',200,'6''2',NULL,NULL,NULL,NULL),
    (3,'female',146,'5''3',NULL,NULL,NULL,NULL),
    (6,'female',186,'5''9',NULL,NULL,NULL,NULL);

-- -----------------------------------------------------
-- Table `swvault`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`messages` (
    `id`            INT AUTO_INCREMENT,
    `userId`        INT NOT NULL,
    `doctorId`      INT NOT NULL,
    `message`       VARCHAR(512) NOT NULL,
    `sentDate`      DATETIME NOT NULL,
    `isSender`      TINYINT(1),
    `isSeen`        TINYINT(1),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userId`)
            REFERENCES `swvault`.`patient`(`id`)
        ON DELETE CASCADE,
    FOREIGN KEY (`doctorId`)
            REFERENCES `swvault`.`doctor`(`id`)
        ON DELETE CASCADE
);

INSERT INTO messages (`userId`, `doctorId`, `message`, `sentDate`, `isSender`,`isSeen`) VALUES
    (1, 4, 'Hello Doctor, I have a quick question', CURRENT_TIMESTAMP, 1, 0);

-- -----------------------------------------------------
-- Table `swvault`.`appt_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`appt_details` (
    `detailsID` INT AUTO_INCREMENT,
    `datetime` DATETIME DEFAULT NULL,
    `reason` VARCHAR(50) DEFAULT NULL,
    `symptoms` VARCHAR(50) DEFAULT NULL,
    `image` blob,
    `notes` VARCHAR(500) DEFAULT NULL,
    `prescription` VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (`detailsID`)
);

INSERT INTO appt_details (`datetime`, `reason`, `symptoms`, `image`, `notes`, `prescription`) VALUES
    ('2022-05-20 09:00:00','Sick','Nausea',NULL,NULL,NULL);

-- -----------------------------------------------------
-- Table `swvault`.`appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`appointments` (
    `apptID` INT DEFAULT NULL,
    `apptStatus` INT DEFAULT NULL,
    `patientID` INT,
    `doctorID` INT,
    `detailsID` INT,
    FOREIGN KEY (`patientID`)
            REFERENCES `swvault`.`patient`(`id`)
        ON DELETE CASCADE,
    FOREIGN KEY (`doctorID`)
            REFERENCES `swvault`.`doctor`(`id`)
        ON DELETE CASCADE,
    FOREIGN KEY (`detailsID`)
            REFERENCES `swvault`.`appt_details`(`detailsID`)
        ON DELETE CASCADE
);

INSERT INTO appointments (`apptID`, `apptStatus`, `patientID`, `doctorID`, `detailsID`) VALUES
    (1,1,1,4,1);

-- -----------------------------------------------------
-- Table structure for table `specificdates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`specificdates` (
    `specificID` INT DEFAULT NULL,
    `specificDate` DATE DEFAULT NULL,
    `doctorID` INT,
    FOREIGN KEY (`doctorID`)
            REFERENCES `swvault`.`doctor`(`id`)
        ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table structure for table `generaltimes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`generaltimes` (
    `timeID` INT DEFAULT NULL,
    `time` VARCHAR(15) DEFAULT NULL,
    `doctorID` INT,
    FOREIGN KEY (`doctorID`)
            REFERENCES `swvault`.`doctor`(`id`)
        ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table structure for table `generaldays`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`generaldays` (
    `dayID`     INT DEFAULT NULL,
    `day`       VARCHAR(20) DEFAULT NULL,
    `doctorID`  INT DEFAULT NULL,
    FOREIGN KEY (`doctorID`)
            REFERENCES `swvault`.`doctor`(`id`)
        ON DELETE CASCADE
);