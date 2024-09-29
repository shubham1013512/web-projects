let tabs = document.querySelectorAll(".tab");
let content = document.querySelector(".content");
let msgs = document.querySelectorAll(".msg");



content.addEventListener("click",(e)=>{
    const id = e.target.dataset.id;

    if(id){
        tabs.forEach((tab)=>{ 
            tab.classList.remove("tab2");
        })
    }

    e.target.classList.add("tab2");
    

    msgs.forEach((msg)=>{
        if(e.target.innerText === msg.firstElementChild.innerText){
            msg.classList.remove("msg2");     
        }
        else{
            msg.classList.add("msg2");   
        }
    })
})

