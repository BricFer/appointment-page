CREATE SCHEMA IF NOT EXISTS appointments DEFAULT CHARACTER SET utf8 ;

USE appointments;

CREATE TABLE IF NOT EXISTS clients (
id INT AUTO_INCREMENT,
name VARCHAR(45) NOT NULL,
last_name VARCHAR(155) NOT NULL,
phone INT NOT NULL,
email VARCHAR(155),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS appointment (
id INT AUTO_INCREMENT,
time_slot TIME NOT NULL,
date_slot DATE NOT NULL,
id_client INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(id_client)
REFERENCES clients (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS locations (
id INT AUTO_INCREMENT,
id_appointment INT NOT NULL,
location ENUM('onsite', 'other') NOT NULL,
comments VARCHAR(255),
PRIMARY KEY (id),
FOREIGN KEY(id_appointment)
REFERENCES appointment (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
);