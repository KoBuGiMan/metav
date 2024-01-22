let rsp2 = ["가위", "바위", "보"];
let rsp = prompt("가위바위보", "");

let comrsp = rsp2[Math.floor(Math.random() * rsp2.length)];

let message;

if (rsp === comrsp) {
  message = "무승부입니다!";
} else {
  switch (rsp + comrsp) {
    case "가위바위":
    case "바위보":
    case "보가위":
      message = "졌습니다!";
      break;
    case "가위보":
    case "바위가위":
    case "보바위":
      message = "이겼습니다";
      break;
  }
}
alert('유저:'+rsp+'\n'+'컴퓨터:'+comrsp+'\n'+message);