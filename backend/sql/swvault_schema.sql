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
    ('Jane', 'Doe', 'JDoe', 'jdoe@gmail.com','$2b$10$CmrDR3YvdkT7Xpd7XYc/F.eD2MH8NU.mJewWsu7bLXxh1WX4JCXtW', 1),
    ('John', 'Smith', 'JSmith', 'jadoe@yahoo.com', '$2b$10$eN.9Oz3nCnVNB9enqfKgmeZ8KkHAziCZIwFPUKSxBsG8Ye5q5Q9o2', 1),
    ('Sarah', 'Jones', 'SJones', 'svega@med.com', '$2b$10$Xx7ODAIIQjMJVGCURK295eeehZX18pTeZz4Up2L9FTsvo6ivgD9Bu', 1),
    ('Sam', 'Free', 'SFree', 'sfree@aol.com', '$2b$10$IplV67.58Eg7LHDoO6.jBOsIQw5ZkEWylEDzF1jgCM3hpwmh88gj.', 2),
    ('Will', 'Vega', 'WVega', 'wvega@gmail.com', '$2b$10$O4pyMK4HhF61dY4IVqhqiO0wFWR6L4l513K1p40.uw8Ima4GS/Mr6', 3),
    ('Emily', 'Smith', 'ESmith', 'esmith@yahoo.com', '$2b$10$0zrtNGOGJav4gc7ASaEAMO8HZRAL0jwjkgOqZ82ouZhHaJFsWYYaC', 1),
    ('Ryan', 'Jones', 'RJones', 'rjones@hotmail.com', '$2b$10$4D9Yl8VkwjI85QtDQx62Heqfe4jS2OCvducv0Lq.WR7F03d..K97m', 2);

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
