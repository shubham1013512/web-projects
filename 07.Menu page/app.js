
let breakFast = {
    id : 0,
    category : "Breakfast",
    name : ["Aloo paratha","Idli Sambhar","Samosa","Omlette"],
    price : ["20 rs","25 rs", "15 rs", "10 rs"],
    image : ["paratha.jpg","idli.jpg","samosa.jpg","omlette.jpg"],
}

let lunch = {
    id : 1,
    category : "Lunch",
    name : ["Butter Paneer Masala","Butter Chicken","Pizza","Mutton Curry"],
    price :  ["150 rs","250 rs","375 rs","350 rs"],
    image : ["paneer.jpg","chicken.jpg","pizza.jpg","mutton.jpg"],
}

let shakes = {
    id : 2,
    category : "Shakes",
    name : ["Mango Shake","Strawberry Shake","Chocolate Shake","Banana Shake"],
    price : ["60 rs","75 rs","70 rs","55 rs"],
    image : ["mango.jpg","strawberry.jpg","chocolate.jpg","banana.jpg"]
}

let dinner = {
    id : 3,
    category : "Dinner",
    name : ["Ramen","Rajma Rice","Fish Curry","Masala Dosa"],
    price : ["350 rs","260 rs","360 rs","220 rs"],
    image : ["ramen.jpg","rajma.jpg","fish.jpg","dosa.jpg"],
}
let all = {
    all_name : [breakFast,lunch,shakes,dinner],
    name : ["Breakfast","Lunch","Shakes","Dinner"],
}

const contain = document.querySelector(".contain");
const display = ()=>{
    let displayMenu = all.all_name.map((item)=>{
      let str = "";
        for(i=0; i<item.name.length; i++){
            
            let str1 = `<div class="menu">
            <img class="img" src="images/${item.image[i]}" alt="${item.name[i]}">
            <div class="content">
                <div class="heading2">
                    <h4 class="name">${item.name[i]}</h4>
                    <p class="price">${item.price[i]}</p>
                </div>
                
                <div class="msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dolor ex veritatis deserunt modi nulla.</p>
                </div>
            </div>
        </div>`;
        str=str+str1;
        }

        return str;
        
})
    displayMenu = displayMenu.join("");
    contain.innerHTML = displayMenu; 
}

window.addEventListener("DOMContentLoaded",display);

const button = document.querySelectorAll(".btn");

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.innerText === "All"){
            display();
        }else{
            let displayMenu2 = all.all_name.map((item)=>{
                let str = "";
                if(btn.innerText === item.category ){
                    for(i=0; i<item.name.length; i++){
                        let item2 = all.all_name[item.id];
                        
                        let str1 = `<div class="menu">
            <img class="img" src="images/${item2.image[i]}" alt="${item2.name[i]}">
            <div class="content">
                <div class="heading2">
                    <h4 class="name">${item2.name[i]}</h4>
                    <p class="price">${item2.price[i]}</p>
                </div>
                
                <div class="msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dolor ex veritatis deserunt modi nulla.</p>
                </div>
            </div>
        </div>`;
        
        str = str + str1;
                    }
                    
                }
                return str;
            })
            displayMenu2 = displayMenu2.join("");
            contain.innerHTML = displayMenu2;
        }
    })
})