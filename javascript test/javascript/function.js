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

function res() {
  let resul = eval("3*2+2");
  b = isFinite(resul);
  document.write(b);
}

function gugudan() {
  let a = prompt("구구단 출력기", "");
  parseInt(a);
  if (isFinite(a) == true) {
    for (let i = 1; i <= 9; i++) {
      let sum = i * a;

      document.write(a + "X" + i + "=" + sum + "<br>");
    }
  } else {
    document.write("숫자가 아닙니다.");
  }
}
function guguba() {
  for (let i = 2; i <= 9; i++) {
    document.write(
      '<div style= "width:200px; float:left; text-align:center;">' +
        "[" +
        i +
        "단]<br>"
    );
    for (let j = 1; j <= 9; j++) {
      let sum = i * j;
      document.write("[" + i + "X" + j + "=" + sum + "]<br>");
    }
    document.write("</div>");
  }
}

function lunch() {
  let lun = [];
  let num = 0;
  for (num = 1; num <= 5; num++) {
    lun.concat(prompt("점심메뉴를 적어주세요!"));
  }
  let result = confirm(
    "메뉴 입력이 완료되었습니다.\n" + "결과를 보시겠습니까?"
  );
  if (result == true) {
    alert(
      "리스트: " + lun + "\n" + "결과: " + lun[Math.floor(Math.random() * num)]
    );
  } else {
    alert("취소되었습니다.");
  }
}
function col() {
  let back = new Date();
  if (back.getSeconds() % 2 == 0) {
    document.body.style.backgroundColor = "blue";
  } else if (back.getSeconds() % 3 == 0) {
    document.body.style.backgroundColor = "violet";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}

function lotto() {
  let b = confirm("로또번호를 받으시겠습니까?");
  let c = [];
  for (let i = 1; c.length < 6; i++) {
    let a = Math.floor(Math.random() * 45) + 1;
    if (c.indexOf(a) == -1) {
      c = c.concat(a);
    }
  }
  c.sort(function (l, j) {
    if (l > j) return 1;
    if (l < j) return -1;
    return 0;
  });
  alert(c);
}

function holjak() {
  let a = prompt("이름을 입력하세요.", "");
  const code = Math.floor(Math.random() * 10000) + 1;
  let user = {
    name: a,
    mycode: code,
  };

  let money = 50000;

  if (a !== null) {
    confirm(
      "이름: " +
        a +
        "\n" +
        "고유코드: " +
        code +
        "\n" +
        "현재잔액: 50000" +
        "\n" +
        "홀,짝게임을 시작하겠습니다." +
        "\n" +
        "확인은 홀 취소는 짝입니다."
    );
    for (let i = 1; money !== 0; i++) {
      let rannum = Math.floor(Math.random() * 2);
      let result = confirm("홀,짝을 선택하세요.");
      let nowmoney = 0;

      if (result == rannum) {
        nowmoney = money + 5000;
        money = nowmoney;
        alert("맞췄습니다! " + "\n 현재금액: " + money);
        console.log("승리하였습니다. " + "\n 현재금액: " + money);
      } else {
        nowmoney = money - 5000;
        money = nowmoney;
        alert("틀렸습니다! " + "\n 현재금액: " + money);
        console.log("패배하였습니다." + "\n 현재금액: " + money);
      }
      if (money >= 100000) {
        alert("당신은 승리하였습니다!!");
        return;
      } else if (money <= 0) {
        alert("당신은 패배하였습니다.");
        return;
      }
    }
  }
}

function lott() {
  let num = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "가",
    "나",
    "다",
    "라",
    "마",
  ];
  let sum = [];

  for (i = 0; sum.length < 4; i++) {
    let rannum = num[Math.floor(Math.random() * 14)];
    if (sum.indexOf(rannum) == -1) {
      sum = sum.concat(rannum);
    }
  }

  sum.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  document.write("오늘의 당첨번호:" + "[" + sum + "]");
}

function lotttest() {
  let num = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "가",
    "나",
    "다",
    "라",
    "마",
  ];
  let sum = [];
  let my = ["1", "7", "가", "라"];
  let count = 0;
  while (sum.join("") !== my.join("")) {
    sum = [];
    for (let i = 0; sum.length < 4; i++) {
      let rannum = num[Math.floor(Math.random() * 15)];
      if (sum.indexOf(rannum) === -1) {
        sum.push(rannum);
      }
      console.log("로또번호배출");
    }

    sum.sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
    console.log("정렬");
    count++;
  }

  document.write(
    "오늘의 당첨번호:" +
      "[" +
      sum +
      "]" +
      "\n 내 당첨번호: " +
      "[" +
      my +
      "]" +
      "\n 돌아간 횟수:" +
      "[" +
      count +
      "]"
  );
}

function birth() {
  let students = [
    { name: "가", birth: new Date(1999, 0, 26) },
    { name: "나", birth: new Date(1999, 1, 23) },
    { name: "다", birth: new Date(1999, 2, 15) },
    { name: "라", birth: new Date(1999, 3, 29) },
    { name: "마", birth: new Date(1999, 4, 4) },
    { name: "바", birth: new Date(1999, 5, 18) },
    { name: "사", birth: new Date(1999, 6, 12) },
    { name: "아", birth: new Date(1999, 7, 18) },
    { name: "자", birth: new Date(1999, 8, 6) },
    { name: "카", birth: new Date(1999, 10, 20) },
    { name: "타", birth: new Date(1999, 11, 14) },
    { name: "파", birth: new Date(2000, 12, 23) },
    { name: "하", birth: new Date(2000, 1, 17) },
    { name: "A", birth: new Date(2000, 2, 4) },
    { name: "B", birth: new Date(2000, 3, 16) },
    { name: "C", birth: new Date(2000, 4, 5) },
    { name: "D", birth: new Date(2000, 5, 15) },
    { name: "E", birth: new Date(2000, 6, 21) },
    { name: "F", birth: new Date(2000, 7, 25) },
    { name: "G", birth: new Date(2000, 8, 13) },
    { name: "H", birth: new Date(2000, 9, 5) },
    { name: "I", birth: new Date(2000, 10, 30) },
    { name: "J", birth: new Date(2000, 12, 14) },
  ];
  let day_now = new Date();
  let day_now_month = (day_now.getMonth() + 1) //+ (day_now.getDay()+1);
  let day_now_day = day_now.getDate();
  // let name = students.name;

  for (i = 0; i <= students.length; i++) {
    let student = students[i];
    let birth = student.birth;
    let birth_month = (birth.getMonth() + 1) //+birth.getDay();
    let birth_day = birth.getDate();
    if (birth_month == day_now_month && birth_day == day_now_day) {
      document.write("생일축하"+ "\n"+"생일인사람: "+student.name);
      console.log("비교중");
      console.log(birth_month);
      console.log(day_now_month);
      console.log(birth_day);

    } else {
      
      break;
    }
  }
}
