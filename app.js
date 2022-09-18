const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8c44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES_NUMBER = 500;

for(let i = 0; i < SQUARES_NUMBER; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', onMouseOver);
    square.addEventListener('mouseleave', onMouseLeave);

    board.appendChild(square);
}


/**
 * @param {HTMLElement} element 
 * @param {string} color 
 */
function setColor(element, color) {
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}`;
}

function getRandomColor() {
    const index = (Math.random() * colors.length) | 0;
    return colors[index];
}

function onMouseOver(event) {
    const element = event.target;
    setColor(element, getRandomColor());
}

function onMouseLeave(event) {
    const element = event.target;
    setColor(element, '#1d1d1d');
}