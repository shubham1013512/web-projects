let bar = document.querySelector(".navbar i");
let sideBar = document.querySelector(".sideBar");
let cross = document.querySelector(".sideHeading i");

bar.addEventListener("click", ()=>{
    sideBar.classList.toggle("bar");
})

cross.addEventListener("click",()=>{
    // sideBar.classList.remove("sideBar");
    sideBar.classList.add("bar");
})