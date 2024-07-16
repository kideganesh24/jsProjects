let readLineSync = require("readline-sync");
let kuler = require("kuler");

let score = 0;
let userName = readLineSync.question("What's your name? ");

console.log(kuler(`Hello ${userName}! Welcome to QuizApp`, "#dc2626"));
// Creating Dataset
const database = {
  data: [
    {
      question: `let a={}, b={}
console.log(a==b)
console.log(a===b)`,
      options: {
        a: "true false",
        b: "false true",
        c: "true true",
        d: "false false",
      },
      correctAnswer: "d",
    },
    {
      question: `Object.assign(target,source)
      creates which type of copy?`,
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: `Is method chaining possible for ForEach`,
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 1,
    },
    {
      name: "Prakash",
      score: 2,
    },
    {
      name: "Rohit",
      score: 2,
    },
  ],
};

function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("You are right!", "#059669"));
    score++;
  } else {
    console.log(kuler("Incorrect", "#b91c1c"));
    console.log(kuler(`Correct answer is ${correctAnswer}`, "#1d4ed8"));
  }
}

function showQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} ` + database.data[i].question + "\n");
    for (let key in database.data[i].options) {
      console.log(`${key}` + `. ` + database.data[i].options[key]);
    }
    let userAnswer = readLineSync
      .question("Enter your answer(a/b/c/d)- ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function highScorers(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("New Leader Board is  - \n", "#fde047"));
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} - ${leader.score}`, "#9333ea"));
  }
}

showQuestionAndOptions(database);
console.log("\nYour score is " + score + "\n");
highScorers(leaderBoard);
