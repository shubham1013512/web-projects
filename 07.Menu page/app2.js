const menu = [
    {
        id :1,
        category : "Breakfast",
        name : "Aloo paratha",
        price : 20,
        image : "paratha.jpg",
    },
    {
        id : 2,
        category : "Breakfast",
        name : "Idli Sambhar",
        price : 25,
        image : "idli.jpg",
    },
    {
        id : 3,
        category : "Breakfast",
        name : "Samosa",
        price : 15,
        image : "samosa.jpg",
    },
    {
        id : 4,
        category : "Breakfast",
        name : "Omlette",
        price : 10,
        image : "omlette.jpg",
    },
    {
        id : 5,
        category : "Lunch",
        name : "Butter Paneer Masala",
        price : 150,
        image : "paneer.jpg",
    },
    {
        id : 6,
        category : "Lunch",
        name : "Butter Chicken",
        price : 250,
        image : "chicken.jpg",
    },
    {
        id : 7,
        category : "Lunch",
        name : "Pizza",
        price : 375,
        image : "pizza.jpg",
    },
    {
        id : 8,
        category : "Lunch",
        name : "Mutton Curry",
        price : 350,
        image : "mutton.jpg",
    },
    {
        id : 9,
        category : "Shakes",
        name : "Mango Shake",
        price : 60,
        image : "mango.jpg",
    },
    {
        id : 10,
        category : "Shakes",
        name : "Strawberry Shake",
        price : 75,
        image : "strawberry.jpg",
    },
    {
        id : 11,
        category : "Shakes",
        name : "Chocolate Shake",
        price : 70,
        image : "chocolate.jpg",
    },
    {
        id : 12,
        category : "Shakes",
        name : "Banana Shake",
        price : 55,
        image : "banana.jpg",
    },
    {
        id : 13,
        category : "Dinner",
        name : "Ramen",
        price : 350,
        image : "ramen.jpg",
    },
    {
        id : 14,
        category : "Dinner",
        name : "Rajma Rice",
        price : 260,
        image : "rajma.jpg",
    },
    {
        id : 15,
        category : "Dinner",
        name : "Fish Curry",
        price : 360,
        image : "fish.jpg",
    },
    {
        id : 16,
        category : "Dinner",
        name : "Masala Dosa",
        price : 220,
        image : "dosa.jpg",
    },
]

const contain = document.querySelector(".contain");

const reloadMenu = ()=>{
    let displayMenu = menu.map((item)=>{
        return `<div class="menu">
                <img class="img" src="images/${item.image}" alt="${item.name}">
                <div class="content">
                    <div class="heading2">
                        <h4 class="name">${item.name}</h4>
                        <p class="price">${item.price} Rs</p>
                    </div>
                    
                    <div class="msg">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dolor ex veritatis deserunt modi nulla.</p>
                    </div>
                </div>
            </div>`;
    })
    displayMenu = displayMenu.join("");
    contain.innerHTML = displayMenu;
}


window.addEventListener("DOMContentLoaded", reloadMenu);

const button = document.querySelectorAll(".btn");

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.innerText === "All"){
            reloadMenu();
        }else{
            let display = menu.map((item)=>{
                if(btn.innerText === item.category){
                    return `<div class="menu">
                <img class="img" src="images/${item.image}" alt="${item.name}">
                <div class="content">
                    <div class="heading2">
                        <h4 class="name">${item.name}</h4>
                        <p class="price">${item.price} Rs</p>
                    </div>
                    
                    <div class="msg">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dolor ex veritatis deserunt modi nulla.</p>
                    </div>
                </div>
            </div>`;
                }
            })
            display = display.join("");
            contain.innerHTML = display;
        }
    })
})