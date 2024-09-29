// const d = new Date("July 14, 2024 18:32:00");
// let year = d.getFullYear();
// let month = d.getMonth();
// let date = d.getDate();

// let dc = new Date();

// let day = d.getDate() - dc.getDate();



// console.log(dc.getTime());




let timer = ()=>{
    const d = new Date("July 24, 2024 11:30:00");
    let dc = new Date();
    let time = d.getTime()-dc.getTime();
    const sec = 1000*1;
const minute = sec * 60;
const hour = minute * 60;
const day = hour * 24;
// const Year = Day * 365;

let remainDay = time % day;
let remainhour = remainDay % hour;
let remainmin = remainhour % minute;
let remainsec = remainmin % sec;


let days = Math.floor((time-remainDay)/day);

let hours = Math.floor((remainDay-remainhour)/hour);

let mins = Math.floor((remainhour-remainmin)/minute);

let secs = Math.floor((remainmin-remainsec)/sec);
let values = [days,hours,mins,secs];

const format = (item)=>{
    if (item<10){
        return `0${item}`;
    }
    return item;
}

let counts = document.querySelectorAll(".count");


counts.forEach((count,index)=>{
    count.innerHTML = format(values[index]);
});

let deadline = document.querySelector(".deadline");
if (time<0){
    clearInterval(countdown);
    deadline.innerHTML = "sorry, this giveaway has expired!";
}

}



const countdown = setInterval(timer,1000);
timer();

