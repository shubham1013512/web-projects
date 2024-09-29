const menu = [
    {
        id :1,
        category : "breakfast",
        name : "Aloo paratha",
        price : 20,
        image : "paratha.jpg",
    },
    {
        id : 2,
        category : "breakfast",
        name : "Idli Sambhar",
        price : 25,
        image : "idli.jpg",
    },
    {
        id : 3,
        category : "breakfast",
        name : "Samosa",
        price : 15,
        image : "samosa.jpg",
    },
    {
        id : 4,
        category : "breakfast",
        name : "Omlette",
        price : 10,
        image : "omlette.jpg",
    },
    {
        id : 5,
        category : "lunch",
        name : "Butter Paneer Masala",
        price : 150,
        image : "paneer.jpg",
    },
    {
        id : 6,
        category : "lunch",
        name : "Butter Chicken",
        price : 250,
        image : "chicken.jpg",
    },
    {
        id : 7,
        category : "lunch",
        name : "Pizza",
        price : 375,
        image : "pizza.jpg",
    },
    {
        id : 8,
        category : "lunch",
        name : "Mutton Curry",
        price : 350,
        image : "mutton.jpg",
    },
    {
        id : 9,
        category : "shakes",
        name : "Mango Shake",
        price : 60,
        image : "mango.jpg",
    },
    {
        id : 10,
        category : "shakes",
        name : "Strawberry Shake",
        price : 75,
        image : "strawberry.jpg",
    },
    {
        id : 11,
        category : "shakes",
        name : "Chocolate Shake",
        price : 70,
        image : "chocolate.jpg",
    },
    {
        id : 12,
        category : "shakes",
        name : "Banana Shake",
        price : 55,
        image : "banana.jpg",
    },
    {
        id : 13,
        category : "dinner",
        name : "Ramen",
        price : 350,
        image : "ramen.jpg",
    },
    {
        id : 14,
        category : "dinner",
        name : "Rajma Rice",
        price : 260,
        image : "rajma.jpg",
    },
    {
        id : 15,
        category : "dinner",
        name : "Fish Curry",
        price : 360,
        image : "fish.jpg",
    },
    {
        id : 16,
        category : "dinner",
        name : "Masala Dosa",
        price : 220,
        image : "dosa.jpg",
    },
]

const contain = document.querySelector(".contain");

const option = document.querySelector(".option");

const displayMenuItems = (menuItems)=>{
    const displayMenu = menuItems.map((item)=>{
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
    }).join("");
    contain.innerHTML = displayMenu;
}

const displayMenuButtons =()=>{
    const categories = menu.reduce((values,item)=>{
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
        
    },["all"]);
    const btnChoise = categories.map((item)=>{
        return `<button class="btn" data-id=${item}>${item}</button>`;
    }).join("");
    option.innerHTML = btnChoise;
    let button = option.querySelectorAll(".btn");
    

    button.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItems)=>{
                if(menuItems.category === category ){
                    return menuItems;
                }
               
            })
            

            if(category === "all"){
                displayMenuItems(menu);
            }else{
                displayMenuItems(menuCategory);
            }
        })
    })
}


window.addEventListener("DOMContentLoaded",(e)=>{
    displayMenuItems(menu);
    displayMenuButtons();
});






