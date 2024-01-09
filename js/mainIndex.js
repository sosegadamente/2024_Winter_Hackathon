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
