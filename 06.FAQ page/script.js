let button = document.querySelectorAll("button");
let answers = document.querySelector(".answer");
let ques = document.querySelector(".questions");
let contain = document.querySelector(".containt");



// button.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//        console.log("a");
//        answers.classList.toggle("answer");
//     })
// });

let count = 0;

// button.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         console.log("a");
//         if(btn.innerText === "+"){
//             ques.children[2].classList.toggle("answer");
//             btn.innerText = "-";
//             count++;
//         }else if(btn.innerText === "-"){
//             ques.children[2].classList.add("answer");
//             btn.innerText = "+";
//         }
//     })
// })

// button.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         ques.children[2].classList.toggle("answer");
//     })
// })



// button.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         if(btn === button[0]){
//             contain.children[0].children[2].classList.toggle("answer");
//         }else if(btn === button[1]){
//             contain.children[1].children[2].classList.toggle("answer");
//         }else{
//             contain.children[2].children[2].classList.toggle("answer");
//         }
//     })
// })

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        for(i=0;i<contain.children.length;i++){
            if(btn === button[i]){
                if(btn.innerText === "+"){
                    contain.children[i].children[2].classList.toggle("answer");
                    button[i].innerText = "-";
                }else{
                    contain.children[i].children[2].classList.add("answer");
                    button[i].innerText = "+";
                }
                
            }else{
                contain.children[i].children[2].classList.add("answer");
                button[i].innerText = "+";
            }
        }
    })
})