const $hamburger = document.querySelector(".hamburger");
console.log($hamburger);
const $sideMenu = document.querySelector(".sideMenu");
const $blackOut = document.querySelector(".blackout");
const $gnb = document.querySelector(".gnb");
const $header = document.querySelector("header");
const xBtn = document.querySelector(".gnb > i");

// 햄버거매뉴 클릭 시 aside형식으로 나오게 만들기
$hamburger.addEventListener("click", function () {
  $sideMenu.classList.add("open");
  $blackOut.classList.add("open");

  document.body.style.overflow = "hidden";
});

// 다른곳 클릭시 사이드 네비게이션 닫기
$blackOut.addEventListener("click", function () {
  $sideMenu.classList.remove("open");
  $blackOut.classList.remove("open");

  document.body.style.overflow = "auto";
});
xBtn.addEventListener("click", function () {
  $sideMenu.classList.remove("open");
  $blackOut.classList.remove("open");

  document.body.style.overflow = "auto";
});

//반응형 사이드 메뉴 열렸을 때 스크롤 막기
function disableScroll() {
  if ($sideMenu.classList.contains("open")) {
    document.addEventListener("scroll");
  }
}

// 텍스트 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  animateText();
});
function animateText() {
  const h2Elements = document.querySelectorAll(".temp_ h2");
  const h5Element = document.querySelector(".temp_ h5");

  h2Elements.forEach((h2, index) => {
    setTimeout(() => {
      h2.style.opacity = "1";
      h2.style.transform = "translateY(0)";
    }, index * 500); // 각 h2 요소가 0.5초 간격으로 나타남
  });

  setTimeout(() => {
    h5Element.style.opacity = "1";
    h5Element.style.transform = "translateY(0)";
  }, h2Elements.length * 400); // h5 요소는 모든 h2 요소가 나타난 후에 나타남
// JavaScript code for handling card interactions

// Function to show cardOnClick and bind click event for blackOut
function showCardOnClick(cardId) {
    const cardOnClick = document.getElementById(cardId);
    cardOnClick.style.display = 'block';

    const blackOut = cardOnClick.querySelector('.blackOut');
    blackOut.addEventListener('click', () => hideCardOnClick(cardId));
}

// Function to hide cardOnClick
function hideCardOnClick(cardId) {
    const cardOnClick = document.getElementById(cardId);
    cardOnClick.style.display = 'none';
}

// Event listeners for each card
document.getElementById('firstCard').addEventListener('click', () => showCardOnClick('firstOnClick'));
document.getElementById('secondCard').addEventListener('click', () => showCardOnClick('secondOnClick'));
document.getElementById('thirdCard').addEventListener('click', () => showCardOnClick('thirdOnClick'));
document.getElementById('fourthCard').addEventListener('click', () => showCardOnClick('fourthOnClick'));
