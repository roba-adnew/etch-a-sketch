// Below we have code that creates the grid 

let rows = [];
let cols = [];

function createGrid (size = 25) { 

    let cellSize = Math.floor(500/size);

    for (let i = 0; i < size; i++){
        rows[i] = document.createElement('div');
        rows[i].classList.add("row",);
        rows[i].setAttribute("id","row"+(i+1));
        rows[i].style.cssText = 
            'display: flex; flex-direction: row;';
        canvas.appendChild(rows[i]);   

        for (let j = 0; j < size; j++) {
            cols["" + i + j] = document.createElement('div');
            cols["" + i + j].classList.add("cell");
            cols["" + i + j].setAttribute("id","cell-"+(i+1)+"x"+(j+1));
            cols["" + i + j].style.cssText = 
                "flex-basis: " + cellSize + "px; height: " + 
                cellSize + "px; border: 1px solid blue;";
            rows[i].appendChild(cols["" + i + j]);
        }
    }   
}

// The sketch function below changes each div that is retrieved and updates the 
// color

function sketch() {  
    const cells = document.getElementsByClassName("cell")
    Array.from(cells).forEach(cell => 
        cell.addEventListener("mouseover", function(cell) {
            let cStyle = this.style.cssText;
            cStyle += " background-color:blue;";
            this.setAttribute('style', cStyle);
        }));
}

createGrid();
sketch();

// Now we will use the button at the top of the page to allow the user to create
// a grid of their choice

// 1. Write a function that prompts the user for the number
// 1.5. A function to remove the current grid that's available
// 2. Create button element and apply function to it 

function gridSet() {
    let size = prompt("Please enter the number of cells you want to square (&le; 100)");
    if (size > 1 && size < 101) {
        const canvas = document.getElementById("canvas"); 
        canvas.replaceChildren();

        createGrid(size);
        sketch();
    }
    
}

const gridSetter = document.getElementById("button");
gridSetter.addEventListener('click', gridSet);