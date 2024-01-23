function over(pic) {
  pic.src = "../img/어릴때.jpg";
}
function out(pic) {
  pic.src = "../img/어른때.jpg";
}

function mess(al) {
  al = alert("아 배고프다");
}

function wr() {
  document.write("당신은 숲에 있습니다.");
}

// let pop = prompt("나이를 적으세요","");
// if(pop < 20){
//   alert("미성년입니다.");
// }else if(20<=pop && pop<=60)                                    {
//   alert("성인입니다.");
// }else{
//   alert("노인입니다.");
// }

function fj() {
  
  let ans = confirm("전직하시겠습니까?");

  if (ans == true) {
    ans = prompt("어떤 직업으로 전직하시겠습니까? \"ex\" 전사,도적,마법사,궁수");
    if (ans == "전사") {
      alert("전사로 전직하였습니다!");
    } else if (ans == "도적") {
      alert("도적으로 전직하였습니다!");
    } else if (ans == "궁수") {
      alert("궁수로 전직하였습니다!");
    } else if (ans == "마법사") {
      alert("마법사로 전직하였습니다!");
    } else {
      alert("유효하지 않은 직업입니다.");
    }
  }

  if (ans == false) {
    alert("전직에 실패했습니다.");
  }
}




