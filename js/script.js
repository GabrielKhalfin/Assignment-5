let columns = 1;

function addRow() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for(let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        allowChangeColor(cell);
        row.appendChild(cell);
    }
}

function removeRow() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}

function addColumn() {
    columns++;
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        allowChangeColor(cell);
        tr[i].appendChild(cell);
    }
}

function removeColumn() {
    columns--;
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }
}

let selectedColor = "";
let mouseHold = false;
let currentColor = "";
