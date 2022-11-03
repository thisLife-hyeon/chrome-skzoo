function randombg() {
  let change = Math.floor(Math.random() * 8) + 1;
  const skzoos = [
    "url(img/skzoo01.png)",
    "url(img/skzoo02.png)",
    "url(img/skzoo03.png)",
    "url(img/skzoo04.png)",
    "url(img/skzoo05.png)",
    "url(img/skzoo06.png)",
    "url(img/skzoo07.png)",
    "url(img/skzoo08.png)",
  ];
  document.getElementById("background").style.backgroundImage = skzoos[change];
}

setTimeout(function () {
  randombg();
}, 500);

function clock() {
  const clockTitle = document.querySelector(".clock-main");
  const clockSubTitle = document.querySelector(".clock-sub");
  const date = new Date();
  // 디자인 할때 필요하면 날짜도 만들기.
  // const day = Math.floor(String(date.getDate()).padStart(2, "0"));
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clockTitle.innerText = `${hours}:${minutes}`;
  clockSubTitle.innerText = `${seconds}`;
}

clock();
setInterval(clock, 1000);
