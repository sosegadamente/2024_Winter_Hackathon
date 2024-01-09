//카드들 선택하기
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const thirdCard = document.querySelector('#thirdCard');
const fourthCard = document.querySelector('#fourthCard');

// 카드들 아래있는 녀석들
const blackOut = document.querySelector('.blackOut');
const cardInfo = document.querySelector('.cardInfo');

//각각의 카드를 선택했을때 맞게 나와야할 녀석들
const firstOnClick = document.querySelector('#firstOnClick');
const secondOnClick = document.querySelector('#secondOnClick');
const thirdOnClick = document.querySelector('#thirdOnClick');
const fourthOnClick = document.querySelector('#fourthOnClick');

// 각각의 카드를 선택했을 때 이벤트 리스너 추가
firstCard.addEventListener('click', () => {
    firstOnClick.style.display = 'flex';
    blackOut.style.display = 'block';
    cardInfo.style.display = 'block';
});

// 각각의 카드를 선택했을 때 이벤트 리스너 추가
secondCard.addEventListener('click', () => {
    secondOnClick.style.display = 'flex';
    blackOut.style.display = 'block';
    cardInfo.style.display = 'block';
});

// 각각의 카드를 선택했을 때 이벤트 리스너 추가
thirdCard.addEventListener('click', () => {
    thirdOnClick.style.display = 'flex';
    blackOut.style.display = 'block';
    cardInfo.style.display = 'block';
});

// 각각의 카드를 선택했을 때 이벤트 리스너 추가
fourthCard.addEventListener('click', () => {
    fourthOnClick.style.display = 'flex';
    blackOut.style.display = 'block';
    cardInfo.style.display = 'block';
});
