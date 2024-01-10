// JavaScript code for handling card interactions

// Function to show cardOnClick and bind click event for blackOut
function showCardOnClick(cardId) {
    const cardOnClick = document.getElementById(cardId);
    cardOnClick.style.display = 'block';

    const blackOut = cardOnClick.querySelector('.blackOut');
    const cardInfo = cardOnClick.querySelector('.cardInfo');

    blackOut.addEventListener('click', () => hideCardOnClick(cardId));

    // Add animation class to cardInfo for smooth appearance
    cardInfo.classList.add('showCardInfo');
}

// Function to hide cardOnClick
function hideCardOnClick(cardId) {
    const cardOnClick = document.getElementById(cardId);
    const cardInfo = cardOnClick.querySelector('.cardInfo');

    // Remove animation class when hiding the cardInfo
    cardInfo.classList.remove('showCardInfo');

    cardOnClick.style.display = 'none';
}

// Event listeners for each card
document.getElementById('firstCard').addEventListener('click', () => showCardOnClick('firstOnClick'));
document.getElementById('secondCard').addEventListener('click', () => showCardOnClick('secondOnClick'));
document.getElementById('thirdCard').addEventListener('click', () => showCardOnClick('thirdOnClick'));
document.getElementById('fourthCard').addEventListener('click', () => showCardOnClick('fourthOnClick'));
document.getElementById('fifthCard').addEventListener('click', () => showCardOnClick('fifthOnClick'));
document.getElementById('sixthCard').addEventListener('click', () => showCardOnClick('sixthOnClick'));
document.getElementById('seventhCard').addEventListener('click', () => showCardOnClick('seventhOnClick'));
document.getElementById('eighthCard').addEventListener('click', () => showCardOnClick('eighthOnClick'));
document.getElementById('ninthCard').addEventListener('click', () => showCardOnClick('ninthOnClick'));

