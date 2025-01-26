
const container = document.querySelector(".container")
const button = document.querySelector("#btn")
let size = 0
const gridPx = 500
container.style.width = `${gridPx}px`
container.style.height = `${gridPx}px`
//square.setAttribute("id")

button.addEventListener("click", (e) => {
    
    size = 0
    gridSize();
});

function gridSize(){
    removeGrid(container)
    let userInput = prompt("Creates a x by x grid. Ex: 16 = 16x16 grid", "Enter grid size between 0-100")
    if (userInput > 100 || userInput < 1) {
        gridSize()
    } else {
        gridMath = gridPx/userInput
        grid(userInput)
    }
}

function grid(size){
    //while there are less than 16 square in the column, append new square
    let i = 1
    let total = size*size
    while(i<=total){
        const square = document.createElement("div");
        square.setAttribute("id", `square${i}`)
        square.setAttribute("class", "square")
        square.style.width = `${gridMath}px`;
        container.appendChild(square)
        i++
    }
    i = 1
};

function removeGrid(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

grid(2)