USE typescript_express_api;

-- 
-- Données de la table Categorie
-- 
INSERT INTO categorie (id, nom) VALUES
(1, 'Ordinateur'),
(2, 'Imprimante'),
(3, 'Téléphone'),
(4, 'Tablette'),
(5, 'Accessoire');

-- 
-- Données de la table Produit
-- 
INSERT INTO produit (id, nom, description, prix, categorie_id) VALUES
(1, 'Ordinateur portable', 'Ordinateur portable 15 pouces', 500, 1),
(2, 'Ordinateur portable', 'Ordinateur portable 17 pouces', 700, 1),
(3, 'Imprimante', 'Imprimante laser couleur', 150, 2),
(4, 'Imprimante', 'Imprimante jet d''encre', 80, 2),
(5, 'Téléphone', 'Téléphone portable', 200, 3),
(6, 'Téléphone', 'Téléphone fixe', 70, 3),
(7, 'Tablette', 'Tablette tactile', 180, 4),
(8, 'Tablette', 'Tablette tactile', 250, 4),
(9, 'Souris', 'Souris sans fil', 30, 5),
(10, 'Clavier', 'Clavier sans fil', 20, 5);