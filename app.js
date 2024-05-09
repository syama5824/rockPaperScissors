//to trcak user score
let userscore=0;
//to track computer score
let sysscore=0;

let resetBtn=document.querySelector("#reset-btn");

//acces choices
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara=document.querySelector("#user-score");
const sysscorePara=document.querySelector("#sys-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log(choice);
        //console.log("choice was clicked is",userChoice);
        playGame(userChoice);
    });
});

const genSysChoice=()=>{
    //rock paper scissors
    const options=["rock","scissors","paper"];
    //[] for array {} for funcs
    const index = Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = () =>{
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#045b91";    
}

const showWinner= (userWin,userChoice,compChoice) =>{
    if(userWin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`You won😊 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#780000";
    }else{
        sysscore++;
        sysscorePara.innerText=sysscore;
        msg.innerText=`You lost🙃 ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="#c1121f";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice is ",userChoice);
    //generate computer choice 
    const compChoice= genSysChoice();
    console.log("system choice is ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else if(userChoice==="scissors"){
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const resetGame =()=>{
    userscore=0;
    sysscore=0;
    userscorePara.innerText=userscore;
    sysscorePara.innerText=sysscore;
    msg.innerText=`Play your move`;
    msg.style.backgroundColor="#045b91";
};

resetBtn.addEventListener("click",resetGame);