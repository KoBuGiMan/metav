let i = 0;
function talking() {
  let talks = [
    { tall: "안녕!!", img: "../img/어른때.jpg" },
    { tall: "반가워ㅎㅎ" , img: "../img/어릴때.jpg"},
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
  let imgpapa = document.getElementById("imgNow");
  let newTalk = document.createElement("div");
  newTalk.innerHTML = a.tall;
  newTalk.setAttribute("id", "myTalk");
  newTalk.style.fontSize = "30px";
  newTalk.style.textAlign = "center";

  // newImg.innerHTML = a.img;
  let newImg = document.createElement("img");
  newImg.setAttribute("id","myImg");
  newImg.style.width = "300px";
  newImg.style.height = "200px";
  // let y = talks.img[i]
  newImg.src = a.img;

  if (i <= talks.length && i > 0) {
    imgpapa.removeChild(myImg);
    obj.removeChild(myTalk);
    imgpapa.appendChild(newImg);
    obj.appendChild(newTalk);
    i++;
  } else if(i == 0 || i < 0){
    i = 0;
    imgpapa.appendChild(newImg);
    obj.appendChild(newTalk);
    i++;
  }else{
    return;
  }
}

console.log(i);
function removeTalking() {
  let talks = [
    { tall: "안녕!!", img: "../img/어른때.jpg"},
    { tall: "안녕!!", img: "../img/어른때.jpg" },
    { tall: "반가워ㅎㅎ" , img: "../img/어릴때.jpg"},
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
  let imgpapa = document.getElementById("imgNow");

  let newImg = document.createElement("img");
  newImg.innerHTML = a.img;
  newImg.setAttribute("id","myImg");
  newImg.style.width = "300px";
  newImg.style.height = "200px";
  newImg.style.textAlign = "center";
  newImg.src = a.img;
  

  if (i < 0 || i == 0) {
    a = talks[0];
    i++;
  } else if(i > 0 && i<=talks.length){
    imgpapa.removeChild(myImg);
    obj.removeChild(myTalk);
    imgpapa.appendChild(newImg);
    obj.appendChild(newTalk);
  }else{
    return;
  }
}

