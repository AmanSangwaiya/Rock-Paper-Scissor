let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const getCompChoice = ()=>{
    const options = ["rock" , "paper" , "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
};

const drawGame = () => {
    console.log("Game is DRAW")
    msg.innerText = "GAME DRAW , Play Again 🙂";
    msg.style.backgroundColor = "blueviolet"
};

 const showWinner = (userWin , userChoice , compChoice)=>{
        if (userWin) {
            console.log("YOU WIN ");
            msg.innerText = `USER WIN!🤗 , Your ${userChoice} beats ${compChoice} `;
            msg.style.backgroundColor = "green";
            userScore++;
            userScorepara.innerText = userScore;
        }
        else{
        console.log("you lose");
        msg.innerText = `USER LOSE ☹️, ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
            compScorepara.innerText = compScore;
        }
    };

const playGame = (userChoice) =>{
    console.log("userChoice = " , userChoice );
    const compChoice = getCompChoice();
    console.log("compChoice =" , compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true ;
        if(userChoice === "rock"){
            //scisoors , paper
            userWin = compChoice ==="paper" ? false : true ;
        }
        else if (userChoice === "paper") {
            //scissors , rock 
            userWin = compChoice === "scissors" ? false : true ;
        } 

        else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
         showWinner(userWin , userChoice , compChoice);
    }

   
};

choices.forEach((choice)=> {
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked " , userChoice)
        playGame(userChoice);
    })
});