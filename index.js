const supervillains = require('supervillains');

var randoSV = supervillains.random();
console.log(randoSV);

var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);

const lucky = require('lucky');

var luck = lucky.generateLuckyNumbers();
console.log(luck);

const funQuo = require('funny-quotes');

var funnyQuote = funQuo.getRandomQuote('en');
console.log(funnyQuote);

const funCom = require('funny-commit');

var funnyCommitMess = funCom.getCommitMessage();
console.log(funnyCommitMess);

const foodGenerator = require("@elisabethasbaek/disgusting-food-generator");

var grossFood = foodGenerator.generateDisgustingFood();
console.log(grossFood);

