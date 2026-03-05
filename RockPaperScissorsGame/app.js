const choices = document.querySelectorAll(".playerChoice");
const aiChoices = document.querySelectorAll(".AiPic");
const resetBtn = document.querySelector("#reset");
const bigContainer = document.querySelector(".biggerContainer");
let winDiv = document.createElement("div");

let userChoice;
let winner;
let gameOver=false;

let r;
let aiChoice;


resetBtn.addEventListener("click", ()=>{
    winDiv.remove();
    resetBtn.before(bigContainer);
    userChoice=null;
    winner=null;
    gameOver=false;
    choices.forEach(choice => {
        // choice.classList.add("selected");
        choice.classList.add("hoverObject");
        choice.classList.remove("selected");
    });
    aiChoice.classList.remove("selected");
    aiChoice=null;
    resetBtn.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i> Reset Game';
})





function removeElements(){
    bigContainer.remove();
}

function endGame(){
    setTimeout(() => {
        console.log("2 seconds passed");
        removeElements();
        
        winDiv.innerHTML = `<h1> ${winner}!!\nYou picked ${userChoice} and the Ai picked ${aiChoice.innerText}`;
        document.querySelector("#reset").before(winDiv);
        resetBtn.innerHTML = "Play Again <i class='fa-solid fa-arrow-rotate-left'></i>";
    }, 2000);
}

function whoWon(){
    if(userChoice==aiChoice.innerText){
        winner = "It is a Draw";
    }
    else if(userChoice=="Rock"){
        if(aiChoice.innerText=="Paper"){winner="AI won"}
        else{winner="You won"}
    }
    else if(userChoice=="Paper"){
        if(aiChoice.innerText=="Rock"){winner="You won"}
        else{winner="AI won"}
    }
    else{
        if(aiChoice.innerText=="Rock"){winner="AI won"}
        else{winner="You won"}
    }

    endGame();
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        if(gameOver)return;

        r = Math.floor(Math.random() * 3);
        aiChoice = aiChoices[r];

        choices.forEach(c => c.classList.remove("hoverObject"));
        aiChoice.classList.add("selected");
        choice.classList.add("selected");
        gameOver=true;
        userChoice = choice.innerText;
        console.log("Users choice: ", userChoice);       
        whoWon();
    });
});
