var readlineSync = require('readline-sync');
var chalk = require('chalk');
var log = console.log;
var right = chalk.green;
var wrong = chalk.red;
var info = chalk.blue;
var score = 0;

var userName = readlineSync.question("what is Your name? \n");
log(info("welcome " + userName));

var questionArray = [
    {
    question: "Who is the Father of our Nation?",
    options: ["Jawaharlal Nehru", "Dr.B.R.Ambedkar", "Mahatma Gandhi","Charles Babbage"],
    answer: 2
  },
    {
    question: "Gir National Park in Gujarat is famous for?",
    options: ["Deer", "Tiger", "Camel", "Lion"],
    answer: 3
  },
     {
    question: "Fastest animal on earth is?",
    options: ["Deer", "Lion", "Cheetah", "Rabbit"],
    answer: 2
  },
  {
    question: " A figure with 8 sides is called?",
    options: ["square", "Octagon", "Hexagon", "Petagon"],
    answer: 1
  },
    {
    question: " What colour symbolises peace?",
    options: ["Black", "White", "Red", "Blue"],
    answer: 1
  },
  {
    question: " How many players are there in a cricket team ?",
    options: ["11", "12", "15", "9"],
    answer: 0
  },
  {
    question: "What is the state flower of Haryana?",
    options: ["Lotus", "Rhododendron", "Golden Shower", "Not declared"],
    answer: 0
  },
  {
    question: "In what state is Elephant Falls located?",
    options: ["Mizoram", "Orissa", "Manipur", "Meghalaya"],
    answer: 3
  },
  {
    question: "Name of the first university of India?",
    options: [" Nalanda University", " Taxshila University", " Jawahar University", " Dronacharya University"],
    answer: 0
  },
  {
    question: "Largest desert in the world is?",
    options: ["Sasan desert", "Kutch desert", "Karnataka desert", "Sahara desert"],
    answer: 0
  }
];

function play(arr) {
  var userAns = readlineSync.keyInSelect(arr.options, arr.question);
  if (userAns !== -1) {
    log("your answer " + arr.options[userAns])
  }
  if (userAns == arr.answer) {
    log(right("you are right"));
    score = score + 1;
  } else if (userAns == -1) {
    log(info("you skip this question"));
  } else {
    log(wrong("you are wrong"));
  }
  return score;
}
for (let i = 0; i < questionArray.length; i++) {
  play(questionArray[i]);
}
log(info("your score is : " + score));
