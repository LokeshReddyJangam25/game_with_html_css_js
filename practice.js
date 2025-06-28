"use strict";

// document.querySelector(".message").textContent = "Correct Number! 🎉";
// document.querySelector(".number").textContent = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const m = Number(document.querySelector(".guess").value);
  document.querySelector(".highscore").textContent = highscore;

  if (!m) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (m === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    score++;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".score").textContent = score;
  } else if (m > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "High Number!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (m < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Low Number!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//implementing again button

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
