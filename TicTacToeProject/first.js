const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#resetButton");
const container = document.querySelector(".container");

let ele = document.createElement("div");
ele.style.color = "orange";
ele.innerHTML = `<h1>Player- has won!!!!!</h1>`;
ele.style.visibility = "hidden";
container.append(ele);

let turn = "X";
let pressed=0;
let completed=false;

function display(d){
    if(pressed===9 && !completed){
        ele.innerHTML = `<h1>Its a Tie!!!</h1>`;
    }else{
        ele.innerHTML = `<h1>Player-${d} has won!!!!!</h1>`;
        boxes.forEach(button => {
            button.disabled = true;
        });
    }
    ele.style.visibility = "visible";
}

function checkWin(){
    let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i of wins){
        if(boxes[i[0]].innerText!=="" && boxes[i[0]].innerText===boxes[i[1]].innerText && boxes[i[1]].innerText===boxes[i[2]].innerText){
            boxes[i[0]].style.color = "red";
            boxes[i[1]].style.color = "red";
            boxes[i[2]].style.color = "red";
            completed=true;
            display(boxes[i[0]].innerText);
            return;
        }
    }

    if(pressed===9)
        display();
    return false;
}

reset.addEventListener("click", ()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled = false;
        box.style.color = "grey";
    }
    ele.style.visibility = "hidden";
    pressed=0;
    completed=false;
});

boxes.forEach(button => {
    button.addEventListener("click", ()=>{
        button.innerText = turn;
        turn = turn==="X"?"O":"X";
        button.disabled = true;
        pressed++;
        checkWin();
    });
});