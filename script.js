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


let valori = [];
let val;
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        val = e.target.innerText;
        if(e.target.innerText == "1" || e.target.innerText == "2" || e.target.innerText == "3" || e.target.innerText == "4" || e.target.innerText == "5" || e.target.innerText == "6" || e.target.innerText == "7" || e.target.innerText == "8" || e.target.innerText == "9" || e.target.innerText == "0"){
            parseInt(val);
            console.log(val);
        }
        bottomLine.innerText = e.target.innerText;
        valori.push(e.target.innerText);
        console.log(valori);
    });
});