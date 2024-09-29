let str1 = "My name is rohit";
let str2 = "My name is virat";
let str3 = "My name is rahul";

let url1 = "image/Rohit-Sharma-7.webp";
let url2 = "image/virat.jpg";
let url3 = "image/rahul-dravid.jpg";


const person ={
    name: ["rohit","virat","rahul"],
    dept: ["batsman","batsman","coach"],
    review: [str1,str2,str3],
    image: [url1,url2,url3],
}


let right = document.querySelector("#right");
let left = document.querySelector("#left");
let button = document.querySelector(".btn button");
let name = document.querySelector(".name p");
let dept = document.querySelector(".dept p");
let review = document.querySelector(".review p");
let image = document.querySelector(".image");
let img = document.createElement('img');
image.append(img);

const intro = ()=>{
    let count = Math.floor(Math.random() * 3); 

    name.innerText = person.name[count];
    dept.innerText = person.dept[count];
    review.textContent = person.review[count];
     
    img.src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/Review%20carousel/${person.image[count]}`;
}

button.addEventListener("click",intro);

window.addEventListener("load",intro);

// document.addEventListener("DOMContentLoaded",intro);

// const myImg = (item)=>{
//     let menu = document.querySelector(`.${item}`);
    
//     let image = document.createElement("img");
//     // image.className = "img";
//     // console.log("shub");
    
//     // menu.appendChild(image);
    

//     console.log("shu");
// }

// const myMenu = (item)=>{
    
//     let menu = document.createElement("div");
//     menu.className = `${item} menu`;
//     contain.appendChild(menu);
//     console.log("xyz");
    
//     myImg(item);
    
    
// }
