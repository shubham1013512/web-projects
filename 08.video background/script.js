let video = document.querySelector("#myVideo");
let btn = document.querySelector(".switch-btn");

// const button = document.querySelector(".btn-container");
// const play = document.querySelector(".play");
// const pause = document.querySelector(".pause");




// button.addEventListener("click",()=>{
//     if(video.paused){
//         play.classList.add("btn");
//         pause.classList.remove("btn");
//         video.play();
        
//     }else{
//         play.classList.remove("btn");
//         pause.classList.add("btn");
//         video.pause();
        
//     }
// })

btn.addEventListener("click",()=>{
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    }
})