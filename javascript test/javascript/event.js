let p;

function init() {
  p = document.getElementById("p");
  p.addEventListener("mouseover", over);
  p.addEventListener("mouseout", out);
}

function over() {
  p.style.backgroundColor = "violet";
}
function out() {
  p.style.backgroundColor = "green";
}

function init2() {
  p = document.getElementById("p");
  p.onmouseover = function () {
    this.style.backgroundColor = "violet";
  };
  p.onmouseout = function () {
    this.style.backgroundColor = "green";
  };
}

function f(e) {
  alert(e.type);
}

// document.getElementById("j").onmouseover = f;

function run(e) {
  let text =
    "type:" +
    e.type +
    "<br>" +
    "target" +
    e.target +
    "<br>" +
    "currentTarget:" +
    e.currentTarget +
    "<br>" +
    "defaltPrevented";

  let g = document.getElementById("g");
  g.innerHTML = text;
}

function cal() {
  let exp = document.getElementById("exp");
  let result = document.getElementById("result");
  result.value = eval(exp.value);
}

let width = 1;

function down(obj) {
  obj.style.fontStyle = "italic";
}

function up(obj) {
  obj.style.fontStyle = "normal";
}

function over(obj) {
  obj.style.borderColor = "violet";
}

function out(obj) {
  obj.style.borderColor = "gray";
}

function wheel(e, obj) {
  if (e.wheelDelta < 0) {
    width--;
    if (width < 0) {
      width = 0;
    } 
  } else {
    width++;
  }
  obj.style.borderStyle = "ridge";
  obj.style.borderWidth = width + "px";
}


function hide(){
  alert("No");
  return false;
}

document.oncontextmenu = hide;

function image(){
  let px = document.getElementById("px");
  let img = document.getElementById("img");
  img.onload = function(){
    let mySpan = document.getElementById("mySpan");
    mySpan.innerHTML = img.width + X + img.height;
  }
  let index = px.selectedIndex;
  img.src = px.options[index].value;
}
