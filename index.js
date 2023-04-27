console.log('The quote of the day is here lets read it before traveling to the villain arena :D ');
const funnyQuote = require('funny-quotes');

console.log(funnyQuote);
console.log('');
console.log('');


const supervillains = require('supervillains');

var randoSV = supervillains.random();
console.log('Your supervillain name is: ');
console.log('');
console.log(randoSV);
console.log('');
console.log('');

var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log('Your villain 1-liner is: ');
console.log(getRandomJoke);
console.log('');
console.log('');

console.log('Oh no! You have activated a trap card! Gordon Ransay punishes villains for crimes against food your sentence is to prepare a meal with these gross food combos or death...');

console.log('');
console.log('');
const foodGenerator = require("@elisabethasbaek/disgusting-food-generator");

var grossFood = foodGenerator;
console.log(grossFood);
console.log('');
console.log('');


console.log('But wait... whats that in the distance?  A wild Moo Moo wants to give you some advice on winning Mr. Ramsay over :)');
const cowsay = require('cowsay');

var speak = cowsay.say({
    text: 'I smell like beeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef!',
});

console.log(speak);
console.log('');
console.log('');

const funCom = require('funny-commit');
console.log('Hope that helped, but remember when you are done you must go up to Gordon and say this to commit your changes... ');
console.log('');
console.log('');
var funnyCom = funCom.funnyCommit();
console.log(funnyCom);
console.log('');
console.log('');

console.log('Here is your likelyhood of surviviing Ramsays punishment...');
console.log('');
console.log('');

const lucky = require('lucky');

const percentage = lucky.percentage();
console.log(percentage);



/*
These didn't work but I might come back to them later to figure out
I think they have compatibility issues or maybe i'm not using them right?

const cliSpinners = require('cli-spinners');

const spinner = ora({
  text: 'Loading',
  spinner: cliSpinners.dots,
}).start();

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loaded';
  spinner.stop();
}, 2000);

const chalk = require('chalk');

var chalky = chalk.blue("Testing this...");
console.log(chalky);

const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';
  
  console.log(spinner);
}, 2000);
*/
