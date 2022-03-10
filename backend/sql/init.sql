-- -----------------------------------------------------
-- Initial database rules (init.sql)
-- -----------------------------------------------------

-- Create user called `admin` with password `XXXXXX`
CREATE USER 'admin'@'%' IDENTIFIED BY 'Password1!';

-- Give access to admin on db
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
GRANT ALL PRIVILEGES ON `swvault` TO 'admin'@'%';

-- Set password method to native password for mysql workbench access (mysql 8 issue)
ALTER USER 'admin'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Password1!';

-- Flush them privileges
FLUSH PRIVILEGES;
