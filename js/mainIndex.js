
const $hamburger = document.querySelector('.hamburger');
const $sideMenu = document.querySelector('.sideMenu');
const $blackOut = document.querySelector('.blackout');
const $gnb = document.querySelector('.gnb');

// 햄버거매뉴 클릭 시 aside형식으로 나오게 만들기
$hamburger.addEventListener('click', function(){
    // console.log(1);
    $sideMenu.classList.add('open')
    $blackOut.classList.add('open')    
    // setTimeout(() => {
    //     $blackOut.classList.add('open')
    // }, 750);
})