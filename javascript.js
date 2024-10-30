const grid = document.querySelector("#grid");
const button = document.querySelector("#replace-grid");

makeGrid(4);

grid.addEventListener("mouseover", hoverOn);
grid.addEventListener("mouseout", hoverOff);
button.addEventListener("click", replaceGrid);

function makeGrid(x) {
  let n = 1;
  for (let i = 0; i < x; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row container");
    row.setAttribute("id", `row-${i}`);

    for (let j = 0; j < x; j++) {
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute("id", `square-${i}-${j}`);
      randomColor(square);
      row.appendChild(square);
    }
    grid.appendChild(row);
  }
}

function replaceGrid() {
  let x;
  do {
    x = prompt("Enter grid size");
  } while (x > 100);
  grid.replaceChildren();
  makeGrid(x);
}

function hoverOn(event) {
  // event.target.style.backgroundColor = "violet"
  let opacity = parseFloat(event.target.style.opacity);
  if (opacity >= 1) return;
  else event.target.style.opacity = opacity + 0.1;
}

function hoverOff(event) {
  // event.target.style.backgroundColor = "";
}

function randomColor(square) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  square.style.opacity = 0;
}