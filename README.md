# SilverSmoke

L'application consiste à pouvoir gérer un crud sur un Produit
il contient un id, un titre, un prix, et le nombre de produit qu'il reste, et une propriété isVisible.
Qui servira à afficher seulement les produits qui ont le champs isVisible à 1. 
Le champs passe à 0 lorsqu'il est supprimé via l'IHM, grâce à ça nous pourrons garder dans la base de donnée tous les produits même ceux qui sont supprimés ou bien vendu.

Le back-end est en symfony 5.9.1 PHP 8.1.
Le front-end est en Angular 9
La base de donnée est en MySql
