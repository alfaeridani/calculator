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

let firstNumber = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        idName = button.id;
        if (idName.substring(0, 6) === 'number') {
            number = button.id.charAt(6);
            firstNumber += number;
            display.textContent = firstNumber;
        } else if (idName === 'clear') {
            firstNumber = firstNumber.slice(0, -1);
            display.textContent = firstNumber;
        }
    });
});