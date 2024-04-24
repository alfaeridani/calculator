function add(first, second) {
    return Number(first) + Number(second);
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(operator, first, second){
    if (operator === "+") {
        return add(first, second);
    } else if (operator === "-") {
        return subtract(first, second);
    } else if (operator === "*") {
        return multiply(first, second);
    } else if (operator === "/") {
        return divide(first, second);
    }
}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

let displayNumber = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        idName = button.id;
        if (idName.substring(0, 6) === 'number') {
            number = button.id.charAt(6);
            displayNumber += number;
            display.textContent = displayNumber;
        } else if (idName === 'clear') {
            displayNumber = displayNumber.slice(0, -1);
            display.textContent = displayNumber;
        } else if (idName === 'decimal' && displayNumber.includes('.') === false) {
            displayNumber += '.';
            display.textContent = displayNumber;
        } else if (idName === 'add') {
            operator = '+';
            if (firstNumber === '') {
                firstNumber = displayNumber;
                displayNumber = '';
            } else if (firstNumber != '') {
                result = operate(operator, firstNumber, displayNumber);
                displayNumber = result;
            }
        } else if (idName === 'equals') {
            secondNumber = displayNumber;
            result = operate(operator, firstNumber, secondNumber);
            displayNumber = result;
            display.textContent = displayNumber;
        }
    });
});