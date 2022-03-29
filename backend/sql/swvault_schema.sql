CREATE DATABASE IF NOT EXISTS `swvault`;
USE `swvault`;


-- -----------------------------------------------------
-- Table `swvault`.`user_type`
-- -----------------------------------------------------
CREATE TABLE `swvault`.`user_type` (
    `id`    INT PRIMARY KEY AUTO_INCREMENT,
    `type`  VARCHAR(100) NOT NULL
);

INSERT INTO user_type (type) VALUES ('patient'), ('doctor'), ('admin');

-- -----------------------------------------------------
-- Table `swvault`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`user` (
	`id` 	INT AUTO_INCREMENT,
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
    ('Jane', 'Doe', 'JDoe', 'jdoe@gmail.com','$2y$10$a64Id4ut.ho6vopIqN3Mp.WngqkWHbrIP8TqtWHQgqv6ebZwmm9E6', 1),
    ('John', 'Smith', 'JSmith', 'jadoe@yahoo.com', '$2y$10$drpmdKOu/FJK3LPYhRaIVOHsTJZbeeO4XNR.HZX7P3hs.w2xUw8ky', 1),
    ('Sarah', 'Jones', 'SJones', 'svega@med.com', '$2y$10$qtGLXoc/352DfuaZDBV.qunVPx.8ZQ/deDtk0kPngV.BgVwDbIW6e', 1),
    ('Sam', 'Free', 'SFree', 'sfree@aol.com', '$2y$10$rfFc7aei2y/UKOcvUqgBjuLZtoHvCgH9sPwYJXJU6W1bTOI1JLehC', 2),
    ('Will', 'Vega', 'WVega', 'wvega@gmail.com', '$2y$10$F.i/NcsYlnmk3dPDIB/G8uYr5AGd8H9VMHEeg4b2LPwpZgHK7oOGu', 3),
    ('Emily', 'Smith', 'ESmith', 'esmith@yahoo.com', '$2y$10$T9qyikelj.A3oaX25OoD9OoUdKHZuNM.aGwWZVRL.uMvgAT..MawC', 1),
    ('Ryan', 'Jones', 'RJones', 'rjones@hotmail.com', '$2y$10$JWNU22Ea0Nen0ZW9i1Eg4uXwFWyHR6x/jAqxQYV/6dGpUeJ9VWJte', 2);

-- -----------------------------------------------------
-- Table `swvault`.`doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`doctor` (
	`id`    INT,
	`specialty`     VARCHAR(100),
	FOREIGN KEY(`id`)
	        REFERENCES `swvault`.`user`(`id`)
	    ON DELETE CASCADE
);

INSERT INTO doctor (`id`, `specialty`) VALUES
    (4, 'Heart Surgeon'),
    (7, 'Pediatrician');

-- -----------------------------------------------------
-- Table `swvault`.`patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`patient` (
	`id`    INT,
	`sex`   VARCHAR(10),
	FOREIGN KEY(`id`)
	        REFERENCES `swvault`.`user`(`id`)
	    ON DELETE CASCADE
);

INSERT INTO patient (`id`, `sex`) VALUES
    (1, 'female'),
    (2, 'male'),
    (3, 'female'),
    (6, 'female');
