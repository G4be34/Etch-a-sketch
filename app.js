const choice = 16;

let columns = choice;
let rows = choice;

const grid = document.getElementById('grid-body');

for (let i = 0; i < columns; i++) {
    let column = document.createElement('div');
    column.className = 'column';
    for (let r = 0; r < rows; r++) {
        let row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    };
    grid.appendChild(column);
};
