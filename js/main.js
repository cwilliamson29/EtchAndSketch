let container = document.getElementById('gridDrawBox');

//let gridWidthNumber = 20;
//let gridHeightNumber = 15;
//let boxPx = "38px"

//let gridWidthNumber = 40;
//let gridHeightNumber = 30;
//let boxPx = "18px"

let gridWidthNumber = 80;
let gridHeightNumber = 60;
let boxPx = "8px"

//let gridSquareWidthHeight = "10px"

//large 35px
//medium 22px
//small 10px
function changeGrid(num1, num2, px){
    gridWidthNumber = num1;
    gridHeightNumber = num2;
    boxPx = px + "px";

    setGridDrawBox();
}
function removeGridDrawBox(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function setGridDrawBox(){
    removeGridDrawBox();
    //window.location.reload(); 
    let GridSquared = gridWidthNumber * gridHeightNumber;
    //gridSquareWidthHeight = "10px";
    //boxPx = px + "px";


    for (i=0; i < GridSquared; i++){
        let div = document.createElement('div');
        div.style.width = boxPx;
        div.style.height = boxPx;
        div.addEventListener("mouseover", changeColor)
        div.className = "gridSquare";
        container.appendChild(div);
    }
}
let boxColor;
let colorChoice = "random";

function selectColor(colorPass){
    colorChoice = colorPass;
    console.log(colorPass + " and choice " + colorChoice)
}
function changeColor(z){
    setBoxColor(colorChoice);
    z.target.style.backgroundColor = boxColor;
}

function setBoxColor(color){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + r + ", " + b + ", " + g + ")";

    if(color === "random"){
        boxColor = randomColor;
    }else if(color === "black"){
        boxColor = "black";
    }else if(color === "gray"){
        boxColor = "rgb(90, 90, 90)"
    }
}
setGridDrawBox();
//setBoxColor(colorChoice);
//setBoxColor(random);


//container.appendChild(div);
//let div = document.createElement('div');
//div.classList.add("gridSquare");