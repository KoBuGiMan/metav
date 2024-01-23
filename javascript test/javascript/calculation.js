 function cal(){
  let a = prompt("숫자를 입력하세요","");
  let b = prompt("숫자를 하나 더 입력해주세요","");
  
  a = Number(a);
  b = Number(b);
  
  alert((a>b)?(a+b):(a-b));
 }
 