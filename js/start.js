document.addEventListener("DOMContentLoaded", function () {
    animateText();
});

function animateText() {
    const h2Elements = document.querySelectorAll('.temp_ h2');
    const h5Element = document.querySelector('.temp_ h5');
    const startNow = document.querySelector('.startNow');

    h2Elements.forEach((h2, index) => {
        setTimeout(() => {
            h2.style.opacity = '1';
            h2.style.transform = 'translateY(0)';
        }, index * 500);
    });

    setTimeout(() => {
        h5Element.style.opacity = '1';
        h5Element.style.transform = 'translateY(0)';
    }, h2Elements.length * 500);

    setTimeout(() => {
        startNow.style.opacity = '1';
        startNow.style.transform = 'translateY(0)';
    }, h2Elements.length * 1000);
}
