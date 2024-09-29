const input = document.querySelector("#item");
let submit = document.querySelector(".submit-btn");
let edit = document.querySelector(".edit-btn")
let itemsList = document.querySelector(".items-list");
let remove = document.querySelector(".remove");


let arr = [];

const addList = (arr)=>{
    const addItems = arr.map((item,idx)=>{
        return `<span class="items">
                    <p>${item}</p> 
                    <div class="option">
                        <div class="edit" id=${idx} data-id=${item}>edit</div>
                        <div class="delete" id=${idx} data-id=${item}>delete</div>
                    </div>
                </span>`;
    }).join("");
    itemsList.innerHTML = addItems;

    let deletes = document.querySelectorAll(".delete");
    deletes.forEach((item)=>{
        
        item.addEventListener("click",()=>{console.log("xyz");
            arr.splice(item.id,1);
            addList(arr);
            console.log(arr);
        })
    })

    let edits = document.querySelectorAll(".edit");
    edits.forEach((item)=>{
        item.addEventListener("click",()=>{
            
            let element = item.parentElement.parentElement.firstElementChild;
            input.value = element.innerText;
            submit.classList.add("display");
            edit.classList.remove("display");
            const oldvalue = document.createAttribute("oldvalue");
            input.setAttributeNode(oldvalue);
            oldvalue.value = input.value;
            console.log(oldvalue.value);
            
            arr.splice(item.id,1,input.value);
            console.log(arr);
            
            edit.addEventListener("click",(e)=>{
                console.log(oldvalue.value);
                console.log(input.value);
                // console.log(item.dataset.id);
                // console.log(element.innerText);
                for(i=0;i<arr.length;i++){
                    if(arr[i] = oldvalue.value){
                        arr.splice(i,1,input.value);
                        // input.value = "";
                    }else{
                        arr;
                    }
                }
                console.log(arr);
                addList(arr);
                submit.classList.remove("display");
                edit.classList.add("display");
                e.preventDefault();
                
            })

            
              
        }) 
        console.log(arr);
        
        
    })

    

    

    

}

submit.addEventListener("click",(e)=>{
    if(!input.value){
       console.log("abc"); 
    }else{
        arr.push(input.value);
        input.value = "";
    }
    addList(arr);
    e.preventDefault();
    console.log(arr);

    

})




// edit.addEventListener("click",(e)=>{
//     console.log(element.innerText);
//     if(element.innerText === item.dataset.id){
//         arr.splice(item.id,1,input.value);
//     }else{
//         arr;
//     }
//     addList(arr);
//     console.log(arr);
//     e.preventDefault();
//     submit.classList.remove("display");
//     edit.classList.add("display");
// })