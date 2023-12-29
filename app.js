let userScore=0;
let compScore=0;
const msg= document.querySelector("#msg")

const choices=document.querySelectorAll(".choice");

//randomly strings cant be generated but whole numbers can be generated which can act as indexesn of the array hence store the choices in the array
const genCompChoices=()=>{
    const options=["rock","paper","scissors"];
    const randIx=Math.floor(Math.random()*3);
    return options[randIx];
    //any number less than 1 and greater than 0 if multiplied by 3 lies between 0 to 2(if decimal is ignored using math.floor())
    //any number less than 1 and greater than 0 if multiplied by 10 lies between 0 to 9(if decimal is ignored using math.floor())
    //so basically multiply math.random() with any number and the number will lie between 0 and the number-1
}

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    msg.innerText="Game Draw";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //generate computer choice
    const compChoice=genCompChoices();

    if(userChoice==compChoice){
        //draw game
        drawGame();
    }

    else{
        let userWin=true;
        if(userChoice==="rock"){
            //computer generates scissors or paper
            userWin= compChoice==="paper" ? false: true;
        }

        else if(userChoice==="paper"){
            //computer generates scissors or rock
            userWin= compChoice==="scissors" ? false : true;
        }

        else{
            //computer generates rock or paper
            userWin= compChoice=== "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})