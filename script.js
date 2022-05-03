const screen = document.querySelector(".screen");
const topLine = document.getElementById("topLine");
const bottomLine = document.getElementById("bottomLine");

const btnClear = document.getElementById("clear");
const btnDelete = document.getElementById("delete");

const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btnDivision = document.getElementById("division");

const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btnMultiplication = document.getElementById("multiplication");

const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btnSubtraction = document.getElementById("subtraction");

const btnDot = document.getElementById("dot");
const btn0 = document.getElementById("0");
const btnEqual = document.getElementById("equal");
const btnAddition = document.getElementById("addition");

let operatorSelected = false;

/** stampa a schermo */
const values = document.querySelectorAll(".value");
values.forEach((button) => {
    button.addEventListener('click', (e) => {
        //console.log("button: " + operatorSelected);
        if(bottomLine.innerText == 0 || operatorSelected == true){ bottomLine.innerText = ""; }
        if(bottomLine.innerText == "."){ bottomLine.innerText = "0.";}
        bottomLine.innerText = bottomLine.innerText + e.target.innerText;
        operatorSelected = false;
    });
});

/** inserimento valori nell'array e stampa nella topLine*/
let stringTopLine = "";
let valori = [];
const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        //console.log("operetor: " + operatorSelected);
        operatorSelected = true;
        valori.push(bottomLine.innerText);
        valori.push(e.target.innerText);
        valori.forEach((x) => {
            stringTopLine = stringTopLine + " " + x;
        });
        topLine.innerText = stringTopLine;
        console.log(valori);
        console.log(stringTopLine);
        stringTopLine = "";
    });
});


/** clear */
btnClear.addEventListener('click', () => {
    operatorSelected = false;
    bottomLine.innerText = "";
    topLine.innerText = "";
    valori = [];
});


/** delete */
btnDelete.addEventListener('click', () => {
    bottomLine.innerText = bottomLine.innerText.substr(0, bottomLine.innerText.length-1);
});


/** funzioni = */
/*
btnEqual.addEventListener('click', () => {

});
*/