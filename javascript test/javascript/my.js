let i = 0;
function talking() {
  let talks = [
    { tall: "안녕!!" },
    { tall: "반가워ㅎㅎ" },
    { tall: "뭐하고있어?" },
    { tall: "나?" },
    { tall: "나는 유튜브 보고있었지" },
    { tall: "아 진짜?!" },
    { tall: "와 대단하다!!" },
    { tall: "아니야..." },
    { tall: "웅웅" },
    { tall: "그냥 하고싶었어" },
    { tall: "왜 안돼?" },
    { tall: "내맘이지!!" },
    { tall: "그래그래" },
  ];

  let a = talks[i];
  const jsona = JSON.stringify(a);
  let obj = document.getElementById("now");
  let newTalk = document.createElement("div");
  newTalk.innerHTML = a.tall;
  newTalk.setAttribute("id", "myTalk");
  newTalk.style.fontSize = "30px";
  newTalk.style.textAlign = "center";
  alert(i);
  if (i <= talks.length && i > 0) {
    obj.removeChild(myTalk);
    obj.appendChild(newTalk);
    i++;
  } else if(i == 0 || i < 0){
    i = 0;
    obj.appendChild(newTalk);
    i++;
  }else{
    return;
  }
}

console.log(i);
function removeTalking() {
  let talks = [
    { tall: "안녕!!" },
    { tall: "안녕!!" },
    { tall: "반가워ㅎㅎ" },
    { tall: "뭐하고있어?" },
    { tall: "나?" },
    { tall: "나는 유튜브 보고있었지" },
    { tall: "아 진짜?!" },
    { tall: "와 대단하다!!" },
    { tall: "아니야..." },
    { tall: "웅웅" },
    { tall: "그냥 하고싶었어" },
    { tall: "왜 안돼?" },
    { tall: "내맘이지!!" },
    { tall: "그래그래" },
  ];

  alert(i);
  --i;
  let a = talks[i];
  const jsona = JSON.stringify(a);
  let obj = document.getElementById("now");
  let newTalk = document.createElement("div");
  let network = document.getElementById("myTalk");
  newTalk.innerHTML = a.tall;
  newTalk.setAttribute("id", "myTalk");
  newTalk.style.fontSize = "30px";
  newTalk.style.textAlign = "center";
  if (i < 0 || i == 0) {
    a = talks[0];
    i++;
  } else if(i > 0 && i<=talks.length){
    obj.removeChild(myTalk);
    obj.appendChild(newTalk);
  }else{
    return;
  }
}

// function removeTalking() {
//   let talks = [
//     { tall: "안녕!!" },
//     { tall: "반가워ㅎㅎ" },
//     { tall: "뭐하고있어?" },
//     { tall: "나?" },
//     { tall: "나는 유튜브 보고있었지" },
//     { tall: "아 진짜?!" },
//     { tall: "와 대단하다!!" },
//     { tall: "아니야..." },
//     { tall: "웅웅" },
//     { tall: "그냥 하고싶었어" },
//     { tall: "왜 안돼?" },
//     { tall: "내맘이지!!" },
//     { tall: "그래그래" },
//   ];

//   --i;
//   let a = talks[i];
//   const jsona = JSON.stringify(a);
//   let obj = document.getElementById("now");
//   let newTalk = document.getElementById("div");
//   newTalk.innerHTML = a.tall;
//   newTalk.setAttribute("id", "myTalk");
//   newTalk.style.fontSize = "30px";
//   newTalk.style.textAlign = "center";
//   obj.removeChild(newTalk);
// }
