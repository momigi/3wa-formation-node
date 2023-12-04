const chalk = require('chalk');

const { loto, gagnant } = require('./module/lottery');

console.log(loto({ min: 20, max: 50, count: 5 }));

const players = ['Kali', 'Kim', 'Jules', 'Timo'];

console.log(chalk.green(`Le gagnant(e) est : ${gagnant(players)}`));
