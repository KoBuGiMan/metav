function cal() {
  let a = prompt("숫자를 입력하세요", "");
  let b = prompt("숫자를 하나 더 입력해주세요", "");

  a = Number(a);
  b = Number(b);

  alert(a > b ? a + b : a - b);
}

function as() {
  let num = prompt("숫자를 입력해주세요", "");
  num = Number(num);

  if (num === 1) {
    alert("소수입니다");
  } else if (num === 2) {
    alert("소수입니다.");
  } else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        alert("소수가 아닙니다.");
        return;
      } else {
        alert("소수입니다.");
        return;
      }
    }
  }
}

function abc() {
  let a = prompt("점수를 입력해주세요", "");
  a = parseInt(a);
  let b;

  switch (true) {
    case a >= 95:
      b = "A+학점 입니다";
      break;
    case a >= 90:
      b = "A학점 입니다.";
      break;
    case a >= 80:
      b = "B학점 입니다.";
      break;
    case a >= 70:
      b = "C학점 입니다.";
      break;
    case a >= 60:
      b = "D학점 입니다.";
      break;
    default:
      b = "F학점 입니다.";
  }
  alert(b);
}

function hol() {
  let i;
  for (i = 1; i <= 100; i += 2) {
    document.write("(" + i + ")");
  }
}

function jak() {
  let i = 0;
  while (i <= 100) {
    document.write("(" + i + ")");
    i += 2;
  }
}

function dowh() {
  let i = 0;
  do {
    document.write("(" + i + ")");
    i += 2;
  } while (i <= 100);
}

function plus() {
  let a = prompt("숫자를 입력하세요.", "");
  let pls = 0;
  a = parseInt(a);

  for (let i = 0; i <= a; i++) {
    pls += i;
  }
  document.write(pls);
}

function plus2() {
  let a = prompt("숫자를 입력하세요.", "");
  let pls = 0;
  a = parseInt(a);

  for (let i = 0; i <= a; i++) {
    if (i % 10 !== 9) {
      pls += i;
      //document.write("\("+i+"\)");
    }
  }
  document.write(pls);
}

function over() {
  let i = 0;
  let sum = 0;
  while (true) {
    sum += i;
    if (sum > 3000) {
      break;
    }
    i++;
  }
  document.write(i + "번째 더하기에서 스탑");
}
