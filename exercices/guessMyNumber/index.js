console.log("Donnez un chiffre entre 1 et 100");

const num = Math.floor(Math.random() * 101);
let attempts = 10;

    if (attempts > 0) {
    console.log(`Tentatives restantes : ${attempts}`);
  } 
    else {
    console.log(
      `Désolé, vous avez épuisé toutes vos tentatives. Le nombre caché était ${num}.`
    );
  }


process.stdin.on("data", (number) => {
//   console.log('random',num);


  if (Number(number.toString()) === num) {
    process.stdout.write("Vous avez trouvez le bon chiffre");
  } 
  else if (Number(number.toString()) < num) {
    process.stderr.write("Le nombre à deviner est plus grand");
  } 
  else if (Number(number.toString()) > num) {
    process.stderr.write("Le nombre à deviner est plus petit");
  } 

});











// Objectif
// Développer un jeu en ligne de commande où l'utilisateur doit deviner un nombre aléatoire compris entre 1 et 100.

// Instructions
// 1. Initialisation du Jeu

// •
// Le programme génère un nombre aléatoire entre 1 et 100 au début du jeu.

// •
// L'utilisateur a 10 tentatives pour deviner le nombre.

// 2. Logique du Jeu

// •
// L'utilisateur saisit un nombre dans la console pour faire une tentative de devinette.

// •
// Si le nombre saisi est plus petit que le nombre caché, affichez un message indiquant que le nombre à deviner est plus grand.

// •
// Si le nombre saisi est plus grand que le nombre caché, affichez un message indiquant que le nombre à deviner est plus petit.

// •
// Le jeu se termine lorsque l'utilisateur devine le nombre ou après 10 tentatives.

// 3. Gestion des Erreurs

// •
// Assurez-vous de gérer les erreurs de saisie, comme les entrées non-numériques ou les nombres hors de l'intervalle 1-100.

// •
// Affichez un message d'erreur approprié et ne comptez pas cela comme une tentative.

// 4. Fin du Jeu

// •
// Lorsque le jeu se termine, affichez un message indiquant si l'utilisateur a gagné ou perdu.

// •
// Affichez également le nombre caché si l'utilisateur ne le trouve pas.

// Conseils de Développement
// •
// Utilisez Math.random() pour générer le nombre aléatoire.

// •
// Utilisez des boucles et des conditions (if/else) pour implémenter la logique du jeu.

// •
// Gérez les exceptions pour les entrées invalides avec des structures try/catch ou des conditions.
