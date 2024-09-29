

let breakFast = {
    name : ["Aloo paratha","Idli Sambhar","Samosa","Omlette"],
    price : ["20 rs","25 rs", "15 rs", "10 rs"],
    image : ["paratha.jpg","idli.jpg","samosa.jpg","omlette.jpg"],
}

let lunch = {
    name : ["Butter Paneer Masala","Butter Chicken","Pizza","Mutton Curry"],
    price :  ["150 rs","250 rs","375 rs","350 rs"],
    image : ["paneer.jpg","chicken.jpg","pizza.jpg","mutton.jpg"],
}

let shakes = {
    name : ["Mango Shake","Strawberry Shake","Chocolate Shake","Banana Shake"],
    price : ["60 rs","75 rs","70 rs","55 rs"],
    image : ["mango.jpg","strawberry.jpg","chocolate.jpg","banana.jpg"]
}

let dinner = {
    name : ["Ramen","Rajma Rice","Fish Curry","Masala Dosa"],
    price : ["350 rs","260 rs","360 rs","220 rs"],
    image : ["ramen.jpg","rajma.jpg","fish.jpg","dosa.jpg"],
}
let all = {
    all_name : [breakFast,lunch,shakes,dinner],
    name : ["Breakfast","Lunch","Shakes","Dinner"],
}

let contain = document.querySelector(".contain");
let button = document.querySelectorAll(".btn");
// let menu = document.querySelector(".menu");


// button.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         for(i=0; i<contain.children.length; i++){
//             if (btn.innerText === "Breakfast"){
//                 contain.children[i].children[1].children[0].children[0].innerHTML = breakFast.name[i];
//                 contain.children[i].children[1].children[0].children[1].innerHTML = breakFast.price[i];
//                 contain.children[i].children[0].children[0].src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${breakFast.image[i]}` ;

//             }else if(btn.innerText === "Lunch"){
//                 contain.children[i].children[1].children[0].children[0].innerHTML = lunch.name[i];
//                 contain.children[i].children[1].children[0].children[1].innerHTML = lunch.price[i];
//                 contain.children[i].children[0].children[0].src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${lunch.image[i]}` ;
//             }else if(btn.innerText === "Shakes"){
//                 contain.children[i].children[1].children[0].children[0].innerHTML = shakes.name[i];
//                 contain.children[i].children[1].children[0].children[1].innerHTML = shakes.price[i];
//                 contain.children[i].children[0].children[0].src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${shakes.image[i]}` ;
//             }else if(btn.innerText === "Dinner"){
//                 contain.children[i].children[1].children[0].children[0].innerHTML = dinner.name[i];
//                 contain.children[i].children[1].children[0].children[1].innerHTML = dinner.price[i];
//                 contain.children[i].children[0].children[0].src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${dinner.image[i]}` ;
//             }else{
//                 let num = Math.floor(Math.random()*all.all_name[i].name.length);
//                 contain.children[i].children[1].children[0].children[0].innerHTML = all.all_name[i].name[num];
//                 contain.children[i].children[1].children[0].children[1].innerHTML = all.all_name[i].price[num];
//                 contain.children[i].children[0].children[0].src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${all.all_name[i].image[num]}` ;
//             }
//         }
//     })
// })


// document.addEventListener("DOMContentLoaded",()=>{
//     for(i=0; i<contain.children.length; i++){
//         let num = Math.floor(Math.random()*all.all_name[i].name.length);
//                 contain.children[i].children[1].children[0].children[0].innerHTML = all.all_name[i].name[num];
//                 contain.children[i].children[1].children[0].children[1].innerHTML = all.all_name[i].price[num];
//                 contain.children[i].children[0].children[0].src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${all.all_name[i].image[num]}` ;
//     }
// })

// const myFunction = (numb)=>{
//     for(i=0; i<contain.children.length; i++)
//     {contain.children[i].children[1].children[0].children[0].innerHTML = all.all_name[numb].name[i];
//     contain.children[i].children[1].children[0].children[1].innerHTML = all.all_name[numb].price[i];
//     contain.children[i].children[0].children[0].src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${all.all_name[numb].image[i]}` ;}
// }


// button.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         for(i=0; i<contain.children.length; i++){
//             if (btn.innerText === all.name[i]){
//                 myFunction(all.name.indexOf(all.name[i]));
//             }else{
//                 let num = Math.floor(Math.random()*all.all_name[i].name.length);
//                 contain.children[i].children[1].children[0].children[0].innerHTML = all.all_name[i].name[num];
//                 contain.children[i].children[1].children[0].children[1].innerHTML = all.all_name[i].price[num];
//                 contain.children[i].children[0].children[0].src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${all.all_name[i].image[num]}` ;
//             }
//         }
//     })
// })





