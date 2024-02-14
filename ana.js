let hh = document.getElementById('hour');
let mm = document.getElementById('min');
let ss = document.getElementById('sec');

function displayTime(){

let date = new Date();
 
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();


let hRotation = 30*hr + min/2;
let mRotation = min*6;
let sRotation = sec*6;
 
hh.style.transform = `rotate(${hRotation}deg)`;
mm.style.transform = `rotate(${mRotation}deg)`;
ss.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime ,1000);