const $hamburger = document.querySelector(".hamburger");
const $sideMenu = document.querySelector(".sideMenu");
const $blackOut = document.querySelector(".blackout");
const $gnb = document.querySelector(".gnb");

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

function disableScroll() {
  if ($sideMenu.classList.contains("open")) {
    document.addEventListener("scroll");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  animateText();
});

function animateText() {
  const h2Elements = document.querySelectorAll('.temp_ h2');
  const h5Element = document.querySelector('.temp_ h5');

  h2Elements.forEach((h2, index) => {
      setTimeout(() => {
          h2.style.opacity = '1';
          h2.style.transform = 'translateY(0)';
      }, index * 500); // 각 h2 요소가 0.5초 간격으로 나타남
  });

  setTimeout(() => {
      h5Element.style.opacity = '1';
      h5Element.style.transform = 'translateY(0)';
  }, h2Elements.length * 400); // h5 요소는 모든 h2 요소가 나타난 후에 나타남
}
