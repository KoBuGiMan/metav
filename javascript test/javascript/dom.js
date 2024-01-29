function ptes() {
  let p = document.getElementById("testp");
  let ptext = "p.id = " + p.id + "\n";
  ptext += "p.tagName = " + p.tagName + "\n";
  ptext += "p.innerHTML = " + p.innerHTML + "\n";
  ptext += "p.style.color = " + p.style.color + "\n";
  alert(ptext);
}

function buttontest(){
  let span = document.getElementById("btn");
  span.style.color = "black";
  span.style.fontSize = "50px";
  
}

function imgtest(){
  let p = document.getElementById("imgt");
  p.innerHTML = "나의<img style = 'width:300px; height:200px;' src ='../img/어릴때.jpg'>푸바오";
}

