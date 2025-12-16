let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndx = Math.floor(Math.random() * 3);
  return options[randomIndx];
};

const drawGame = () => {
  msg.innerText = "GAME DRAW, Play Again 🙂";
  msg.style.backgroundColor = "blueviolet";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `YOU WIN 🤗 — ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScorepara.innerText = userScore;
  } else {
    msg.innerText = `YOU LOSE ☹️ — ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScorepara.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
