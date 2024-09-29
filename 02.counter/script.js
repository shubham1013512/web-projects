let msg = document.querySelector(".msg p");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let increase = document.querySelector("#increase");
let button = document.querySelectorAll(".btn");


// decrease.addEventListener("click", ()=>{
//     msg.innerText = Number(msg.innerText) -1;
// })

// reset.addEventListener("click", ()=>{
//     msg.innerText = 0;
// })

// increase.addEventListener("click", ()=>{
//     msg.innerText = Number(msg.innerText) +1;
// })

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.innerText === "DECREASE"){
            msg.innerText = Number(msg.innerText) -1;
        }else if(btn.innerText === "INCREASE"){
            msg.innerText = Number(msg.innerText) +1;
        }else{
            msg.innerText = 0;
        }
    })
})