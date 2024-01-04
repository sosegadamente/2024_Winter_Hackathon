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
