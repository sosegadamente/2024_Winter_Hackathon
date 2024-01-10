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

    // Show icons in iconContainer
    const iconContainers = document.querySelectorAll('.iconContainer');
    iconContainers.forEach((container) => {
        container.style.display = 'block';
    });

    // Remove animation class when hiding the cardInfo
    cardInfo.classList.remove('showCardInfo');

    cardOnClick.style.display = 'none';
}

// Event listeners for each card
document.getElementById('machine1').addEventListener('click', () => showCardOnClick('firstOnClick'));
document.getElementById('machine2').addEventListener('click', () => showCardOnClick('secondOnClick'));
document.getElementById('machine3').addEventListener('click', () => showCardOnClick('thirdOnClick'));
document.getElementById('machine4').addEventListener('click', () => showCardOnClick('fourthOnClick'));
document.getElementById('machine5').addEventListener('click', () => showCardOnClick('fifthOnClick'));
document.getElementById('machine6').addEventListener('click', () => showCardOnClick('sixthOnClick'));
document.getElementById('machine7').addEventListener('click', () => showCardOnClick('seventhOnClick'));
document.getElementById('machine8').addEventListener('click', () => showCardOnClick('eighthOnClick'));
document.getElementById('machine9').addEventListener('click', () => showCardOnClick('ninthOnClick'));
