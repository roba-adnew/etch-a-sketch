// Nesting 2 for loops to create the page with grid 

let rows = [];
let cols = [];

function createGrid () { 
    for (let i = 1; i < 9; i++){
        rows[i] = document.createElement('div');
        rows[i].classList.add("row",);
        rows[i].setAttribute("id","row"+i);
        rows[i].style.cssText = 
            'display: flex; flex-direction: row;';
        document.body.appendChild(rows[i]);   


        for (let j = 1; j < 9; j++) {
            cols["" + i + j] = document.createElement('div');
            cols["" + i + j].classList.add("cell");
            cols["" + i + j].setAttribute("id","cell-"+i+"x"+j);
            cols["" + i + j].style.cssText = 
                'flex-basis: 50px; height: 50px; border: 1px solid blue;';
            rows[i].appendChild(cols["" + i + j]);
        }
    }   
}

createGrid();

function sketch()
{  
    let cStyle = this.style.cssText;
    cStyle += " background-color:blue;";
    this.setAttribute('style', cStyle);
}

const cells = document.getElementsByClassName("cell")
Array.from(cells).forEach(cell => 
    cell.addEventListener("mouseover", func2));

