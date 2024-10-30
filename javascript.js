const grid = document.querySelector("#grid");

makeGrid(4);

function makeGrid(x) {
  let n = 1;
  for (let i = 0; i < x; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row container");
    row.setAttribute("id", `row-${i}`);

    for (let j = 0; j < x; j++) {
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute("id", `square-${n++}`);
      row.appendChild(square);
    }

    grid.appendChild(row);
  }
}
