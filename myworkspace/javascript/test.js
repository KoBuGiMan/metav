// result = prompt("나이를 입력해주세요");
// alert(`당신의 나이는 ${result}살 입니다.`);

// let qna = confirm("왼쪽문과 오른쪽문이 있습니다. 어느쪽을 선택하시겠습니까?");

// if (qna == true){
//   alert("당신은 죽었습니다")
// } else{
//   alert("당신은 탈출했습니다.")
// }

// let tf = true;
// let ntf = Number(tf);
// alert(ntf);

let num = Math.floor(Math.random()*(100-0)+1);  

let updown = prompt("숫자를 입력해주세요.");
while(updown !== num){
  if (updown > num ){
    updown = prompt("다운");
  }else if (updown<num){
    updown = prompt("업");
  }else if (updown == num){
    updown = alert("정답입니다.");
    break;
  }
  
}


