$(document).ready(function () {
  renderCurrentTime();
});

//현재 시간
function renderCurrentTime() {
  let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let datetime = data["datetime"].substr(11, 5);
      $("#currentTime").text(datetime);
    });
}

$(document).ready(function () {
  renderCurrentTime();
  renderQuote();
});

// 명언
function renderQuote() {
  let url = `https://api.quotable.io/random`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let content = `" ${data["content"]} "`;
      let author = `- ${data["author"]} -`;
      $("#quoteContent").text(content);
      $("#quoteAuthor").text(author);
    });
}

// 배경 이미지 변경
const bg = document.querySelector("#background");

// let randomNumber = Math.floor(Math.random() * 8) + 1;
// document.querySelector(".img_box").classList.add("bg0" + randomNumber);

// 함수 만들어서 onload마다 ㄴbg에 클래스 리스트 추가하면 안되나?
// pallex 하고 싶은데 z-index 줘야하나
