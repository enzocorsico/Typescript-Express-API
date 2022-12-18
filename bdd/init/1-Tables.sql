DROP DATABASE IF EXISTS typescript_express_api;
CREATE DATABASE typescript_express_api;
USE typescript_express_api;

-- 
-- Table Categorie
-- 
CREATE TABLE categorie (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) Engine=InnoDB;

-- 
-- Table Produit
-- 
CREATE TABLE produit (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    prix INT NOT NULL,
    categorie_id INT NOT NULL,
    PRIMARY KEY (id)
) Engine=InnoDB;

-- 
-- Relations
-- 
ALTER TABLE produit ADD FOREIGN KEY (categorie_id) REFERENCES categorie(id);