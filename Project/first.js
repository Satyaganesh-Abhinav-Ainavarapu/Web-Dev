let btn = document.createElement("button");
btn.innerText = "Dark Mode";
document.body.append(btn);
let mode="dark";


btn.addEventListener("click", (evt)=>{
    if(mode === "dark"){
        document.body.style.backgroundColor = "green";
        btn.innerText = "Green Mode";
        mode = "green";
    } else {
        mode = "dark";
        document.body.style.backgroundColor = "black";
        btn.innerText = "Dark Mode";
    }
});

