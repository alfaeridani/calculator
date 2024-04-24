function add(first, second) {
    return Number(first) + Number(second);
}

function subtract(first, second) {
    return Number(first) - Number(second);
}

function multiply(first, second) {
    return Number(first) * Number(second);
}

function divide(first, second) {
    return Number(first) / Number(second);
}

function operate(operator, first, second){
    switch (operator) {
        case '+':
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case '*':
            result = multiply(first, second);
            break;
        case '/':
            result = divide(first, second);
            break;           
    }
    return result;
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
        } else if (idName === 'equals') {
            secondNumber = displayNumber;
            result = operate(operator, firstNumber, secondNumber);
            displayNumber = result;
            display.textContent = displayNumber;
        } else {
            switch (idName) {
                case 'add' :
                    operator = '+';
                    break;
                case 'subtract' :
                    operator = '-';
                    break;
                case 'multiply' :
                    operator = '*';
                    break;
                case 'divide' :
                    operator = '/';
                    break;
            }
            if (firstNumber === '') {
                firstNumber = displayNumber;
                displayNumber = '';
            } else if (firstNumber != '') {
                result = operate(operator, firstNumber, displayNumber);
                displayNumber = result;
            }
        }
    });
});