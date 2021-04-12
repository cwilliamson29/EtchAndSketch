window.addEventListener('load', setGridDrawBox);

let container = document.getElementById('gridDrawBox');

//GRID SIZES AND GRID CLEAR
let small = document.getElementById('small');
small.addEventListener('click', function(){changeGrid(80,60,8);});

let medium = document.getElementById('medium');
medium.addEventListener('click', function(){changeGrid(40,30,18);});

let large = document.getElementById('large');
large.addEventListener('click', function(){changeGrid(20,15,38)})

let clear = document.getElementById('clear');
clear.addEventListener('click', setGridDrawBox);

//COLOR SELECTORS
let drawBlack = document.getElementById('drawBlack');
drawBlack.addEventListener('click', function(){selectColor('black')});

let drawGray = document.getElementById('drawGray');
drawGray.addEventListener('click', function(){selectColor('gray')});

let drawRandom = document.getElementById('drawRandom');
drawRandom.addEventListener('click', function(){selectColor('random')})

let gridWidthNumber = 20;
let gridHeightNumber = 15;
let boxPx = "38px";

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
    let GridSquared = gridWidthNumber * gridHeightNumber;

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
let colorChoice = "black";

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