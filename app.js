const board = document.getElementById('board');
const colors = ['#e74c3c', '#8c44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES_NUMBER = 500;

for(let i = 0; i < SQUARES_NUMBER; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseleave', event => setColor(event.target, '#1d1d1d'));
    board.appendChild(square);
}

board.addEventListener('mouseover', onMouseOver);

function setColor(element, color) {
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}`;
}

function getRandomColor() {
    const index = (Math.random() * colors.length) | 0;
    return colors[index];
}

function onMouseOver(event) {
    if (event.target.classList.contains('square')) {
        setColor(event.target, getRandomColor());
    }
}