let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
//rock Paper Scissors
const options = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random() * 3 );
return options[randIdx]; 
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game Draw. Play Again";
}

const showWinner=(userWin, userChoice, compChoice ) => {
    if(userWin)
    {
        userscore++;
        userScorePara.innerText  = userscore;
        msg.innerText =`You Win! ${userChoice} beats ${compChoice} `; 
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText=`You Loose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame =  (userChoice) =>{
console.log("User Choice = ",userChoice);
 //Generate Computer Choice
 const compChoice = genCompChoice();
 console.log("Comp Choice = ",compChoice);

 if(userChoice === compChoice)
 {
    drawGame();
 }
 else{
    let userWin = true;
    if(userChoice ==="rock")
     {
        //Scissor // paper
        userWin = compChoice === "paper" ? false : true;

    }   
    else if(userChoice === "paper"){
        //rock , scissor
       userWin = compChoice ==="scissors" ? false:true;       
    }
    else{
        userWin = compChoice ==="rock" ? false: true;
    }
    showWinner(userWin, userChoice, compChoice); 
        

 }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
    console.log("choice was my",userChoice);
    playGame(userChoice);
    });
});