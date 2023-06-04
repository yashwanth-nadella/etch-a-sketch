function generateCanvas(n){
    let container = document.querySelector(".container");
    pixels.textContent = `There are ${n*n} pixels in the canvas`;
    container.innerHTML = "";
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
function penColor(color){
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
                col.style.backgroundColor = color;
                // console.log(col);
            });
        }
    }
}
function isNumeric(value) {
    return /[0-9]+/.test(value);
}


// let n = prompt("Enter the number of squares");
// const go = document.querySelector("#go");
// const text = document.querySelector("#text");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#rainbow");
const slider = document.querySelector("#slider");
const pixels = document.querySelector("#pixels");
const inkColor = document.querySelector("#penColor");

generateCanvas(16);

slider.addEventListener("mouseup", ()=>{
    clearCanvas();
    generateCanvas(slider.value);
})

clear.addEventListener("click", ()=> {
    clearCanvas();
});

eraser.addEventListener("click", () => {
    penColor("white");
});

rainbow.addEventListener("click", ()=> {
    rainbowPen();
});

inkColor.addEventListener("change", ()=> {
    console.log(inkColor.value);
    penColor(inkColor.value);
});

// go.addEventListener("click", ()=> {
//     console.log(text.value);
//     let val = text.value;
//     if(isNumeric(val)){
//         if(val>64 || val<1){
//             alert("Enter a value in the range of 1 to 64");
//         }else{
//             clearCanvas();
//             generateCanvas(val);
//         }
//     }else{
//         alert("Enter a numeric value");
//     }

// });