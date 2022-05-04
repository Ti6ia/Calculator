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
let input = "";
values.forEach((button) => {
    button.addEventListener('click', (e) => {
        input = e.target.innerText;
        if(input == "."){
            for(let i = 0; i < bottomLine.innerText.length; i++){
                if(bottomLine.innerText[i] == "."){
                    input = "";
                }
            }
        }
        if(bottomLine.innerText == 0 || operatorSelected == true){ bottomLine.innerText = ""; }
        if(bottomLine.innerText == "."){ bottomLine.innerText = "0.";}
        bottomLine.innerText = bottomLine.innerText + input;
        operatorSelected = false;
    });
});

/** inserimento valori nell'array e stampa nella topLine*/
let stringTopLine = "";
let valori = [];
const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
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
    stringTopLine = "";
});


/** delete */
btnDelete.addEventListener('click', () => {
    bottomLine.innerText = bottomLine.innerText.substr(0, bottomLine.innerText.length-1);
});


/** EQUAL */
let result; //tmp risultato
let c = false;  //se ci sono x e / nell'array
let operations = function(array){
    valori.push(bottomLine.innerText);
    valori.forEach((x) => {
        stringTopLine = stringTopLine + " " + x;
    });
    topLine.innerText = stringTopLine;
    while(array.length > 1){ //continuo fino a quando l'array non mostra solo il risultato 
        console.log("while: " + array);
        c = false;
        //controllo se ci sono x e / e setto c
        array.forEach((v) => { if(v == "x" || v == "%"){c = true;} });
        //se ci sono x e / allora eseguo quelli
        if(c == true){
            console.log("xe/ s: " + array);
            //trovo la posizione dell'operatore e lo svolgo
            for(let i = 0; i < array.length; i++){
                //moltiplicazione
                if(array[i] == "x"){
                    result = array[i-1] * array[i+1];
                    array[i-1] = result;
                    array.splice(i, 2);
                    i--;
                }
                //divisione
                if(array[i] == "%"){
                    result = array[i-1] / array[i+1];
                    array[i-1] = result;
                    array.splice(i, 2);
                    i--;
                }
            }
            console.log("xe/  f: " + array);
        }
        if(c == false){
            console.log("+e-  s: " + array);
            //trovo la posizione dell'operatore e lo svolgo
            for(let i = 0; i < array.length; i++){
                //addizione
                if(array[i] == "+"){
                    result = parseFloat(array[i-1]) + parseFloat(array[i+1]);
                    array[i-1] = result;
                    array.splice(i, 2);
                    i--;
                    console.log("+: " + array);
                }
                //sottrazione
                if(array[i] == "-"){
                    result = array[i-1] - array[i+1];
                    array[i-1] = result;
                    array.splice(i, 2);
                    i--;
                    console.log("-: " + array);
                }
            }
            console.log("+e-  f: " + array);
        }
    }
    console.log(array);
    bottomLine.innerText = array[0].toFixed(2);
}

btnEqual.addEventListener('click', () => {operations(valori);});