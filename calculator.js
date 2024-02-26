// Create functions for add, subtract, multiply, divide
// Create variables for numerator1, operator, and numerator2
// Make screen work where the number gets replaced every time and then the answer value is replaces numerator1 for the next function
// Make it to where the operator can be changed
// Make the clear button go back to zero

let numerator1 = 0;
let operator = "";
let numerator2;
let displayValue = "0";
let lastClickedButton = "";

const addFunction = function(number1, number2) {
    let addAnswer = parseFloat(number1) + parseFloat(number2);
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

const operate = function() {
    let operateAnswer;

    if (operator == "add") {
        operateAnswer = addFunction(numerator1, numerator2);
    } else if (operator == "subtract") {
        operateAnswer = subtractFunction(numerator1, numerator2);
    } else if (operator == "multiply") {
        operateAnswer = multiplyFunction(numerator1, numerator2);
    } else if (operator == "divide") {
        operateAnswer = divideFunction(numerator1, numerator2);
    } else {
        operateAnswer = numerator1;
    }
    return(operateAnswer);
}


const screenParagraph = document.getElementById("screenParagraph");
const screenNode = document.createTextNode(displayValue);
screenParagraph.appendChild(screenNode);

const clearButton = document.getElementById("clearButton");
const divideButton = document.getElementById("divideButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const multiplyButton = document.getElementById("multiplyButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const subtractButton = document.getElementById("subtractButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const addButton = document.getElementById("addButton");
const zeroButton = document.getElementById("zeroButton");
const decimalButton = document.getElementById("decimalButton");
const equalsButton = document.getElementById("equalsButton");

// const buttons = document.getElementsByTagName("button");

clearButton.addEventListener("click", function() {
    displayValue = "0"
    screenNode.nodeValue = displayValue;
    numerator1 = "0";
    lastClickedButton = "clear";
});

divideButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "multiplyButton" || lastClickedButton == "divideButton") {
        operator = "divide";
    } else if (operator == "divide" && numerator2 == 0) {
        displayValue = "Nice Try";
        screenNode.nodeValue = displayValue;
    } else if (operator != "") {
        equalsAnswer = operate();
            if (equalsAnswer > .000001 && equalsAnswer <= 999999999) {
                equalsAnswerString = String(equalsAnswer).substring(0, 9);
                displayValue = equalsAnswerString;
                screenNode.nodeValue = displayValue;
                numerator1 = parseFloat(equalsAnswerString);
            } else {
                // need to figure out how to make exponentials (scientific notation) work for numbers over 999999999)
                equalsAnswerString = String(equalsAnswer.toExponential());
                equalsAnswerString = equalsAnswerString.slice(0, 2) + equalsAnswerString.slice((equalsAnswerString.length - 4), (equalsAnswerString.length))
                displayValue = equalsAnswerString;
                screenNode.nodeValue = displayValue;
                numerator1 = parseFloat(equalsAnswerString);
            }
        }
    operator = "divide";
    lastClickedButton = "divideButton";

    // divideButton.style.backgroundColor = "white";
    // divideButton.style.color = "orange";
});

sevenButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "7";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "7"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "7";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "7"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "7";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
    lastClickedButton = "7";
});

eightButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "8";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "8"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "8";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "8"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "8";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
lastClickedButton = "8";
});

nineButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "9";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "9"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "9";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "9"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "9";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
lastClickedButton = "9";
});

multiplyButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "multiplyButton" || lastClickedButton == "divideButton") {
        operator = "multiply";
    } else if (operator == "divide" && numerator2 == 0) {
        displayValue = "Nice Try";
        screenNode.nodeValue = displayValue;
    } else if (operator != "") {
        equalsAnswer = operate();
            if (equalsAnswer > .000001 && equalsAnswer <= 999999999) {
                equalsAnswerString = String(equalsAnswer).substring(0, 9);
                displayValue = equalsAnswerString;
                screenNode.nodeValue = displayValue;
                numerator1 = parseFloat(equalsAnswerString);
            } else {
                // need to figure out how to make exponentials (scientific notation) work for numbers over 999999999)
                equalsAnswerString = String(equalsAnswer.toExponential());
                equalsAnswerString = equalsAnswerString.slice(0, 2) + equalsAnswerString.slice((equalsAnswerString.length - 4), (equalsAnswerString.length))
                displayValue = equalsAnswerString;
                screenNode.nodeValue = displayValue;
                numerator1 = parseFloat(equalsAnswerString);
            }
        }
    operator = "multiply";
    lastClickedButton = "multiplyButton";
    // multiplyButton.style.backgroundColor = "white";
    // multiplyButton.style.color = "orange";
});

fourButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "4";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "4"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "4";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "4"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "4";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
    lastClickedButton = "4";
});

fiveButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "5";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "5"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "5";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "5"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "5";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
lastClickedButton = "5";
});

sixButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "6";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "6"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "6";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "6"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "6";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
lastClickedButton = "6";
});

subtractButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "multiplyButton" || lastClickedButton == "divideButton") {
        operator = "subtract";
    } else if (operator == "divide" && numerator2 == 0) {
        displayValue = "Nice Try";
        screenNode.nodeValue = displayValue;
    } else if (operator != "") {
        // operator = "subtract";
        equalsAnswer = operate();
            if (equalsAnswer > .000001 && equalsAnswer <= 999999999) {
                equalsAnswerString = String(equalsAnswer).substring(0, 9);
                displayValue = equalsAnswerString;
                screenNode.nodeValue = displayValue;
                numerator1 = parseFloat(equalsAnswerString);
            } else {
                // need to figure out how to make exponentials (scientific notation) work for numbers over 999999999)
                equalsAnswerString = String(equalsAnswer.toExponential());
                equalsAnswerString = equalsAnswerString.slice(0, 2) + equalsAnswerString.slice((equalsAnswerString.length - 4), (equalsAnswerString.length))
                displayValue = equalsAnswerString;
                screenNode.nodeValue = displayValue;
                numerator1 = parseFloat(equalsAnswerString);
            }
        } 
    operator = "subtract";
    lastClickedButton = "subtractButton";
    // subtractButton.style.backgroundColor = "white";
    // subtractButton.style.color = "orange";
});

oneButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "1";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "1"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "1";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "1"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "1";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
    lastClickedButton = "1";
});

twoButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "2";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "2"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "2";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "2"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "2";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
lastClickedButton = "2";
});

threeButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "3";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "3"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "3";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "3"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "3";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
lastClickedButton = "3";
});

addButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "multiplyButton" || lastClickedButton == "divideButton") {
        operator = "add";
    } else if (operator == "divide" && numerator2 == 0) {
        displayValue = "Nice Try";
        screenNode.nodeValue = displayValue;
    } else if (operator != "") {
        equalsAnswer = operate();
            if (equalsAnswer > .000001 && equalsAnswer <= 999999999) {
                equalsAnswerString = String(equalsAnswer).substring(0, 9);
                displayValue = equalsAnswerString;
                screenNode.nodeValue = displayValue;
                numerator1 = parseFloat(equalsAnswerString);
            } else {
                // need to figure out how to make exponentials (scientific notation) work for numbers over 999999999)
                equalsAnswerString = String(equalsAnswer.toExponential());
                equalsAnswerString = equalsAnswerString.slice(0, 2) + equalsAnswerString.slice((equalsAnswerString.length - 4), (equalsAnswerString.length))
                displayValue = equalsAnswerString;
                screenNode.nodeValue = displayValue;
                numerator1 = parseFloat(equalsAnswerString);
            }
        }
    operator = "add";
    lastClickedButton = "addButton";
    // addButton.style.backgroundColor = "white";
    // addButton.style.color = "orange";
});

zeroButton.addEventListener("click", function() {
    if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "0";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "0"
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + "0";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "0"
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + "0";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
lastClickedButton = "0";
});

decimalButton.addEventListener("click", function() {
    if (displayValue.indexOf(".") > 0 && operator == "") {
        return;
    } else if (lastClickedButton == "addButton" || lastClickedButton == "subtractButton" || lastClickedButton == "divideButton" || lastClickedButton == "multiplyButton") {    
        displayValue = "0.";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else if (lastClickedButton == "equals" || lastClickedButton == "clear") {
        operator = "";
        numerator2 = "";
        displayValue = "0."
        screenNode.nodeValue = displayValue;
        numerator1 = displayValue;
    } else if (operator != "") {
        displayValue = displayValue + ".";
        screenNode.nodeValue = displayValue;
        numerator2 = displayValue;
    } else {
        if (displayValue == "0") {
            displayValue = "0."
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        } else if (displayValue.length >= 9) {
            return;
        } else {
            displayValue = displayValue + ".";
            screenNode.nodeValue = displayValue;
            numerator1 = displayValue;
        }
    }
lastClickedButton = "decimal";
});

equalsButton.addEventListener("click", function() {
    console.log(operator,numerator2);
    if (operator == "" || numerator2 == undefined) {
        return;
    } else if (operator == "divide" && numerator2 == 0) {
        displayValue = "Nice Try";
        screenNode.nodeValue = displayValue;
    } else {
        equalsAnswer = operate();
        if (equalsAnswer > .000001 && equalsAnswer <= 999999999) {
            equalsAnswerString = String(equalsAnswer).substring(0, 9);
            displayValue = equalsAnswerString;
            screenNode.nodeValue = displayValue;
            numerator1 = parseFloat(equalsAnswerString);
        } else {
            // need to figure out how to make exponentials (scientific notation) work for numbers over 999999999)
            equalsAnswerString = String(equalsAnswer.toExponential());
            equalsAnswerString = equalsAnswerString.slice(0, 2) + equalsAnswerString.slice((equalsAnswerString.length - 4), (equalsAnswerString.length))
            displayValue = equalsAnswerString;
            screenNode.nodeValue = displayValue;
            numerator1 = parseFloat(equalsAnswerString);
        }
    }
    lastClickedButton = "equals"
});