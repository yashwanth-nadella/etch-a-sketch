function generateCanvas(n){
    let container = document.querySelector(".container");
    console.log(container);
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
                // console.log(col);
                col.style.backgroundColor = 'black';
            });
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}
function clearCanvas(){
    let container = document.querySelector(".container");
    // console.log(container);
    // console.log(container.childNodes.length);
    for(let i=0;i<container.childNodes.length;i++){
        // console.log(container.childNodes[i]);
        let row = container.childNodes[i];

        // console.log(row.childNodes.length);
        for(let j=0;j<row.childNodes.length;j++){
            row.childNodes[j].style.backgroundColor = 'white';
        }
    }
}
function rainbowPen(){
    let container = document.querySelector(".container");
    console.log(container);
    console.log(container.childNodes.length);
    for(let i=0;i<container.childNodes.length;i++){
        // console.log(container.childNodes[i]);
        let row = container.childNodes[i];
        // console.log(row.childNodes.length);
        for(let j=0;j<row.childNodes.length;j++){
            let col = row.childNodes[j];
            col.addEventListener('mouseover', ()=> {
                col.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
                // console.log(col);
            });
        }
    }
}
function eraser(){
    let container = document.querySelector(".container");
    console.log(container);
    console.log(container.childNodes.length);
    for(let i=0;i<container.childNodes.length;i++){
        // console.log(container.childNodes[i]);
        let row = container.childNodes[i];
        // console.log(row.childNodes.length);
        for(let j=0;j<row.childNodes.length;j++){
            let col = row.childNodes[j];
            col.addEventListener('mouseover', ()=> {
                col.style.backgroundColor = "white";
                // console.log(col);
            });
        }
    }
}

generateCanvas(16);
// let n = prompt("Enter the number of squares");
clearCanvas();