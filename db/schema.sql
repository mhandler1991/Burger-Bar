### Schema

-- Create Database
CREATE DATABASE burgers_db

-- Use Database
USE burgers_db

-- Create Table
CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
