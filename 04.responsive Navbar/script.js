let bar = document.querySelector("#bar");
let hiddenBar = document.querySelector(".link");

bar.addEventListener("click",()=>{
    hiddenBar.classList.toggle("link");
    
});