const container = document.querySelector(".container");
console.log(container);

for(let i=0;i<16;i++){
    let row = document.createElement('div');
    row.classList.add("row");
    row.style.cssText = "display: flex;";
    for(let j=0;j<16;j++){
        let col = document.createElement('div');
        col.style.cssText = "width: 15px;height: 15px; border-style: solid; border-color: black; background-color: pink";
        col.classList.add("col");
        col.addEventListener('mouseover', () => {
            console.log(col);
            col.style.backgroundColor = 'blue';
        });
        row.appendChild(col);
    }
    container.appendChild(row);
}