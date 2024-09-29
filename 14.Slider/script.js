const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const heading = document.querySelectorAll(".heading");

// buttons.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         for(i=0;i<slides.length;i++){
//             if(slides[i].innerText==="1"){
//                 if(btn.innerText === "Next"){console.log("1");
//                     slides[i].classList.add("display");
//                     slides[i+1].classList.remove("display");
//                 }
//             }else if(slides[i].innerText === "Susan Doe"){
//                 if(btn.innerText === "Prev"){console.log("4");
//                     slides[i].classList.add("display");
//                     slides[i-1].classList.remove("display");
//                 }
//             }else if(slides[i].innerText === "2"||slides[i].innerText === "3"){
//                 if(btn.innerText === "Next"){console.log("next");
//                     slides[i].classList.add("display");
//                     slides[i+1].classList.remove("display");
//                 }else{console.log("prev");
//                     slides[i].classList.add("display");
//                     slides[i-1].classList.remove("display");
//                 }
//             }
//         }
//     })
// })

let count = 0;



buttons.forEach((btn)=>{
    // if(count = 0){console.log(count);
    //     buttons[1].classList.add("display");
    // }else if(count = 3){console.log(count);
    //     buttons[0].classList.add("display");
    // }else{console.log(count);
    //     buttons[0].classList.remove("display");
    //     buttons[1].classList.remove("display");
    // }
    btn.addEventListener("click",(e)=>{
        if(btn.innerText === "Next"){console.log(count);
            slides[count].classList.add("display");
            slides[count+1].classList.remove("display");
            count++;
            console.log(count);
            if(count === slides.length-1){
                // buttons[0].classList.remove("display");
                buttons[1].classList.add("display");
            }else{
                buttons[0].classList.remove("display");
                buttons[1].classList.remove("display");
            }
            
        }else{console.log(count);
            
            slides[count].classList.add("display");
            slides[count-1].classList.remove("display");
            count--;
            console.log(count);
            if(count === 0){
                // buttons[1].classList.remove("display");
                buttons[0].classList.add("display");
            }else{
                buttons[0].classList.remove("display");
                buttons[1].classList.remove("display");
            }
        }
        
        
    })
    
})

// window.addEventListener("DOMContentLoaded",()=>{})

    // if(count = 0){
    //     buttons[1].classList.remove("display");
    //     buttons[0].classList.add("display");
    // }else if(count = 3){
    //     buttons[0].classList.remove("display");
    //     buttons[1].classList.add("display");
    // }else{
    //     buttons[0].classList.remove("display");
    //     buttons[1].classList.remove("display");
    // }