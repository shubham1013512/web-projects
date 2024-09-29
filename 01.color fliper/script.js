let body = document.querySelector("body");
let button = document.querySelector("button");

function random() {
    let x = Math.random()*256;
    let y = Math.random()*256;
    let z = Math.random()*256;
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.backgroundColor = bgColor ;
}

button.addEventListener("click",random);