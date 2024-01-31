let arrList = [];
let i = 0;

// 이름, 주소, 전화번호를 받는다.
function doSave() {
  let a = document.getElementById("myname").value;
  let b = document.getElementById("address").value;
  let c = document.getElementById("phone").value;

  document.getElementById("myname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  allArr = [a, b, c];
  arrList = JSON.stringify(arrList);
  if (arrList.indexOf(a) != -1 && arrList.indexOf(c) != -1) {
    alert("같은 이름이과 전화번호가 존재합니다");
    arrList = JSON.parse(arrList);
    return;
  } else if (arrList.indexOf(a) != -1 && arrList.indexOf(c) == -1) {
    arrList = JSON.parse(arrList);
    arrList.push(allArr);
    console.log(arrList);
    alert(arrList[i]);
    i++;
  } else {
    arrList = JSON.parse(arrList);
    arrList.push(allArr);
    console.log(arrList);
    alert(arrList[i]);
    i++;
  }
}
console.log(arrList);

// 해당 주석은 안보고 만들었지만 findName부분에
// 이름뿐만아니라 Address 나 Phone 을 집어넣어도
// 해당 배열이 출력된다.

// function doFind() {
//     let f = document.getElementById("findName").value;
//     document.getElementById("findName").value = '';
//     let arrListFind = arrList.find(nam => nam[0] === f);

//     for(i=0;i<arrList.length;i++){
//         if(arrListFind){
//             let ans = prompt("2차인증입니다. 전화번호를 입력해주세요.","phone number")
//             if(arrListFind[2] === ans){
//                 alert(arrListFind);
//             }else{
//                 alert("2차 인증에 실패했습니다.");
//             }

//         }else{
//             alert("해당 이름을 가진 사용자가 없습니다.");

//         }
//     }
// }

// 이름만 추출해서 비교하는 코드
function doFind() {
  let f = document.getElementById("findName").value;
  document.getElementById("findName").value = "";
  // arrList = JSON.stringify(arrList);

  for (i = 0; i < arrList.length; i++) {
    if (arrList[i][0] === f) {
      let ans = prompt(
        "2차인증입니다. 전화번호를 입력해주세요.",
        "phone number"
      );
      if (ans === arrList[i][2]) {
        // arrList = JSON.parse(arrList);
        alert(arrList[i]);
        return;
      } else if (ans !== arrList[i][2] && arrList[i][0] === f) {
        for (i = 1; i < arrList.length; i++) {
          if (ans === arrList[i][2] && arrList[i][0] === f) {
            alert(arrList[i]);
          }
        }
      } else {
        alert("2차 인증에 실패했습니다.");
      }
      return;
    }

    // alert("해당 이름을 가진 사용자가 없습니다.");
  }
}
