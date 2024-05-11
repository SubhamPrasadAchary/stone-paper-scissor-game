 let userScore=0;
 let compScore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userScorepara=document.querySelector("#user-Score");
 const compScorepara=document.querySelector("#comp-Score");


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
   const compChoice=compGame();
   console.log("userchoice- ",userChoice);
   console.log("compchoice- ",compChoice);

   if(userChoice === compChoice){
    drawGame();
   }
   else{
    let userWin=true;
    if(userChoice==="stone"){
        userWin=compChoice === "paper"? false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice === "scissor"? false:true;
    }
    else if(userChoice==="scissor"){
        userWin=compChoice === "stone"? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
};

const compGame = () => {
     const opt=["stone","paper","scissor"];
     const randIdx=Math.floor(Math.random()*3);
     return opt[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText="DRAW, PLAY AGAIN!";
};

showWinner =(userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you won");
        msg.innerText="YOU WIN! ";
        msg.style.color="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you lost");
        msg.innerText="YOU LOST! ";
        msg.style.color="red";
    }
};