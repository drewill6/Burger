CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers
(
id INTEGER (10) AUTO_INCREMENT NOT NULL,
burger_name varchar(100) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);