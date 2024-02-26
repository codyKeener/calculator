// Create functions for add, subtract, multiply, divide
// Create variables for numerator1, operator, and numerator2
// Make screen work where the number gets replaced every time and then the answer value is replaces numerator1 for the next function
// Make it to where the operator can be changed
// Make the clear button go back to zero

let numerator1 = 0;
let operator;
let numerator2;

const addFunction = function(number1, number2) {
    let addAnswer = number1 + number2;
    return(addAnswer);
}

const subtractFunction = function(number1, number2) {
    let subtractAnswer = number1 - number2;
    return(subtractAnswer);
}

const multiplyFunction = function(number1, number2) {
    let multiplyAnswer = number1 * number2;
    return(multiplyAnswer);
}

const divideFunction = function(number1, number2) {
    let divideAnswer = number1 / number2;
    return(divideAnswer);
}

const operate = function(numerator1, operator, numerator2) {
    
}


const screenParagraph = document.getElementById("screenParagraph");
const screenNode = document.createTextNode(numerator1);
screenParagraph.appendChild(screenNode);