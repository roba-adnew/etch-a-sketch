// Nesting 2 for loops to create the page 
// for 4 iterations, create a div with the class of row + number

let rows = [];
let cols = [];

for (let i = 1; i < 5; i++){
    rows[i] = document.createElement('div');
    rows[i].classList.add("row"+i);
    document.body.appendChild(rows[i]);   
    for (let j = 1; j < 5; j++) {
        cols["" + i + j] = document.createElement('div');
        cols["" + i + j].classList.add("col"+i);
        rows[i].appendChild(cols["" + i + j]);
    }
}   