const myImg = (item,imagee)=>{
 
    let menu = document.getElementById(item);
    let image = document.createElement("img");
    image.className = "img";
    image.src = `file:///C:/Users/kshub/OneDrive/Desktop/projects/07.Menu%20page/images/${imagee}`;
    menu.appendChild(image);
}

const myName = (namee,names)=>{
    let heading2 = document.getElementById(namee);
    let name = document.createElement("h4");
    name.className = "name";
    name.innerText = names;
    heading2.appendChild(name);
}
const myPrice =(namee,pricee)=>{
    let heading2 = document.getElementById(namee);
    let price = document.createElement("p");
    price.className = "price";
    price.innerText = pricee;
    heading2.appendChild(price);
}

const myHeading =(item,namee,pricee,names)=>{
    let content = document.getElementById(item);
    let heading2 = document.createElement("div");
    heading2.className = "heading2";
    heading2.id = `${namee}`;
    content.appendChild(heading2);
    myName(namee,names);
    myPrice(namee,pricee);

}
const myMsg =(item)=>{
    let content = document.getElementById(item);
    let msg = document.createElement("div");
    msg.className = "msg";
    content.appendChild(msg);
}

const myContent =(item1,item2,namee,pricee,names)=>{
    let menu = document.getElementById(item1);
    let content = document.createElement("div");
    content.className = "content";
    content.id = `${item2}`;
    menu.appendChild(content);
    myHeading(item2,namee,pricee,names);
    myMsg(item2);

}

const myMenu = (item1,imagee,item2,namee,pricee,names)=>{
    
    let menu = document.createElement("div");
    menu.className = "menu none";
    menu.id = `${item1}`;
    
    contain.appendChild(menu);
     
    myImg(item1,imagee);
    myContent(item1,item2,namee,pricee,names);
    
    
}
const removeMenu =(item)=>{
    let menu = document.getElementById(item);
    menu.classList.remove("none");
}
const deleteMenu =()=>{
    
        for(j=0;j<100;j++){
            for(i=0; i<contain.children.length;i++){
                contain.removeChild(contain.children[0]);
            }
        }
    
    
}
let count = 0;

const reload=(count)=>{
    
        for(j=0; j<all.all_name.length; j++){
            for(i=0 ; i<all.all_name[j].name.length ; i++){
                let namee = `${all.all_name[j].name[i]}.x${count}`;
                let imagee = all.all_name[j].image[i];
                let item2 = `${all.all_name[j].name[i]}.y${count}`;
                let item1 = `${all.all_name[j].name[i]}.z${count}`;
                let pricee = all.all_name[j].price[i];
                let names = all.all_name[j].name[i];
                myMenu(item1,imagee,item2,namee,pricee,names);
                removeMenu(item1);
                    
               }
        }
   
}

let rightMenu=(count,btn)=>{
    for(j=0; j<all.all_name.length; j++){
        for(i=0 ; i<all.all_name[j].name.length ; i++){
            let namee = `${all.all_name[j].name[i]}.x${count}`;
                let imagee = all.all_name[j].image[i];
                let item2 = `${all.all_name[j].name[i]}.y${count}`;
                let item1 = `${all.all_name[j].name[i]}.z${count}`;
                let pricee = all.all_name[j].price[i];
                let names = all.all_name[j].name[i];
                myMenu(item1,imagee,item2,namee,pricee,names);
           }
    }
    if(btn.innerText === "All"){console.log("x1");
        
       
        for(j=0; j<all.all_name.length; j++){
            for(i=0; i<all.all_name[j].name.length; i++){
                let item1 = `${all.all_name[j].name[i]}.z${count}`;
                removeMenu(item1);
                
            }
        }
    }else{console.log("x2");
        for(j=0; j<all.all_name.length; j++){
            if (btn.innerText === all.name[j]){
                for(i=0; i<all.all_name[j].name.length; i++){
                    let item1 = `${all.all_name[j].name[i]}.z${count}`;
                    removeMenu(item1);
                
                }
            }
        }
    }
}



 button.forEach((btn)=>{
        console.log("abc");
        btn.addEventListener("click",()=>{
            if(btn.innerText === "All"){
                    deleteMenu();
                    reload(count);
                   
                }else{
                    deleteMenu();
                    rightMenu(count,btn);
                }
            
        
           count++;     
            
        })
        
    })

document.addEventListener("DOMContentLoaded",()=>{
    reload(0);
    count = 1;
})

