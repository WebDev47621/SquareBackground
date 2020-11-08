const scene = document.querySelector('.scene');

function createSquares() {
    const square = document.createElement('span');
    const size = 20 + Math.floor(Math.random() * 20);
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    square.className = 'square';

    square.style.width = size + 'px';
    square.style.height = size + 'px';
    square.style.top = y + 'px';
    square.style.left = x + 'px';

    scene.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 5000);
}

setInterval(createSquares, 500);