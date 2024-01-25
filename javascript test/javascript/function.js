// let a = prompt("첫수를 입력하세요", "");
// let b = prompt("다음수를 입력하세요", "");

// a = parseInt(a);
// b = parseInt(b);

function func(a, b) {
  let res = 0;
  res = a + b;
  return res;
}

// let c = func(a, b);
// document.write(a + "+" + b + "는" + c);

function answer() {
  let a = prompt("첫수를 입력하세요", "");
  let b = prompt("다음수를 입력하세요", "");

  a = parseInt(a);
  b = parseInt(b);

  let c = func(a, b);
  document.write(a + "+" + b + "는" + c);
}

function res(){
  let resul = eval("3*2+2");
  b = isFinite(resul);
  document.write(b);
}