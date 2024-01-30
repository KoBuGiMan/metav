
let p;

function init(){
  p = document.getElementById("p");
  p.addEventListener("mouseover", over);
  p.addEventListener("mouseout" , out);
  
}

function over(){
  p.style.backgroundColor = "violet";
}
function out(){
  p.style.backgroundColor = "green";
}