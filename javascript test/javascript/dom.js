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

function btnstyle(obj,color,size){
  obj.style.color = color;
  obj.style.fontSize = size;
}

let text = "문서 로딩중 readyState = " +document.readyState + "\n";

function alerttest(){
  document.getElementById("input").focus()

  text += "location: "+ document.location + "\n"; //작동하는 html파일
  text += "URL = " + document.URL + "\n"; //주소
  text += "body color =" + document.body.style.color + "\n";
  text += "lastModified = " + document.lastModified + "\n" //마지막 수정시간
  text += "activeElement = " + document.activeElement + "\n" // 현재 작동하는 이벤트
  alert(text);
}


function changespan(){
  let spanArray = document.getElementsByTagName("span");
  for(let i=0;i<spanArray.length;i++){
    let span = spanArray[i];
    span.style.color = "black";
    span.style.fontSize = "30px"; 
  }
}

document.writeln("하하하하하하하");
document.writeln("하하")
document.write("하하하하하하하하");


function opentest(){
  let are = null;
  if (are == null || are.closed){
    are = window.open("","outWin","width=300,height=200");

    let text = document.getElementById("srcText");
    are.document.open();
    are.document.write(text.value);
    are.document.close();
  }
}

function create(){
  let obj = document.getElementById("parent");
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "새로생긴 DIV";
  newDiv.setAttribute("id","myDiv");
  newDiv.style.backgroundColor = "red";
  newDiv.onclick = function(){
    let p = this.parentElement;
    p.removeChild(this);
  }
  obj.appendChild(newDiv);
}