const btn = document.querySelector('.btn button');
let countNum = document.querySelector('.countNum');

btn.addEventListener('click', countUp); 

function countUp(){
    countNum.innerHTML += 1;
}