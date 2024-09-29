let input = document.querySelector("#item");
let submit = document.querySelector(".submit-btn");
let edit = document.querySelector(".edit-btn")
let itemsList = document.querySelector(".items-list");
let remove = document.querySelector(".remove");
let btn = document.querySelector(".btn");
let msg = document.querySelector(".msg");
// let deletes = document.querySelectorAll(".delete");

let arr = [];

function getData(dataId){
    return new Promise((resolve,reject)=>{
        msg.innerText = dataId ;
        setTimeout(()=>{
            msg.innerHTML = "";
            resolve("success");
        }, 1000 );//2sec
    })
}




remove.addEventListener("click",(e)=>{console.log("abc");
    arr = [];
    addList(arr);
    (async function(){
        await getData("Empty List");
    })();
    remove.classList.add("display");
    e.preventDefault();
    
})


const addList = (arr)=>{
    const addItems = arr.map((item,idx)=>{
        return `<span class="items">
                    <p>${item}</p> 
                    <div class="option">
                        <div class="edit" id=${idx}>edit</div>
                        <div class="delete" id=${idx}>delete</div>
                    </div>
                </span>`;
    }).join("");
    itemsList.innerHTML = addItems;

    

    let deletes = document.querySelectorAll(".delete");
    deletes.forEach((item)=>{
        
        item.addEventListener("click",()=>{
            arr.splice(item.id,1);
            addList(arr);
            // console.log(arr);
            (async function(){
                await getData("Item Removed");
            })();
            
            if (arr.length != 0){
                remove.classList.remove("display");
            }else{
                remove.classList.add("display");
            }
        })
        
    })



    let edits = document.querySelectorAll(".edit");
    edits.forEach((item)=>{
        item.addEventListener("click",()=>{
            let element = item.parentElement.parentElement.firstElementChild;
            // console.log(element.innerText);
            input.value = element.innerText;
            // submit.classList.add("display");
            const editlist1 = arr.filter((item)=>{
                if(item === element.innerText){
                    // console.log(element.innerText);
                    return item;
                } 
            })
            console.log(editlist1);
            const editlist2 = editlist1.reduce((value,item)=>{
                if(!value.includes(item)){console.log(item);
                    value.push(item);
                }
                return value;
            },[])
            console.log(editlist2);
            const editbtn = editlist2.map((item)=>{
                return `<button class="edit-btn">Edit</button>`;
            }).join("");
            btn.innerHTML = editbtn;
            let edit = btn.querySelector(".edit-btn");
            edit.addEventListener("click",(e)=>{
                if(input.value){
                    arr.splice(item.id,1,input.value);
                    addList(arr);
                    edit.remove();
                    btn.appendChild(submit);
                    input.value = "";
                    (async function(){
                        await getData("Value Changed");
                    })();
                }else{
                    (async function(){
                        await getData("Please Enter Value");
                    })();
                }
                
                e.preventDefault();
            })
            
        })
        
    })

}

submit.addEventListener("click",(e)=>{
    if(input.value){
        arr.push(input.value);
        (async function(){
           await getData("Item Added To The List");
        })();
    }else{
        (async function(){
            await getData("Please Enter Value");
        })();
    }
    if (arr.length != 0){
        remove.classList.remove("display");
    }
    
    
    addList(arr);
    input.value = "";
    e.preventDefault();


})

// window.addEventListener("DOMContentLoaded",()=>{console.log("123");
//     // addList(arr);
//     submit.addEventListener("click",(e)=>{
//         if(input.value){
//             arr.push(input.value);
//             (async function(){
//                await getData("Item Added To The List");
//             })();
//         }else{
//             (async function(){
//                 await getData("Please Enter Value");
//             })();
//         }
//         if (arr.length != 0){
//             remove.classList.remove("display");
//         }
        
        
//         addList(arr);
//         input.value = "";
//         e.preventDefault();
//         console.log("1234");
//         console.log(arr);


    
//     })
    
// })