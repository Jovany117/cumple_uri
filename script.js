document.addEventListener('DOMContentLoaded', () => {
    const confettiElements = document.querySelectorAll('.confetti');
    confettiElements.forEach((element, index) => {
        element.style.fill = getRandomColor();
        element.style.animationDelay = `${Math.random() * 2}s`;
    });

    const cakeButton = document.getElementById('cake-button');
    const cakeContainer = document.getElementById('cake-container');

    cakeButton.addEventListener('click', () => {
        cakeContainer.classList.toggle('hidden');
        setTimeout(() => {
            cakeContainer.classList.toggle('visible');
        }, 10); // Slight delay to trigger transition
    });
});

function getRandomColor() {
    const colors = ['#ff9999', '#66ff66', '#6699ff', '#ff66cc', '#ffff66'];
    return colors[Math.floor(Math.random() * colors.length)];
}
