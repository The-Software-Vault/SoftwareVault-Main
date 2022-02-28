CREATE DATABASE IF NOT EXISTS `swvault`;
USE `swvault`;

-- -----------------------------------------------------
-- Table `swvault`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`user` (
	`id` 	int PRIMARY KEY AUTO_INCREMENT,
	`userType_id`	boolean,
	`first_name`	varchar(100),
	`last_name` 	varchar(100),
	`email` 	varchar(100),
	`password` 	varchar(100)
);

-- -----------------------------------------------------
-- Table `swvault`.`doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`doctor` (
	`id` 	int,
	`specialty` 	varchar(100),
	FOREIGN KEY(`id`)
		REFERENCES user(`id`)
		ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `swvault`.`patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swvault`.`patient` (
	`id`	int,
	`sex` 	varchar(100),
	FOREIGN KEY(`id`)
		REFERENCES user(`id`)
		ON DELETE CASCADE
);

SELECT *
FROM `swvault`.`user` u
JOIN `swvault`.`doctor` d
ON u.`id` = d.`id`;
