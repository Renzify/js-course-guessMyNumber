"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //No Input
  if (!guess) {
    displayMessage(`⛔ No Number!`);
    // Player Win
  } else if (guess === secretNumber && guess <= 20) {
    displayMessage(`✅ Correct`);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // Too High or Too Low
  } else if ((guess > secretNumber || guess < secretNumber) && guess <= 20) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? "↗ Too High" : "↘ Too Low");
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(`💥 You Lost!`);
      document.querySelector(".score").textContent = 0;
    }
  } else {
    displayMessage(`🙏 Enter only 1-20`);
    /* if (score > 0) {
      document.querySelector(".message").textContent = `🙏 Enter only 1-20`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `💥 You Lost!`;
    } */
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start guessing...`);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
