const decreament=document.getElementById("btn-dec"); 
const Reset=document.getElementById("btn-reset");
const increament=document.getElementById("btn-inc");
const counter=document.querySelector("p");

let count=0;
increament.addEventListener("click",()=>{
    count++;
    counter.innerText=count;}
);

decreament.addEventListener("click",()=>{
    count --;
    counter.innerText=count;}
);
Reset.addEventListener("click",()=>{
    count =0;
    counter.innerText=count;}
);

