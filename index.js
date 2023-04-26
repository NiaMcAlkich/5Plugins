const supervillains = require('supervillains');

var randoSV = supervillains.random();
console.log(randoSV);

var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);

const funQuo = require('funny-quotes');

console.log(funQuo);

const funCom = require('funny-commit');

var funnyCom = funCom.funnyCommit();
console.log(funnyCom);

const cowsay = require('cowsay');

var speak = cowsay.say({
    text: 'I smell like beeeeefffff!',
});

console.log(speak);

const foodGenerator = require("@elisabethasbaek/disgusting-food-generator");

var grossFood = foodGenerator;
console.log(grossFood);


const lucky = require('lucky');

const percentage = lucky.percentage();
console.log(`Your luck percentage is ${percentage}%!`);


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
