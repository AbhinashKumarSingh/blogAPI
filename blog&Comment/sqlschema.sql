CREATE DATABASE blogdatabase;
CREATE TABLE blog(
    id int NOT NULL AUTO_INCREMENT,
    blog varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE comments(
    id int NOT NULL AUTO_INCREMENT,
    idblog int NOT NULL,
    comments varchar(255)
    PRIMARY KEY (id)
);

