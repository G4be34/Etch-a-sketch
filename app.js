const defaultSize = 16;
const defaultMode = 'color';
const defaultColor = '#333333';

let currentSize = defaultSize;
let currentColor = defaultColor;

const smallBtn = document.getElementById('small-button');
const mediumBtn = document.getElementById('medium-button');
const largeBtn = document.getElementById('large-button');
const classBtn = document.getElementById('class-button');
const modernBtn = document.getElementById('modern-button');
const rainbowBtn = document.getElementById('rainbow-button');
const eraseBtn = document.getElementById('erase-button');
const clearBtn = document.getElementById('clear-button');

const grid = document.getElementById('grid-body');

function setUpGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        grid.appendChild(newDiv);
        newDiv.addEventListener("mouseover", function() {
            if (currentColor === "#333333" || currentColor === "#ffffff" || currentColor === "#777777") {
                newDiv.style.backgroundColor = currentColor;
            } else {
                let values = "0123456789ABCDEF".split("");
                let color = "#";
                for (let i = 0; i < 6; i++) {
                    color += values[Math.round(Math.random() * 15)];
                };
                newDiv.style.backgroundColor = color;
            };
        });
    };
};

window.onload = () => {
    setUpGrid(defaultSize)
};

function changeSize (size) {
    if (size === defaultSize) {
        setUpGrid(defaultSize)
    } else if (size === 'medium') {
        currentSize = 32;
        setUpGrid(32);
    } else if (size === 'large') {
        currentSize = 64;
        setUpGrid(64)
    };
};

function changeColor (color) {
    if (color === defaultColor) {
        currentColor = "#333333";
    } else if (color === 'erase') {
        currentColor = "#ffffff"
    } else if (color === "modern") {
        currentColor = "#777777";
    } else if (color === "rainbow") {
        currentColor = "";
    };
};

function clearBoard () {
    const divs = document.querySelectorAll('.newDiv');
    divs.forEach(div => {
        div.remove();
    });

};

function eraseColor () {
    const divs = document.querySelectorAll('.newDiv');
    divs.forEach(div => {
        div.addEventListener("mouseover", function() {
            changeColor('erase');
        });
    });
};

classBtn.addEventListener('click', function() {
    changeColor(defaultColor);
});

modernBtn.addEventListener('click', function() {
    changeColor('modern'); 
});

rainbowBtn.addEventListener('click', function() {
    changeColor('rainbow');
});

smallBtn.addEventListener('click', function() {
    clearBoard();
    changeSize(defaultSize);
});

mediumBtn.addEventListener('click', function() {
    clearBoard();
    changeSize('medium');
});

largeBtn.addEventListener('click', function() {
    clearBoard();
    changeSize('large');
});

eraseBtn.addEventListener('click', function() {
    eraseColor();
});

clearBtn.addEventListener('click', function() {
    clearBoard();
    setUpGrid(currentSize);
});




