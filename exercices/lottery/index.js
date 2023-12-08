const chalk = require('chalk');

const { loto, gagnant } = require('./module/lottery');

console.log(loto({ min: 20, max: 50, count: 5 }));

const players = ['Kali', 'Kim', 'Jules', 'Timo'];

console.log(chalk.green(`Le gagnant(e) est : ${gagnant(players)}`));



// Objectif
// Développer un programme en Node.js qui simule une loterie. Le programme comprendra un module lottery avec deux méthodes principales : loto et gagnant.

// Instructions
// Etape 1 : Création du Module Loterie
// 1.1 Module lottery

// •
// Créez un module nommé lottery.

// •
// Ce module doit avoir deux méthodes : loto et gagnant.

// 1.2 Méthode loto

// •
// La méthode loto doit générer des nombres entiers aléatoires.

// •
// Les nombres doivent être compris entre une fourchette définie en argument (minimum et maximum).

// •
// La méthode doit aussi prendre un argument définissant le nombre de chiffres à tirer.

// •
// Assurez-vous que les nombres tirés soient uniques et triés.

// 1.3 Méthode gagnant

// •
// La méthode gagnant prend en argument une liste de noms de participants.

// •
// Elle doit retourner un nom de participant choisi aléatoirement.

// 1.4 Test du Programme

// •
// Testez le module en affichant les résultats en console.

// •
// Utilisez les données de test suivantes :

// Données de Test pour loto:

// •
// Fourchette de nombres : 1 à 50

// •
// Nombre de chiffres à tirer : 5

// Données de Test pour gagnant:

// •
// Liste de participants : ["Alice", "Bob", "Charlie"]

// •
// Vérifiez que les méthodes fonctionnent comme prévu avec ces données.

// Etape 2 : Amélioration de l'Affichage
// 2.1 Recherche d'un Module NPM

// Trouvez un module sur NPM permettant de customiser l'affichage en console (par exemple, changer les couleurs).

// 2.2 Installation et Intégration

// •
// Installez le module trouvé dans votre projet.

// •
// Modifiez votre programme pour utiliser ce module afin d'améliorer l'affichage des résultats en console.