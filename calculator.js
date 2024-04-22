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

let display = document.getElementsByClassName("display");

let n1 = document.querySelector("#n1");
n1.addEventListener('click', )

console.log(operate(operator, firstNumber, secondNumber));