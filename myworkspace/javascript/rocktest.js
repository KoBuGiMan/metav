// function showMessage(from,text){
//   alert(from+text);
// }
// showMessage('그냥 ','이(가) 용사가 되었습니다!');

// function my(num,str){
//   alert(num+str);

// }
// my('심심','하다')

// let rdm1 = Math.floor(Math.random()*50);
// let rdm2 = Math.floor(Math.random()*20);

// function sum(a,b){
//   return a * b;
// }

// let result = sum(rdm1,rdm2);
// alert(result);

// let rsp2 = ["가위", "바위", "보"];
// let rsp = prompt("가위바위보", "");

// let comrsp = rsp2[Math.floor(Math.random() * rsp2.length)];

// let message;

// if (rsp === comrsp) {
//   message = "무승부입니다!";
// } else {
//   switch (rsp + comrsp) {
//     case "가위바위":
//     case "바위보":
//     case "보가위":
//       message = "졌습니다!";
//       break;
//     case "가위보":
//     case "바위가위":
//     case "보바위":
//       message = "이겼습니다";
//       break;
//   }
// }
// alert('유저:'+rsp+'\n'+'컴퓨터:'+comrsp+'\n'+message);

let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
let img = document.getElementById("img");
const result = document.getElementById("result");

let imgArray = new Array();
imgArray[0] = "img/rock.png";
imgArray[1] = "img/scissors.png";
imgArray[2] = "img/paper.png";

let a;

function imgRandom() {
  a = Math.floor(Math.random() * 3);
  img.src = imgArray[a];
}
setInterval(imgRandom, 100);

scissor.onclick = () => {
  clearInterval();
  //가위를 냈을때
  if (a == 0) {
    console.log("가위,바위");
    alert("졌습니다!");
  } else if (a == 1) {
    console.log("가위,가위");
    alert("비겼습니다!");
  } else {
    console.log("가위,보");
    alert("이겼습니다!");
  }
};
rock.onclick = () => {
  clearInterval();
  //바위를 냈을때
  if (a == 0) {
    console.log("바위,바위");
    alert("비겼습니다!");
  } else if (a == 1) {
    console.log("바위,가위");
    alert("이겼습니다!");
  } else {
    console.log("바위,보");
    alert("졌습니다!");
  }
};

paper.onclick = () => {
  clearInterval();
  //보를 냈을때
  if (a == 0) {
    console.log("보,바위");
    alert("이겼습니다!");
  } else if (a == 1) {
    console.log("보,가위");
    alert("졌습니다!");
  } else {
    console.log("보,보");
    alert("비겼습니다!");
  }
};

function autoResizeIframe() {
  $("#iframe1").on("load", function () {
    if (this.contentDocument) {
      $(this).height(this.contentDocument.documentElement.scrollHeight);
    } else {
      $(this).height(this.contentWindow.document.body.scrollHeight);
    }
  });
}
