const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const colorButton = document.querySelector("#color-button");
var color = 'black';
var currentSize = 16;
window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);
colorButton.addEventListener("click", manualColor);

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}


function manualColor() {
    color = prompt("which color?");
    clearGrid();
      fillGrid(currentSize);
}
  

function changeColor(e) {
    e.target.style.backgroundColor = `${color}`;
  }

function changeSize() {
  let newSize = prompt("Enter new size");
    currentSize = newSize;
  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-64 range");
      changeSize();
    } else {
      clearGrid();
      setGridSize(newSize);
      fillGrid(newSize);
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}
