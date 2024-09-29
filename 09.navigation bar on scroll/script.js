let navBar = document.querySelector("#nav");
let linkContainer = document.querySelector(".option");
let options = document.querySelectorAll(".scroll-link");
let btn = document.querySelector("#button");
let section = document.querySelectorAll(".section");

// if(window.scrollTo(0,60)){
//     console.log("abc");
//     navBar.classList.remove("nav-bar");
//     navBar.classList.add("nav-bar2");
// }

const fixNav = (opt)=>{
    document.addEventListener("scroll",()=>{
        if(scrollY>navBar.scrollHeight){
            
            navBar.classList.add("nav-bar2");
            opt.classList.add("scroll-link2");
        }else{
            navBar.classList.remove("nav-bar2");
            opt.classList.remove("scroll-link2");
        }
    })
}

options.forEach((opt)=>{
    fixNav(opt);

    // opt.addEventListener("click",()=>{
    //     if(opt.innerText === "Home"){
    //         console.log(opt.getAttribute("id"));
    //         window.scrollTo(0,0);
    //     }else if(opt.innerText === "About"){
    //         window.scrollTo(0,640);
    //     }else if(opt.innerText === "Services"){
    //         window.scrollTo(0,1030);
    //     }else if(opt.innerText === "Tours"){
    //         window.scrollTo(0,1430);
    //     }
    // })
    opt.addEventListener("click",(e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        // const containerHeight = linkContainer.getBoundingClientRect().height;
        // const fixNav = navBar.classList.contains("nav-bar2");
        let position = element.offsetTop-navHeight;

        window.scrollTo({
            left: 0,
            top: position,
          });
    })

})

btn.addEventListener("click",()=>{
    window.scrollTo(0,1430);
})