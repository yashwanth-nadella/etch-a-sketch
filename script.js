const container = document.querySelector(".container");
console.log(container);
const n = prompt("Enter the number of squares");
for(let i=0;i<n;i++){
    let row = document.createElement('div');
    row.classList.add("row");
    row.style.cssText = "display: flex; flex: 1";
    for(let j=0;j<n;j++){
        let col = document.createElement('div');
        // col.style.cssText = "width: 15px;height: 15px; border-style: solid; border-color: black; background-color: pink";
        col.style.cssText = "flex: 1; background-color: white";
        col.classList.add("col");
        col.addEventListener('mouseover', () => {
            console.log(col);
            col.style.backgroundColor = 'black';
        });
        row.appendChild(col);
    }
    container.appendChild(row);
}