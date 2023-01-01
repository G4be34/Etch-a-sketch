const choice = 16;

const grid = document.getElementById('grid-body');

function setUpGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        grid.appendChild(newDiv);
    };
};

window.onload = () => {
    setUpGrid(16)
};