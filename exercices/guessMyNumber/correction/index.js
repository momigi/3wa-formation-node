console.log('Devine mon nombre secret ? saissir un nombre entre 1 et 100 🔐');

const secretNumber = Math.floor(Math.random() * 101);
console.log(secretNumber);
// TENTATIVE
let attempts = 10;

process.stdin.on('data', (chunk) => {
  const guessNumber = Number(chunk.toString());

  if (attempts === 0) {
    process.stdout.write(
      `GAME OVER 🚨🚨🚨, le nombre secret était ${secretNumber}\n`
    );
        /* 
    `process.exit` permet d'arrêter le programme (serveur node)
    */
    process.exit();
  } else if (guessNumber > 100) {
    attempts--;
    process.stdout.write(
      `Le nombre saisi est supérieur à 100. Merci de saissir un nombre entre 1 et 100, vie restant ${attempts} 💥\n`
    );
  } else if (guessNumber > secretNumber) {
    attempts--;
    process.stdout.write(
      `Le nombre secret est plus petit, vie restant ${attempts} 💥\n`
    );
  } else if (guessNumber < secretNumber) {
    attempts--;
    process.stdout.write(
      `Le nombre secret est plus grand, vie restant ${attempts} 💥\n`
    );
  } else {
    process.stdout.write('Félicitation vous avez trouvé le nombre secret 🎉');
    process.exit()
  }
});
